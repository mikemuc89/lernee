from framework.fields import BaseField


class PersonalDataField(BaseField):
    minLen = 6
    field_type = 'str'
