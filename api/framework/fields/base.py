import re

from framework.errors import (
    ERR_FLD_IVLD_ITEM_SELECTED,
    ERR_FLD_IVLD_VALUE,
    ERR_FLD_IVLD_VALUE_REGEX,
    ERR_FLD_VALUE_REQUIRED,
    ERR_FLD_VALUE_TOO_BIG,
    ERR_FLD_VALUE_TOO_LONG,
    ERR_FLD_VALUE_TOO_SHORT,
    ERR_FLD_VALUE_TOO_SMALL,
)


class BaseField(object):
    widget_possible_keys = (
        'disabled',
        'items',
        'max_len',
        'max_value',
        'min_len',
        'min_value',
        'regex',
        'required',
        'scheme',
        'validate_items',
    )

    value = ''
    disabled = False
    required = False
    field_type = 'str'

    def __init__(self, **kwargs):
        self.errors = None
        self.hints = None
        self.warnings = None
        for key in kwargs:
            setattr(self, key, kwargs[key])

    def get_value(self):
        return self.value

    def show_value(self):
        return self.value

    def validate(self):
        value = self.get_value()

        required = getattr(self, 'required', None)
        if required and not value:
            self.errors = ERR_FLD_VALUE_REQUIRED()
            return self.errors

        max_len = getattr(self, 'max_len', None)
        if max_len:
            length = len(value)
            if length > max_len:
                self.errors = ERR_FLD_VALUE_TOO_LONG(max_len, length)
                return self.errors

        min_len = getattr(self, 'min_len', None)
        if min_len:
            length = len(value)
            if length < min_len:
                self.errors = ERR_FLD_VALUE_TOO_SHORT(min_len, length)
                return self.errors

        max_value = getattr(self, 'max_value', None)
        if max_value:
            try:
                val = float(value)
            except ValueError:
                self.errors = ERR_FLD_IVLD_VALUE()
                return self.errors
            if val > max_value:
                self.errors = ERR_FLD_VALUE_TOO_BIG(max_value, val)
                return self.errors

        min_value = getattr(self, 'min_value', None)
        if min_value:
            try:
                val = float(value)
            except ValueError:
                self.errors = ERR_FLD_IVLD_VALUE()
                return self.errors
            if val < min_value:
                self.errors = ERR_FLD_VALUE_TOO_SMALL(min_value, val)
                return self.errors

        regex = getattr(self, 'regex', None)
        if regex and not re.match(regex, self.value):
            self.errors = ERR_FLD_IVLD_VALUE_REGEX()
            return self.errors

        items = getattr(self, 'items', None)
        validate_items = getattr(self, 'validate_items', True)
        if items and validate_items:
            specific_item = next((x for x in items if x['id'] == value), None)
            if not specific_item:
                self.errors = ERR_FLD_IVLD_ITEM_SELECTED()
                return self.errors

        self.errors = None
        return self.errors

    def widget(self):
        widget = {
            'field_type': self.field_type or 'str',
        }
        for key in self.widget_possible_keys:
            attr = getattr(self, key, None)
            if attr:
                widget.update({
                    key: attr
                })
        return widget

    def render(self, data=None, validate=False):
        if data is not None:
            self.value = data
        result = {
            'value': self.get_value(),
            'errors': self.errors,
            'widget': self.widget()
        }
        if self.hints:
            result.update({
                'hints': self.hints,
            })
        if self.warnings:
            result.update({
                'warnings': self.warnings,
            })
        return result
