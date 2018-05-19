from framework.fields import BaseField


class LoginField(BaseField):
    maxLen = 30
    minLen = 3
    regex = '^[A-Za-z0-9\.\-]+$'
    required = True
    field_type = 'login'
