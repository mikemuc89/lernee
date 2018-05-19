import json
import mock
import re

from django.contrib.auth.models import User
from django.test import (
    Client,
    RequestFactory,
    TestCase,
)
from django.test.utils import override_settings

from tutorials.tests.create_test_users import create_test_users
from tutorials.views.authorization import LoginView


var_types = {
    'bool': bool,
    'dict': dict,
    'int': int,
    'float': float,
    'list': list,
    'str': str,
    'tuple': tuple,
}


def mock_authenticate(username, password):
    try:
        user = User.objects.filter(username=username)[0]
    except IndexError:
        return None
    if user.check_password(password):
        return user
    return None


def mock_login(request, user):
    return True


def mock_logout(request):
    return True


def view_test(data):
    def deco(function):
        def wrapper(self, *args, **kwargs):
            response = self.client.post(self.url,
                                        json.dumps(data),
                                        content_type='application/json')
            self.assertEqual(response.status_code, 200)
            self.get_response_json(response)
            function(self, *args, **kwargs)
        return wrapper
    return deco


def view_auth_test(data, username=None, password=None):
    def deco(function):
        @mock.patch('tutorials.forms.login.authenticate', side_effect=mock_authenticate)
        @mock.patch('django.contrib.auth.login', side_effect=mock_login)
        @mock.patch('django.contrib.auth.logout', side_effect=mock_logout)
        def wrapper(self, *args, **kwargs):
            request = self.factory.post(self.url,
                                        json.dumps(data),
                                        content_type='application/json',
                                        follow=True)
            if username:
                request.user = User.objects.filter(username=username)
            request.session = TestSession()
            response = self.test_view.as_view()(request)
            self.assertEqual(response.status_code, 200)
            self.get_response_json(response)
            function(self, *args, **kwargs)
        return wrapper
    return deco


class TestSession(dict):
    modified = False


class CommonTestCase(TestCase):
    def get_response_json(self, response):
        self.response = json.loads(response.content)

    def setUp(self):
        self.client = Client()
        self.factory = RequestFactory()
        try:
            self.create_users()
        except AttributeError:
            pass

    def assertStructure(self, structure, test):
        for key in test:
            if key.startswith('$'):  # containing
                actual_key = key[1:]
                assert actual_key in structure, \
                    'Key "%s" not in structure "%s"' % (
                        actual_key, structure
                    )
            elif key.startswith('!'):   # not containing
                actual_key = key[1:]
                assert actual_key not in structure, \
                    'Unneeded key "%s" in structure "%s"' % (
                        actual_key, structure
                    )
            elif key.startswith('-'):   # containing None equivalent
                actual_key = key[1:]
                assert actual_key in structure and not structure[actual_key], \
                    'Value at key "%s" should be None in structure "%s"' % (
                        actual_key, structure[actual_key]
                    )
            elif key.startswith('+'):   # containing not None
                actual_key = key[1:]
                assert actual_key in structure and structure[actual_key], \
                    'Value at key "%s" should not be None in structure "%s"' % (
                        actual_key, structure
                    )
            elif key.startswith('~'):  # check type
                actual_key = key[1:]
                check_type = var_types[test[key]]
                assert actual_key in structure and type(structure[actual_key]) is check_type, \
                    'Value "%s" should be of type "%s" for key "%s"' % (
                        structure[actual_key], check_type, actual_key
                    )
            elif key.startswith('#'):  # check length of sequence
                actual_key = key[1:]
                length = int(test[key])
                assert actual_key in structure and len(structure[actual_key]) == length, \
                    'Value "%s" should be of length %s at key "%s"' % (
                        structure[actual_key], test[key], actual_key
                    )
            elif key.startswith('>'):  # check length of sequence gt
                actual_key = key[1:]
                length = int(test[key])
                assert actual_key in structure and len(structure[actual_key]) > length, \
                    'Value "%s" should be of length > %s at key "%s"' % (
                        structure[actual_key], test[key], actual_key
                    )
            elif key.startswith('<'):  # check length of sequence lt
                actual_key = key[1:]
                length = int(test[key])
                assert actual_key in structure and len(structure[actual_key]) < length, \
                    'Value "%s" should be of length < %s at key "%s"' % (
                        structure[actual_key], test[key], actual_key
                    )
            elif key.startswith('>='):  # check length of sequence gte
                actual_key = key[2:]
                length = int(test[key])
                assert actual_key in structure and len(structure[actual_key]) >= length, \
                    'Value "%s" should be of length >= %s at key "%s"' % (
                        structure[actual_key], test[key], actual_key
                    )
            elif key.startswith('<='):  # check length of sequence lte
                actual_key = key[2:]
                length = int(test[key])
                assert actual_key in structure and len(structure[actual_key]) <= length, \
                    'Value "%s" should be of length <= %s at key "%s"' % (
                        structure[actual_key], test[key], actual_key
                    )
            elif key.startswith('^'):  # deeper check
                actual_key = key[1:]
                if type(test[key]) is dict:
                    self.assertStructure(structure[actual_key], test[key])
                else:
                    assert actual_key in structure and structure[actual_key] == test[key], \
                        'Value "%s" does not equal test "%s" at key "%s"' % (
                            structure[actual_key], test[key], actual_key
                        )
            elif key.startswith('@'):  # check deeper at sequence index
                re_search = re.search('\@(\d+)(.*)', key)
                if re_search:
                    index = int(re_search.group(1))
                    actual_key = re_search.group(2)
                    if type(test[key]) is dict:
                        self.assertStructure(structure[actual_key][index], test[key])
                    else:
                        assert structure[actual_key][index] == test[key], \
                            'Value "%s" does not equal test "%s" at key "%s", index %s' % (
                                structure[actual_key][index], test[key], actual_key, index
                            )
            else:  # end check by comparison
                assert key in structure and structure[key] == test[key], \
                    'Value "%s" does not equal test "%s" at key "%s"' % (
                        structure[key], test[key], key
                    )


class WithUsers(object):
    def create_users(self):
        create_test_users()
