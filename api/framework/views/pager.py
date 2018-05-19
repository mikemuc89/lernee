from framework.errors import ReqIvldRequestException
from framework.views.resource import ResourceView


class PagerView(ResourceView):
    pager_model = None
    request_keys = ('navigation', 'sorting', 'filters')
    request_defaults = {
        'filters': {},
        'navigation': {'page': 0},
        'sorting': None,
    }

    default_filters = None  # {}
    default_filters_admin = None  # {}
    valid_filters = None  # []
    valid_filters_admin = None  # []
    hidden_filters = None  # []
    hidden_filters_admin = None  # []
    default_sorting = None  # []
    default_sorting_admin = None  # []
    valid_sorting = None  # []
    valid_sorting_admin = None  # []
    cells_schema_admin = None  # (('', ''), ('', {}), ('', '..'))
    cells_schema = None  # (('', ''), ('', {}), ('', '..'))

    def render(self):
        return self.get_pager()

    def get_pager(self):
        if not self.validate_sorting(mode, user, sorting):
            raise ReqIvldRequestException()

        prepared_filters = self._get_filters()
        prepared_navigation = self._get_navigation(prepared_filters)
        prepared_sorting = self._get_sorting()

        return {
            'data': self._get_data(),
            'functions': self.get_view_functions(),
            'items': self._get_items(prepared_navigation, prepared_sorting, prepared_filters),
            'navigation': prepared_navigation,
            'sorting': prepared_sorting,
            'filters': prepared_filters,
        }

    def _get_configuration(self, conf_name):
        auth = self.user.is_authenticated()

        view_configuration = (
            (not auth and getattr(self, 'guest_{}'.format(conf_name), None))
            or (user.is_superuser and getattr(self, 'admin_{}'.format(conf_name), None))
            or (auth and getattr(self, 'login_{}'.format(conf_name), None))
            or getattr(self, conf_name, None)
        )

        return view_configuration

    def _get_valid_filters(self):
        auth = self.user.is_authenticated()

        view_method = (
            (not auth and getattr(self, 'guest_get_valid_filters', None))
            or (user.is_superuser and getattr(self, 'admin_get_valid_filters', None))
            or (auth and getattr(self, 'login_get_valid_filters', None))
            or getattr(self, 'get_valid_filters', None)
        )

        return view_method() if view_method else self._get_configuration('valid_filters') or []

    def validate_filters(self, filters):
        filters = filters or {}
        valid_filters = self._get_valid_filters()
        for key in filters:
            if key not in valid_filters:
                return False
        return True

    def _get_filters(self):
        auth = self.user.is_authenticated()
        req_filters = self.req_params['filters'] or {}

        view_method = (
            (not auth and getattr(self, 'guest_get_filters', None))
            or (user.is_superuser and getattr(self, 'admin_get_filters', None))
            or (auth and getattr(self, 'login_get_filters', None))
            or getattr(self, 'get_filters', None)
        )

        result = view_method() if view_method else self._get_configuration('default_filters')
        result.update(req_filters)

        if not self.validate_filters(result):
            raise ReqIvldRequestException()

        return result

    def _get_valid_sorting(self):
        auth = self.user.is_authenticated()

        view_method = (
            (not auth and getattr(self, 'guest_get_valid_sorting', None))
            or (user.is_superuser and getattr(self, 'admin_get_valid_sorting', None))
            or (auth and getattr(self, 'login_get_valid_sorting', None))
            or getattr(self, 'get_valid_sorting', None)
        )

        return view_method() if view_method else self._get_configuration('valid_sorting') or []

    def validate_sorting(self, sorting):
        sorting = sorting or []
        valid_sorting = self._get_valid_sorting()
        for key in sorting:
            if key not in valid_sorting:
                return False
        return True

    def _get_sorting(self):
        auth = self.user.is_authenticated()
        req_sorting = self.req_params['sorting'] or {}

        view_method = (
            (not auth and getattr(self, 'guest_get_sorting', None))
            or (user.is_superuser and getattr(self, 'admin_get_sorting', None))
            or (auth and getattr(self, 'login_get_sorting', None))
            or getattr(self, 'get_sorting', None)
        )

        result = view_method() if view_method else self._get_configuration('default_sorting')
        result.update(req_sorting)

        if not self.validate_sorting(result):
            raise ReqIvldRequestException()

        return result

    def _get_navigation(self, prepared_filters=None):
        prepared_filters = prepared_filters or {}
        req_navigation = self.req_params['navigation'] or {}
        try:
            current_page = int(req_navigation['page'])
        except TypeError, ValueError:
            current_page = 0

        if navigation:
            return navigation

        if self.pager_model is None or self.pager_model.get_navigation is None:
            raise NotImplementedError()

        return self.pager_model.get_navigation(current_page, prepared_filters)

    def _get_data(self):
        auth = self.user.is_authenticated()

        view_method = (
            (not auth and getattr(self, 'guest_get_data', None))
            or (user.is_superuser and getattr(self, 'admin_get_data', None))
            or (auth and getattr(self, 'login_get_data', None))
            or getattr(self, 'get_data', None)
        )

        return view_method() if view_method else {}

    def _get_cells_schema(self):
        auth = self.user.is_authenticated()

        view_method = (
            (not auth and getattr(self, 'guest_get_cells_schema', None))
            or (user.is_superuser and getattr(self, 'admin_get_cells_schema', None))
            or (auth and getattr(self, 'login_get_cells_schema', None))
            or getattr(self, 'get_cells_schema', None)
        )

        return view_method() if view_method else self._get_configuration('cells_schema')

    def _get_items(self, navigation, sorting, filters):
        if self.pager_model is None or self.pager_model.get_items is None:
            raise NotImplementedError()

        cells_schema = self._get_cells_schema()
        if cells_schema is None:
            raise NotImplementedError()

        return self.pager_model.get_items(navigation, sorting, filters, cells_schema, self.user)

    def process_request(self):
        auth = self.user.is_authenticated()

        view_method = (
            (not auth and getattr(self, 'guest_render', None))
            or (user.is_superuser and getattr(self, 'admin_render', None))
            or (auth and getattr(self, 'login_render', None))
            or getattr(self, 'render', None)
        )

        if view_method is None:
            raise ReqProcessingFailException()

        self.before_render()

        return view_method()
