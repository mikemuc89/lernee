from tutorials.tests.common import (
    view_auth_test,
    view_test,
    CommonTestCase,
    WithUsers,
)
from tutorials.views.authorization import LoginView


class LoginViewTestCase(CommonTestCase, WithUsers):
    url = '/api/authorization/login'
    test_view = LoginView

    @view_test({})
    def test_step_1(self, *args, **kwargs):
        self.assertStructure(self.response, {
            '^fields': {
                '^login': {
                    '-value': None,
                    '-errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '^password': {
                    '-value': None,
                    '-errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '-errors': None,
            },
            'step': 'step_1'
        })

    @view_test({
        'data': {
            'login': 'uzytkowniknieistniejacy',
            'password': 'haslonieistniejace'
        },
        'step': 'step_1',
        'action': 'submit'
    })
    def test_step_1_submit_wrong_login(self, *args, **kwargs):
        self.assertStructure(self.response, {
            '^fields': {
                '^login': {
                    'value': 'uzytkowniknieistniejacy',
                    '+errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '^password': {
                    'value': 'haslonieistniejace',
                    '+errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '+errors': None,
            },
            'step': 'step_1'
        })

    @view_test({
        'data': {
            'login': 'smashing',
            'password': 'blednehaslo'
        },
        'step': 'step_1',
        'action': 'submit'
    })
    def test_step_1_submit_wrong_password(self, *args, **kwargs):
        self.assertStructure(self.response, {
            '^fields': {
                '^login': {
                    'value': 'smashing',
                    '+errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '^password': {
                    'value': 'blednehaslo',
                    '+errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '+errors': None,
            },
            'step': 'step_1'
        })

    @view_test({
        'data': {
            'login': '',
            'password': ''
        },
        'step': 'step_1',
        'action': 'submit'
    })
    def test_step_1_submit_empty_login_and_password(self, *args, **kwargs):
        self.assertStructure(self.response, {
            '^fields': {
                '^login': {
                    'value': '',
                    '+errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '^password': {
                    'value': '',
                    '+errors': None,
                    '^widget': {
                        'required': True
                    },
                },
                '+errors': None,
            },
            'step': 'step_1'
        })

    @view_auth_test({
        'data': {
            'login': 'smashing',
            'password': 'nigelthornberry'
        },
        'step': 'step_1',
        'action': 'submit'
    }, 'smashing', 'nigelthornberry')
    def test_step_1_submit_success(self, *args, **kwargs):
        self.assertStructure(self.response, {
            '+notice': None,
            'step': '_end_',
            '^user': {
                'name': 'smashing',
                'email': 'n.thornberry@netgis.com.pl',
                'first_name': 'Nigel',
                'last_name': 'Thornberry',
            }
        })
    #
    # @view_test({})
    # def test_step_1_submit_already_logged_in(self):
    #     pass
    #
    # @view_test({})
    # def test_step_1_submit_blocked_login(self):
    #     pass
    #
    # def test_step_1_submit_block_user_after_failures(self):
    #     pass
