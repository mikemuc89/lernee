from django.contrib.auth.models import User

from framework.forms import BaseForm
from framework.errors import (
    ERR_FLD_NOT_MATCHING_EMAIL,
    ERR_FLD_NOT_MATCHIMG_PASS,
    ERR_FLD_EMAIL_TAKEN,
    ERR_FLD_USER_TAKEN,
    ERR_FRM_INVD_VALUES,
    ERR_FRM_USER_PASS_TAKEN,
)
from tutorials.fields import (
    EmailField,
    LoginField,
    PasswordField,
    PersonalDataField,
    TermsField
)


class RegisterForm(BaseForm):
    field_keys = ['login', 'password', 'password_re',
                  'email', 'email_re', 'first_name', 'last_name', 'terms']

    login = LoginField()
    password = PasswordField()
    password_re = PasswordField()
    email = EmailField()
    email_re = EmailField()
    first_name = PersonalDataField()
    last_name = PersonalDataField()
    terms = TermsField()

    def validate(self):
        errors = super(RegisterForm, self).validate()
        if errors:
            return errors

        if self.password.value != self.password_re.value:
            self.password_re.errors = ERRORS.ERR_FLD_NOT_MATCHIMG_PASS()
            self.errors = ERRORS.ERR_FRM_INVD_VALUES()

        if self.email.value != self.email_re.value:
            self.email_re.errors = ERRORS.ERR_FLD_NOT_MATCHING_EMAIL()
            self.errors = ERRORS.ERR_FRM_INVD_VALUES()

        check_user_name_count = len(list(User.objects.filter(username=self.login.value)))
        if check_user_name_count:
            self.login.errors = ERRORS.ERR_FLD_USER_TAKEN()
            self.errors = ERRORS.ERR_FRM_USER_PASS_TAKEN()

        check_user_email_count = len(list(User.objects.filter(email=self.email.value)))
        if check_user_email_count:
            self.email.errors = ERRORS.ERR_FLD_EMAIL_TAKEN()
            self.errors = ERRORS.ERR_FRM_USER_PASS_TAKEN()

        if self.errors:
            return self.errors

        return None
