from framework.fields import BaseField


class PasswordField(BaseField):
    maxLen = 30
    minLen = 6
    required = True
    type = 'password'
