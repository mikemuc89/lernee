import re


def format_phone(value, with_country_code=False, country_code='48'):
    if value is None:
        return ''
    stripped = re.sub(r'[^\d]', '', value.strip())
    if not re.match(r'^\d{9}$', stripped):
        return ''
    number = re.sub(r'(\d{3})(\d{3})(\d{3})', r'\1-\2-\3', stripped)
    if with_country_code:
        return '+{} {}'.format(country_code, number)
    return number
