# -*- coding: utf-8 -*-

from django.contrib.auth.models import User
from django.utils import timezone

from tutorials.models import UserInfo


def token_expires_value(days_from_today):
    return timezone.now() + timezone.timedelta(days=days_from_today)


def create_test_users():
    login_0 = User.objects.create_superuser(
        'batman',
        'b.wayne@netgis.com.pl',
        'brucewayne'
    )
    login_0.last_name = 'Wayne'
    login_0.first_name = 'Bruce'
    login_0.is_active = True
    login_0.is_staff = True
    login_0.save()
    user_info_0 = UserInfo(user=login_0,
                           token='tokentoken0',
                           key='keykey0',
                           token_expires=token_expires_value(1000))
    login_1 = User.objects.create_user(
        'smashing',
        'n.thornberry@netgis.com.pl'
    )
    login_1.set_password('nigelthornberry')
    login_1.last_name = 'Thornberry'
    login_1.first_name = 'Nigel'
    login_1.is_active = False
    login_1.save()
    user_info_1 = UserInfo(user=login_1,
                           token='tokentoken1',
                           key='keykey1',
                           token_expires=token_expires_value(1))
    login_2 = User.objects.create_user(
        'prus',
        'a.glowacki@netgis.com.pl'
    )
    login_2.set_password('aleksanderglowacki')
    login_2.last_name = 'Głowacki'
    login_2.first_name = 'Aleksander'
    login_2.is_active = False
    login_2.save()
    user_info_2 = UserInfo(user=login_2,
                           token='tokentoken2',
                           key='keykey2',
                           token_expires=token_expires_value(1))
    login_3 = User.objects.create_user(
        'zablokowany',
        'u.zablokowany@netgis.com.pl'
    )
    login_3.set_password('uzytkownikzablokowany')
    login_3.last_name = 'Zablokowany'
    login_3.first_name = 'Uzytkownik'
    login_3.is_active = False
    login_3.save()
    user_info_3 = UserInfo(user=login_3,
                           token='tokentoken2',
                           key='keykey2',
                           is_blocked=True,
                           token_expires=token_expires_value(-1))
