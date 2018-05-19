from framework.fields import BaseField


class TermsField(BaseField):
    value = False
    required = True
    field_type = 'bool'
