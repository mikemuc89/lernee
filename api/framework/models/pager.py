from math import ceil

from framework.errors import ERR_REQ_IVLD_REQUEST
from tutorials.config import CONFIG


class PagerModel(object):
    @classmethod
    def get_page_size(cls, size=None):
        if size is not None:
            return size
        return CONFIG.PAGER.PAGE_SIZE

    @classmethod
    def get_items_count(cls, filters=None):
        return len(cls._get_items(filters=filters))

    @classmethod
    def get_pages_count(cls, filters=None):
        page_size = cls.get_page_size()
        return int(ceil(
            float(
                cls.get_items_count(filters)
            ) / float(
                cls.get_page_size(page_size)
            )
        ))

    @classmethod
    def get_navigation(cls, page, filters):
        pages_count = cls.get_pages_count(filters)
        if page and page >= pages_count:
            raise ReqIvldRequestException()
        return {
            'page': page,
            'pages_count': pages_count,
        }

    @classmethod
    def get_items(cls, navigation=None, sorting=None, filters=None, cells_schema=None, user=None):
        sorting = sorting or []
        filters = filters or {}
        try:
            page = int(navigation['page'])
        except TypeError, ValueError:
            page = 0
        limit = cls.get_page_size(filters=filters)
        start = page * limit if limit and page else 0
        items = cls.objects.filter(**filters).order_by(*sorting)[start:limit]
        return [item._format_item(cells_schema, user) for item in items]

    def _format_item(self, cells_schema=None, user=None):
        return {
            'cells': self._get_item_cells(cells_schema, user),
            'data': self._get_item_data(user),
            'functions': self._get_item_functions(user),
        }

    def _get_item_cells(self, cells_schema=None, user=None):
        auth = user and user.is_authenticated()

        model_method = (
            (not auth and getattr(self, 'guest_get_item_cells', None))
            or (user.is_superuser and getattr(self, 'admin_get_item_cells', None))
            or (auth and getattr(self, 'login_get_item_cells', None))
            or getattr(self, 'get_item_cells', None)
        )

        if model_method is not None:
            return model_method(user)

        return [{
            'column_id': key,
            'value': self.prepare_cell_value(value)
        } for (key, value) in cells_schema]

    def prepare_cell_value(self, value):
        if isinstance(value, dict):
            return {key: self.prepare_cell_value(value[key]) for key in value}
        elif isinstance(value, basestring):
            value_path = value.split('.')
            current_value = self
            for key in value_path:
                current_value = getattr(current_element, key, None)
            return current_value
        else:
            return None

    def _get_item_functions(self, user=None):
        auth = user and user.is_authenticated()

        model_method = (
            (not auth and getattr(self, 'guest_get_item_functions', None))
            or (user.is_superuser and getattr(self, 'admin_get_item_functions', None))
            or (auth and getattr(self, 'login_get_item_functions', None))
            or getattr(self, 'get_item_functions', None)
        )

        if model_method is not None:
            return model_method(user)

        return None

    def _get_item_data(self, user=None):
        auth = user and user.is_authenticated()

        model_method = (
            (not auth and getattr(self, 'guest_get_item_data', None))
            or (user.is_superuser and getattr(self, 'admin_get_item_data', None))
            or (auth and getattr(self, 'login_get_item_data', None))
            or getattr(self, 'get_item_data', None)
        )

        if model_method is not None:
            return model_method(user)

        return None
