from framework.fields import BaseField


class EmailField(BaseField):
    minLen = 5
    regex = '^.*@.*\..*$'
    required = True
    field_type = 'email'
