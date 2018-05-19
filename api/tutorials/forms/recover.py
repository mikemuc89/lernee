from django.contrib.auth.models import User

from framework.errors import (
    ERR_FLD_ACC_NOT_ACTIVE,
    ERR_FLD_IVLD_EMAIL,
    ERR_FRM_ACC_NOT_ACTIVE,
    ERR_FRM_INVD_DATA,
)
from framework.forms import BaseForm
from tutorials.fields import (
    EmailField
)


class RecoverForm(BaseForm):
    field_keys = ['email']

    email = EmailField()

    def validate(self):
        errors = super(RecoverForm, self).validate()
        if errors:
            return errors

        try:
            self.user = User.objects.filter(email=self.email.value)[0]
        except IndexError:
            self.user = None
            self.email.errors = ERR_FLD_IVLD_EMAIL()
            self.errors = ERR_FRM_INVD_DATA()

        if not self.user.is_active:
            self.email.errors = ERR_FLD_ACC_NOT_ACTIVE()
            self.errors = ERR_FRM_ACC_NOT_ACTIVE()

        if self.errors:
            return self.errors

        return None

    def get_auth_user(self):
        return self.user
