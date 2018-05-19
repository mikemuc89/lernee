import re


def format_nip(value):
    if value is None:
        return ''
    stripped = re.sub(r'[^\d]', '', value.strip())
    if not re.match(r'^\d{10}$', stripped):
        return ''
    return re.sub(r'(\d{3})(\d{3})(\d{2})(\d{2})', r'\1-\2-\3-\4', stripped)
