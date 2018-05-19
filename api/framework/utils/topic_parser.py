# -*- coding: utf-8 -*-

import re
from urllib import quote


class TopicParser(object):
    NEWLINE = re.compile(r'\r?\n')
    INLINESEP = re.compile(r'\|')

    @classmethod
    def get_regex(cls, ident):
        return re.compile(r'\#{0}\#?(.+?)\#\!{0}\#?'.format(ident), re.DOTALL)

    @classmethod
    def get_slug(cls, text):
        return quote(text.strip().replace(' ', '-').lower())

    @classmethod
    def get_all_matches(cls, text, tag):
        regex = cls.get_regex(tag)
        return re.finditer(regex, text)

    @classmethod
    def get_nonempty_lines(cls, text):
        lines = cls.NEWLINE.split(text)
        return [line for line in lines if line]

    @classmethod
    def get_nonempty_params(cls, text):
        lines = cls.INLINESEP.split(text)
        return [line for line in lines if line]

    @classmethod
    def prepare_inlinelink(cls, text, match, idx):
        full = match.group(0)
        content = match.group(1)
        params = cls.get_nonempty_params(content)
        prepared = '<a class="ng-topic-inlinelink" href="' + params[0] + '"'

        if params[0].startswith('http'):
            prepared += ' target="_blank">'
        else:
            prepared += ' target="_self">'

        try:
            prepared += params[1]
        except IndexError:
            prepared += params[0]

        prepared += '</a>'
        return text.replace(full, prepared)

    @classmethod
    def prepare_inlineemph(cls, text, match, idx):
        full = match.group(0)
        content = match.group(1)
        params = cls.get_nonempty_params(content)
        prepared = '<span class="ng-topic-inlineemph">' + params[0] + '</span>'
        return text.replace(full, prepared)

    @classmethod
    def prepare_tag(cls, text, tag):
        matches = cls.get_all_matches(text, tag)
        function_name = 'prepare_{}'.format(tag)
        prepare_function = getattr(cls, function_name, None)
        idx = 0
        if prepare_function:
            for match in matches:
                idx += 1
                text = prepare_function(text, match, idx)
        return text

    @classmethod
    def substitute_params(cls, text, params={}):
        params_sub = re.finditer('\#\#(.*?)\#\#', text)
        for match in params_sub:
            try:
                text = text.replace(match.group(0), params[match.group(1)])
            except KeyError:
                pass
        return text

    @classmethod
    def parse_text(cls, text, params={}):
        # inline tags
        tags = ('inlinelink', 'inlineemph')
        for tag in tags:
            text = cls.prepare_tag(text, tag)

        # params
        text = cls.substitute_params(text, params)

        # prepare object
        current_tag = None
        current_element = None
        current_tag_counter = 0
        sect_1_counter = 0
        sect_2_counter = 0
        sect_3_counter = 0
        sect_4_counter = 0
        sect_5_counter = 0
        elements = []
        autotoc_element = {
            'id': 'autotoc',
            'params': {
                'elements': []
            },
        }
        autotoc_elements = autotoc_element['params']['elements']

        for line in text.splitlines():
            stripped_line = line.strip()
            match_start_tag = re.match(r'^\#(.*)$', stripped_line)
            match_end_tag = re.match(r'^\#\!(.*)$', stripped_line)

            if current_tag is None and match_start_tag:
                current_tag = match_start_tag.group(1)
                current_element = {
                    'id': current_tag,
                    'params': {},
                }
                current_tag_counter = 0
                if current_tag == 'autotoc':
                    elements.append(autotoc_element)
                    current_element = None
                continue

            if match_end_tag and match_end_tag.group(1) == current_tag:
                current_tag = None
                if current_element is not None:
                    elements.append(current_element.copy())
                current_element = None
                current_tag_counter = None
                continue

            if current_tag is None:
                elements.append({
                    'id': 'paragraph',
                    'params': {
                        'text': stripped_line
                    }
                })
                continue
            else:
                current_tag_counter += 1

            params = current_element['params']

            if current_tag == 'toc':
                if 'lines' in params:
                    params['lines'].append(line)
                else:
                    params['lines'] = [line]

            if current_tag == 'autotoc':
                pass  # Created above

            if current_tag == 'sect1':
                sect_1_counter += 1
                id = '{}_{}'.format(sect_1_counter, cls.get_slug(stripped_line))
                params['text'] = line
                params['id'] = id
                current_autotoc_element_sect_1 = {
                    'id': id,
                    'text': line,
                    'elements': []
                }
                autotoc_elements.append(current_autotoc_element_sect_1)

            if current_tag == 'sect2':
                sect_2_counter += 1
                id = '{}_{}_{}'.format(sect_1_counter, sect_2_counter, cls.get_slug(stripped_line))
                params['text'] = line
                params['id'] = id
                current_autotoc_element_sect_2 = {
                    'id': id,
                    'text': line,
                    'elements': []
                }
                current_autotoc_element_sect_1['elements'].append(current_autotoc_element_sect_2)

            if current_tag == 'sect3':
                sect_3_counter += 1
                id = '{}_{}_{}_{}'.format(sect_1_counter, sect_2_counter, sect_3_counter,
                                          cls.get_slug(stripped_line))
                params['text'] = line
                params['id'] = id
                current_autotoc_element_sect_3 = {
                    'id': id,
                    'text': line,
                    'elements': []
                }
                current_autotoc_element_sect_2['elements'].append(current_autotoc_element_sect_3)

            if current_tag == 'sect4':
                sect_4_counter += 1
                id = '{}_{}_{}_{}_{}'.format(sect_1_counter, sect_2_counter, sect_3_counter,
                                             sect_4_counter, cls.get_slug(stripped_line))
                params['text'] = line
                params['id'] = id
                current_autotoc_element_sect_4 = {
                    'id': id,
                    'text': line,
                    'elements': []
                }
                current_autotoc_element_sect_3['elements'].append(current_autotoc_element_sect_4)

            if current_tag == 'sect5':
                sect_5_counter += 1
                id = '{}_{}_{}_{}_{}_{}'.format(sect_1_counter, sect_2_counter, sect_3_counter,
                                                sect_4_counter, sect_5_counter,
                                                cls.get_slug(stripped_line))
                params['text'] = line
                params['id'] = id
                current_autotoc_element_sect_5 = {
                    'id': id,
                    'text': line,
                    'elements': []
                }
                current_autotoc_element_sect_4['elements'].append(current_autotoc_element_sect_5)

            if current_tag == 'quote':
                if 'lines' in params:
                    params['lines'].append(line)
                else:
                    params['lines'] = [line]

            if current_tag == 'summary':
                params['text'] = line

            if current_tag == 'info':
                if 'lines' in params:
                    params['lines'].append(line)
                else:
                    params['lines'] = [line]

            if current_tag == 'code':
                if 'lines' in params:
                    params['lines'].append(line)
                else:
                    params['lines'] = [line]

            if current_tag == 'warning':
                if 'lines' in params:
                    params['lines'].append(line)
                else:
                    params['lines'] = [line]

            if current_tag == 'link':
                if current_tag_counter == 1:
                    params['url'] = stripped_line
                elif current_tag_counter == 2:
                    params['title'] = stripped_line
                elif 'lines' in params:
                    params['lines'].append(stripped_line)
                else:
                    params['lines'] = [stripped_line]

            if current_tag == 'image':
                if current_tag_counter == 1:
                    params['url'] = stripped_line
                elif 'lines' in params:
                    params['lines'].append(stripped_line)
                else:
                    params['lines'] = [stripped_line]
        return elements
