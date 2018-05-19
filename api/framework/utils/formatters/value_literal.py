# -*- coding: utf-8 -*-

from math import ceil
import re


ZERO = 'zero'
UNITS = (
    'jeden',
    'dwa',
    'trzy',
    'cztery',
    'pięć',
    'sześć',
    'siedem',
    'osiem',
    'dziewięć',
)
TEN_UNITS = (
    'jedenaście',
    'dwanaście',
    'trzynaście',
    'czternaście',
    'piętnaście',
    'szesnaście',
    'siedemnaście',
    'osiemnaście',
    'dziewiętnaście',
)
TENS = (
    'dziesięć',
    'dwadzieścia',
    'trzydzieści',
    'czterdzieści',
    'pięćdziesiąt',
    'sześćdziesiąt',
    'siedemdziesiąt',
    'osiemdziesiąt',
    'dziewięćdziesiąt',
)
HUNDREDS = (
    'sto',
    'dwieście',
    'trzysta',
    'czterysta',
    'pięćset',
    'sześćset',
    'siedemset',
    'osiemset',
    'dziewięćset',
)
BASIC_MULTIPLIERS = (
    'tysiąc',
    'milion',
    'miliard',
    'bilion',
    'biliard',
    'trylion',
    'tryliard',
    'kwadrylion',
    'kwadryliard',
    'kwintylion',
    'kwintyliard',
    'sekstylion',
    'sekstyliard',
)
THOUSAND_MULTIPLIERS = ('tysiąc', 'tysiące', 'tysięcy')
MULTIPLIER_SUFFIXES = ('', 'y', 'ów')


def format_literal_hundreds(value):
    if value is None:
        return ''
    stripped = str(value).strip()
    match = re.match(r'\d{3}', stripped)
    if not match:
        return ''
    match_padded = match.group(0).rjust(3, '0')
    values = []

    hundreds = match_padded[0]
    tens = match_padded[1]
    units = match_padded[2]

    if not hundreds == '0':
        values.append(HUNDREDS[int(hundreds) - 1])
    if not tens == '0':
        if tens == '1' and not units == '0':
            values.append(TEN_UNITS[int(units) - 1])
        else:
            values.append(TENS[int(tens) - 1])
    if not units == '0' and not tens == '1':
        values.append(UNITS[int(units) - 1])

    return ' '.join(values)


def get_suffix_type(value):
    val = int(value)
    if val == 1:
        return 0
    elif val % 10 in (2, 3, 4) and val % 100 not in (12, 13, 14):
        return 1
    else:
        return 2


def get_suffix(value):
    return MULTIPLIER_SUFFIXES[get_suffix_type(value)]


def format_value_literal(value, decimal_separator=".", suffix=None, prefix=None):
    if value is None:
        return ''
    stripped = str(value).strip()
    match = re.match(r'^(\d+)(\{}(\d+))?$'.format(decimal_separator), stripped)
    if not match:
        return ''
    parts = []

    # Prefix
    if prefix is not None:
        parts.append(prefix)

    # Main
    main_part = match.group(1)
    main_part_len = int(ceil(len(main_part) / 3.0) * 3)
    main_part_padded = main_part.rjust(main_part_len, '0')
    main_split_parts = [main_part_padded[n:n+3] for n in xrange(main_part_len) if n % 3 == 0]
    main_split_parts_len = len(main_split_parts)
    for idx, item in enumerate(main_split_parts):
        if int(item) != 1 or idx + 1 == main_split_parts_len:
            parts.append(format_literal_hundreds(item))
        if idx + 2 == main_split_parts_len:
            suffix_type = get_suffix_type(item)
            parts.append(THOUSAND_MULTIPLIERS[suffix_type])
        elif idx + 1 == main_split_parts_len:
            pass
        else:
            suffix_type = get_suffix_type(item)
            parts.append(BASIC_MULTIPLIERS[idx - 1] + MULTIPLIER_SUFFIXES[suffix_type])

    # Decimal
    dec = match.group(3)
    if dec:
        rounded_dec = round(int(dec), 2)
        decimal_part = '{:0>2.0f}/100'.format(rounded_dec)
        parts.append('i')
        parts.append(decimal_part)

    # Suffix
    if suffix is not None:
        parts.append(suffix)
    return ' '.join(parts)
