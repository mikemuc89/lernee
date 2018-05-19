import django.contrib.auth
from django.contrib.auth.models import User

from framework.errors import (
    ERR_FLD_ACC_BLOCKED,
    ERR_FLD_IVLD_USER_PASS,
    ERR_FRM_ACC_BLOCKED,
    ERR_FRM_INVD_USER_PASS,
)
from framework.forms import BaseForm

from tutorials.fields import (
    LoginField,
    PasswordField
)
from tutorials.models import UserInfo


class LoginForm(BaseForm):
    field_keys = ['login', 'password']

    login = LoginField()
    password = PasswordField()

    def validate(self):
        errors = super(LoginForm, self).validate()
        if errors:
            return errors

        self.user = django.contrib.auth.authenticate(
            username=self.login.value,
            password=self.password.value
        )

        if self.user is not None:
            return None
        else:
            self.errors = ERR_FRM_INVD_USER_PASS()
            self.login.errors = ERR_FLD_IVLD_USER_PASS()
            self.password.errors = ERR_FLD_IVLD_USER_PASS()
            return self.errors

    def get_auth_user(self):
        return self.user

    def check_and_update_user(self):
        try:
            self.check_user = User.objects.filter(username=self.login.value)[0]
        except IndexError:
            self.errors = ERR_FRM_INVD_USER_PASS()
            return self.errors

        try:
            self.user_info = UserInfo.objects.filter(user=self.check_user)[0]
        except IndexError:
            self.errors = ERR_FRM_INVD_USER_PASS()
            return self.errors

        if self.user_info.is_blocked:
            self.login.errors = ERR_FLD_ACC_BLOCKED()
            self.errors = ERR_FRM_ACC_BLOCKED()
            return self.errors
