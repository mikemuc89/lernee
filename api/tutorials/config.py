# -*- coding: utf-8 -*-


class CONFIG(object):

    class FUNCTIONS(object):
        ADMINISTRATION_DASHBOARD_EXAMS = False,
        ADMINISTRATION_DASHBOARD_PAYMENTS = True,
        ADMINISTRATION_DASHBOARD_QUESTIONS = False,
        ADMINISTRATION_DASHBOARD_USERS = True,
        COURSES_TOPIC_BOOKMARK = False,
        COURSES_TOPIC_MODIFY = False,
        COURSES_TOPIC_QUESTION_ADD = True,
        COURSES_DETAILS_EXAM = True,
        COURSES_DETAILS_MODIFY = False,
        COURSES_DETAILS_RESUME = True,
        COURSES_DETAILS_SAMPLE = True,
        COURSES_DETAILS_SHOW_CERTIFICATE = True,
        COURSES_DETAILS_SIGNUP = True,
        COURSES_DETAILS_START = True,
        USER_PROFILE_COURSES = True,
        USER_PROFILE_BLOCK = True,
        USER_PROFILE_RESET_PASSWORD = True,

        COURSES_PAGER_DETAILS = True
        COURSES_PAGER_EXAM = True
        COURSES_PAGER_MODIFY = False
        COURSES_PAGER_RESUME = True
        COURSES_PAGER_SAMPLE = True
        COURSES_PAGER_SHOW_CERTIFICATE = True
        COURSES_PAGER_SIGNUP = True
        COURSES_PAGER_START = True
        ADMINISTRATION_PAYMENTS_PAGER_SHOW_INVOICE = True
        ADMINISTRATION_PAYMENTS_PAGER_RESEND_INVOICE = True
        ADMINISTRATION_PAYMENTS_PAGER_BOOK = True
        ADMINISTRATION_USERS_PAGER_BLOCK = True
        ADMINISTRATION_USERS_PAGER_PROFILE = True
        ADMINISTRATION_USERS_PAGER_RESET_PASSWORD = True

    class COURSES(object):
        TIME_LIMIT = 60  # days

    class MAIL(object):
        REPLY_TO = 'biuro@netgis.com.pl'

        REGISTRATION_TEMPLATE = 'mails/registration.html'
        REGISTRATION_TITLE = 'Rejestracja w serwisie kursy.netgis.com.pl'
        RECOVER_TEMPLATE = 'mails/recover.html'
        RECOVER_TITLE = 'Odnowienie hasła w serwisie kursy.netgis.com.pl'

    class INVOICE(object):
        DEFAULT_ISSUER = u'Michał Mućko'
        DEFAULT_ISSUE_PLACE = u'Warszawa'
        DEFAULT_PAYMENT_METHOD = u'Przelew bankowy'
        NUMBER_PREFIX = u'FV/NTG/CRS'
        PAYMENT_DATE_RANGE = 14  # days
        COURSE_VAT = 23  # percent

    class CERTIFICATE(object):
        DEFAULT_ISSUER = u'Michał Mućko'

    class MODES(object):
        GUEST = 'guest'
        USER = 'user'
        ADMIN = 'admin'

    class PAGER(object):
        PAGE_SIZE = 50  # items

        class Course(object):
            DEFAULT_FILTERS_ADMIN = {}
            DEFAULT_FILTERS = {'visible': True}
            VALID_FILTERS_ADMIN = [
                'visible', 'is_free', 'has_certificate', 'price_with_certificate__gte',
                'price_with_certificate__lte', 'price__gte', 'price__lte',
                'title__icontains', 'short_description__icontains', 'id', 'id__in'
            ]
            VALID_FILTERS = [
                'is_free', 'price_with_certificate__gte',
                'price_with_certificate__lte', 'price__gte', 'price__lte',
                'title__icontains', 'short_description__icontains', 'id', 'id__in'
            ]
            HIDDEN_FILTERS = [
                'is_free', 'id', 'id__in'
            ]
            DEFAULT_SORTING = ['title']
            VALID_SORTING = [
                'title', 'price_with_certificate', 'price_without_certificate',
                'has_certificate'
            ]
            CELLS_SCHEMA_ADMIN = (
                ('images', {
                    'icon': 'icon',
                    'image': 'image'
                }),
                ('title', 'title'),
                ('is_free', 'is_free'),
                ('has_certificate', 'has_certificate'),
                ('price', {
                    'without_certificate': 'price',
                    'with_certificate': 'price_with_certificate'
                }),
                ('visible', 'visible'),
            )
            CELLS_SCHEMA = (
                ('images', {
                    'icon': 'icon',
                    'image': 'image'
                }),
                ('title', 'title'),
                ('is_free', 'is_free'),
                ('has_certificate', 'has_certificate'),
                ('price', {
                    'without_certificate': 'price',
                    'with_certificate': 'price_with_certificate'
                }),
            )

        class Payment(object):
            DEFAULT_FILTERS_ADMIN = {}
            VALID_FILTERS_ADMIN = [
                'invoice_sent', 'invoice_generated', 'user_course__course__title__icontains',
                'user_course__user_info__user__username__icontains',
                'issue_date__lte', 'issue_date__gte', 'amount__lte', 'amount__gte'
            ]
            HIDDEN_FILTERS = []
            DEFAULT_SORTING_ADMIN = ['-issue_date']
            VALID_SORTING_ADMIN = [
                'issue_date', 'amount', 'user_course__user_info__user__username',
                'invoice_sent', 'invoice_generated'
            ]
            CELLS_SCHEMA_ADMIN = (
                ('user', 'user_course.user_info.user.username'),
                ('course', 'user_course.course.title'),
                ('issue_date', 'issue_date'),
                ('amount', 'amount'),
                ('invoice_generated', 'invoice_generated'),
                ('invoice_sent', 'invoice_sent'),
            )

        class UserCourse(object):
            DEFAULT_FILTERS_ADMIN = {}
            DEFAULT_FILTERS_LOGIN = {}
            VALID_FILTERS_ADMIN = [
                'course__title__icontains', 'is_paid', 'with_certificate',
                'user_info__user__username__icontains', 'course_completed',
                'time_limit__lte', 'time_limit__gte', 'exam_passed', 'certificate_generated',
                'user_info__user'
            ]
            VALID_FILTERS_LOGIN = [
                'course__title__icontains', 'is_paid', 'with_certificate',
                'user_info__user__username__icontains', 'course_completed',
                'time_limit__lte', 'time_limit__gte', 'exam_passed', 'certificate_generated',
                'user_info__user'
            ]
            HIDDEN_FILTERS = ['id', 'id__in']
            DEFAULT_SORTING_ADMIN = ['-time_limit']
            DEFAULT_SORTING_LOGIN = ['-time_limit']
            VALID_SORTING_ADMIN = [
                'time_limit', 'course__title', 'user_info__user__username', 'is_paid',
                'with_certificate', 'course_completed', 'exam_passed', 'certificate_generated'
            ]
            VALID_SORTING_LOGIN = [
                'time_limit', 'course__title', 'user_info__user__username', 'is_paid',
                'with_certificate', 'course_completed', 'exam_passed', 'certificate_generated'
            ]
            CELLS_SCHEMA_ADMIN = (
                ('course', 'course.title'),
                ('user', 'user_info.user.username'),
                ('current_topic', 'current_topic.title'),
                ('is_paid', 'is_paid'),
                ('with_certificate', 'with_certificate'),
                ('course_completed', 'course_completed'),
                ('exam_passed', 'exam_passed'),
                ('certificate_generated', 'certificate_generated'),
                ('time_limit', 'time_limit'),
            )
            CELLS_SCHEMA_LOGIN = (
                ('course', 'course.title'),
                ('user', 'user_info.user.username'),
                ('current_topic', 'current_topic.title'),
                ('is_paid', 'is_paid'),
                ('with_certificate', 'with_certificate'),
                ('course_completed', 'course_completed'),
                ('exam_passed', 'exam_passed'),
                ('certificate_generated', 'certificate_generated'),
                ('time_limit', 'time_limit'),
            )

    class USERS(object):
        TOKEN_TIME_LIMIT = 1  # days
