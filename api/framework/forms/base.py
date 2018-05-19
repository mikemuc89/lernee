from framework.errors import ERR_FRM_INVD_VALUES


class BaseForm(object):
    field_keys = []
    errors = None

    def __init__(self, data={}):
        self.set_data(data)

    def get_data(self):
        data = {}
        for key in self.field_keys:
            attr = getattr(self, key, None)
            if attr:
                data.update({
                    key: attr.get_value()
                })
        return data

    def set_data(self, data={}):
        for key in self.field_keys:
            attr = getattr(self, key, None)
            if attr and key in data:
                attr.value = data[key]

    def render(self, data={}, validate=False):
        fields = {}
        for key in self.field_keys:
            attr = getattr(self, key, None)
            if attr:
                value = data.get(key, None)
                fields.update({
                    key: attr.render(value, validate)
                })
        fields.update({
            'errors': self.validate() if validate else self.errors
        })
        return fields

    def reset_errors(self):
        for key in self.field_keys:
            self.errors = None
            attr = getattr(self, key, None)
            if attr:
                attr.errors = None

    def validate(self):
        has_errors = False
        for key in self.field_keys:
            attr = getattr(self, key, None)
            if attr and attr.validate():
                has_errors = True
        if has_errors:
            self.errors = ERR_FRM_INVD_VALUES()
        else:
            self.errors = None
        return self.errors
