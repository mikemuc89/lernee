from tutorials.tests.common import (
    view_auth_test,
    view_test,
    CommonTestCase,
)
from tutorials.views.authorization import LogoutView


class LogoutViewTestCase(CommonTestCase):
    url = '/api/authorization/logout'
    test_view = LogoutView

    @view_auth_test({})
    def test_end_success(self, *args, **kwargs):
        self.assertStructure(self.response, {
            '+notice': None,
            'user': None,
            'step': '_end_',
        })

    # @view_test({})
    # def test_end_already_logged_out(self):
    #     pass
