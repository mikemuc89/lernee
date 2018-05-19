from django.contrib.auth.models import User

from framework.errors import (
    ERR_FLD_IVLD_EMAIL,
    ERR_FLD_NOT_MATCHIMG_PASS,
    ERR_FRM_INVD_DATA,
    ERR_FRM_INVD_VALUES,
)
from framework.forms import BaseForm
from tutorials.fields import (
    EmailField,
    PasswordField
)


class ConfirmRecoverForm(BaseForm):
    field_keys = ['email', 'password', 'password_re']

    email = EmailField(disabled=True, required=False)
    password = PasswordField()
    password_re = PasswordField()

    def validate(self):
        errors = super(ConfirmRecover, self).validate()
        if errors:
            return errors

        if self.password.value != self.password_re.value:
            self.password_re.errors = ERR_FLD_NOT_MATCHIMG_PASS()
            self.errors = ERR_FRM_INVD_VALUES()

        check_user_email_count = len(list(User.objects.filter(email=self.email.value)))
        if not check_user_name_count:
            self.email.errors = ERR_FLD_IVLD_EMAIL()
            self.errors = ERR_FRM_INVD_DATA()

        if self.errors:
            return self.errors

        return None
