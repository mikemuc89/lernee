from tutorials.tests.common import (
    view_auth_test,
    view_test,
    CommonTestCase,
)
from tutorials.views.authorization import ConfirmRecoverView


class ConfirmRecoverTestCase(CommonTestCase):
    url = '/api/authorization/confirm-recover'
    test_view = ConfirmRecoverView

    # @view_test({})
    # def test_step_1(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_no_key_in_request(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_no_token_in_request(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_wrong_token(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_end_wrong_key(self, *args, **kwargs):
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
    # def test_step_1_submit_different_passwords(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})

    # @view_test({})
    # def test_step_1_submit_success(self, *args, **kwargs):
    #     self.assertStructure(self.response, {})
