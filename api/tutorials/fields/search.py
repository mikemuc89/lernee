from framework.fields import BaseField


class SearchField(BaseField):
    maxLen = 30
    minLen = 3
    required = True
    field_type = 'str'
