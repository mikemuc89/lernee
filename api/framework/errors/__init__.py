# -*- coding: utf-8 -*-

def viewerror(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return {
            'errors': result
        }
    return wrapper


'''
Field errors
'''


def ERR_001(lang='pl'):
    return {
        'en': 'This field is required.',
        'pl': 'To pole jest wymagane.',
    }[lang]


ERR_FLD_VALUE_REQUIRED = ERR_001


def ERR_002(lang='pl'):
    return {
        'en': 'Invalid value.',
        'pl': 'Niepoprawna wartość.',
    }[lang]


ERR_FLD_IVLD_VALUE = ERR_002


def ERR_003(maxLen=None, actualLen=None, lang='pl'):
    if maxLen is not None and actualLen is not None:
        return {
            'en': ('Value is too long. Must be at most {} characters, '
                   'but has {} characters.').format(maxLen, actualLen),
            'pl': ('Wartość jest zbyt długa. Musi mieć co najwyżej {} znaków, '
                   'ale ma {} znaków.').format(maxLen, actualLen),
        }[lang]

    if maxLen is not None:
        return {
            'en': 'Value is too long. Must be at most {} characters.'.format(maxLen),
            'pl': 'Wartość jest zbyt długa. Musi mieć co najwyżej {} znaków.'.format(maxLen),
        }[lang]

    return {
        'en': 'Value is too long.',
        'pl': 'Wartość jest zbyt długa.',
    }[lang]


ERR_FLD_VALUE_TOO_LONG = ERR_003


def ERR_004(minLen=None, actualLen=None, lang='pl'):
    if minLen is not None and actualLen is not None:
        return {
            'en': ('Value is too short. Must be at least {} characters, '
                   'but has {} characters.').format(maxLen, actualLen),
            'pl': ('Wartość jest zbyt krótka. Musi mieć co najwyżej {} znaków, '
                   'ale ma {} znaków.').format(maxLen, actualLen),
        }[lang]

    if minLen is not None:
        return {
            'en': 'Value is too short. Must be at least {} characters.'.format(minLen),
            'pl': 'Wartość jest zbyt krótka. Musi mieć co najwyżej {} znaków.'.format(minLen),
        }[lang]

    return {
        'en': 'Value is too short.',
        'pl': 'Wartość jest zbyt krótka.'
    }[lang]


ERR_FLD_VALUE_TOO_SHORT = ERR_004


def ERR_005(maxValue=None, actualValue=None, lang='pl'):
    if maxValue is not None and actualValue is not None:
        return {
            'en': ('Value is too big. Must be at most {}, '
                   'but is {}.').format(maxValue, actualValue),
            'pl': ('Wartość jest zbyt duża. Musi to być co najwyżej {}, '
                   'a jest {}.').format(maxValue, actualValue),
        }[lang]

    if maxValue is not None:
        return {
            'en': 'Value is too big. Must be at most {}.'.format(maxValue),
            'pl': 'Wartość jest zbyt duża. Musi to być co najwyżej {}.'.format(maxValue),
        }[lang]

    return {
        'en': 'Value is too big.',
        'pl': 'Wartość jest zbyt duża.',
    }[lang]


ERR_FLD_VALUE_TOO_BIG = ERR_005


def ERR_006(minValue=None, actualValue=None, lang='pl'):
    if minValue is not None and actualValue is not None:
        return {
            'en': ('Value is too small. Must be at least {}, '
                   'but is {}.').format(minValue, actualValue),
            'pl': ('Wartość jest zbyt mała. Musi to być co najmniej {}, '
                   'a jest {}.').format(minValue, actualValue),
        }[lang]

    if minValue is not None:
        return {
            'en': 'Value is too small. Must be at least {}.'.format(minValue),
            'pl': 'Wartość jest zbyt mała. musi to być co najmniej {}.'.format(minValue),
        }[lang]

    return {
        'en': 'Value is too small.',
        'pl': 'Wartość jest zbyt mała.',
    }[lang]


ERR_FLD_VALUE_TOO_SMALL = ERR_006


def ERR_007(lang='pl'):
    return {
        'en': 'Invalid item selected.',
        'pl': 'Wybrano nieprawidłową opcję.',
    }[lang]


ERR_FLD_IVLD_ITEM_SELECTED = ERR_007


def ERR_008(lang='pl'):
    return {
        'en': 'Invalid value.',
        'pl': 'Nieprawidłowa wartość.',
    }[lang]


ERR_FLD_IVLD_VALUE_REGEX = ERR_008


def ERR_009(lang='pl'):
    return {
        'en': 'Wrong username or password.',
        'pl': 'Błędna nazwa użytkownika lub hasło.',
    }[lang]


ERR_FLD_IVLD_USER_PASS = ERR_009


def ERR_010(lang='pl'):
    return {
        'en': 'Passwords do not match.',
        'pl': 'Hasła nie są zgodne.',
    }[lang]


ERR_FLD_NOT_MATCHIMG_PASS = ERR_010


def ERR_011(lang='pl'):
    return {
        'en': 'E-mails do not match.',
        'pl': 'Adresy e-mail nie są zgodne.',
    }[lang]


ERR_FLD_NOT_MATCHING_EMAIL = ERR_011


def ERR_012(lang='pl'):
    return {
        'en': 'This username is taken.',
        'pl': 'Ta nazwa użytkownika jest już wykorzystywana.',
    }[lang]


ERR_FLD_USER_TAKEN = ERR_012


def ERR_013(lang='pl'):
    return {
        'en': 'This e-mail is already registered.',
        'pl': 'Ten adres e-mail jest już zarejestrowany.',
    }[lang]


ERR_FLD_EMAIL_TAKEN = ERR_013


def ERR_014(lang='pl'):
    return {
        'en': 'This e-mail does not exist in the database.',
        'pl': 'Tego adresu e-mail nie ma w bazie.',
    }[lang]


ERR_FLD_IVLD_EMAIL = ERR_014


def ERR_015(lang='pl'):
    return {
        'en': 'The account is not active.',
        'pl': 'Konto nie jest aktywne.',
    }[lang]


ERR_FLD_ACC_NOT_ACTIVE = ERR_015


def ERR_016(lang='pl'):
    return {
        'en': 'The account is blocked.',
        'pl': 'Konto jest zablokowane.',
    }[lang]


ERR_FLD_ACC_BLOCKED = ERR_016


def ERR_017(field_name_1=None, field_name_2=None, lang='pl'):
    if field_name_1 is not None and field_name_2 is not None:
        return {
            'en': 'Fields {} and {} do not match.'.format(field_name_1, field_name_2),
            'pl': 'Pola {} i {} nie są zgodne.'.format(field_name_1, field_name_2),
        }[lang]
    return {
        'en': 'Fields do not match.',
        'pl': 'Pola nie są zgodne.',
    }[lang]


ERR_FLD_NOT_MATCHING = ERR_017


'''
Form errors
'''


def ERR_101(lang='pl'):
    return {
        'en': 'The form has errors.',
        'pl': 'Formularz zawiera błędy.',
    }[lang]


ERR_FRM_INVD_VALUES = ERR_101


def ERR_102(lang='pl'):
    return {
        'en': 'Wrong username or password.',
        'pl': 'Błędna nazwa użytkownika lub hasło.',
    }[lang]


ERR_FRM_INVD_USER_PASS = ERR_102


def ERR_103(lang='pl'):
    return {
        'en': 'Data you provided is already used by one of our users.',
        'pl': 'Podane w formularze dane są już wykorzystywane przez jednego z użytkowników.',
    }[lang]


ERR_FRM_USER_PASS_TAKEN = ERR_103


def ERR_104(lang='pl'):
    return {
        'en': 'Data you provided do not exist in our database.',
        'pl': 'Wprowadzone dane nie pasują do żadnego użytkownika.',
    }[lang]


ERR_FRM_INVD_DATA = ERR_104


def ERR_105(lang='pl'):
    return {
        'en': 'The account is not active.',
        'pl': 'Konto nie jest aktywne.',
    }[lang]


ERR_FRM_ACC_NOT_ACTIVE = ERR_105


def ERR_106(lang='pl'):
    return {
        'en': 'The account is blocked.',
        'pl': 'Konto jest zablokowane.',
    }[lang]


ERR_FRM_ACC_BLOCKED = ERR_106


'''
View / request errors
'''


@viewerror
def ERR_201(lang='pl'):
    return {
        'en': 'Error processing request.',
        'pl': 'Błąd podczas przetwarzania żądania.',
    }[lang]


ERR_REQ_PROCESSING_FAIL = ERR_201


class ReqProcessingFailException(Exception):
    pass


@viewerror
def ERR_205(lang='pl'):
    return {
        'en': 'Invalid request.',
        'pl': 'Błędne dane.',
    }[lang]


ERR_REQ_IVLD_REQUEST = ERR_205


class ReqIvldRequestException(Exception):
    pass


@viewerror
def ERR_206(lang='pl'):
    return {
        'en': 'We are sorry, but we cannot process your request. Probably your link has expired.',
        'pl': 'Przykro nam, ale nie możemy przetworzyć żądania. Najprawdopodobniej link wygasł.',
    }[lang]


ERR_REQ_LINK_EXPIRED = ERR_206


class ReqLinkExpiredException(Exception):
    pass


@viewerror
def ERR_207(lang='pl'):
    return {
        'en': 'The account is blocked.',
        'pl': 'Konto jest zablokowane.',
    }[lang]


ERR_REQ_ACC_BLOCKED = ERR_207


class ReqAccountBlockedException(Exception):
    pass


@viewerror
def ERR_208(lang='pl'):
    return {
        'en': 'You do not have permission to view this site.',
        'pl': 'Nie masz uprawnień do wyświetlenia tej strony.',
    }[lang]


ERR_REQ_NO_PERMISSION = ERR_208


class ReqNoPermissionException(Exception):
    pass
