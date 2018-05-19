from tutorials.tests.common import (
    view_auth_test,
    view_test,
    CommonTestCase,
)
from tutorials.views.authorization import RegisterView


class RegisterTestCase(CommonTestCase):
    url = '/api/authorization/register'
    test_view = RegisterView

    # @view_test({})
    # def test_end_no_key_in_request(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_no_token_in_request(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_no_user_for_userinfo(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_token_expired(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_user_blocked(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_success(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})
