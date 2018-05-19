import re


def format_nrb(value):
    if value is None:
        return ''
    stripped = re.sub(r'[^\d]', '', value.strip())
    if not re.match(r'^\d{26}$', stripped):
        return ''
    return re.sub(
        r'(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})',
        r'\1 \2 \3 \4 \5 \6 \7 \8 \9',
        stripped
    )
