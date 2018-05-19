const mapItems = (items, data, functions) => {
  return items.map((item) => {
    return {
      cells: Object.keys(item).map((key) => {
        return {
          columnId: key,
          value: item[key]
        };
      }, []),
      data,
      functions
    };
  });
};

const filterFieldTypes = {
  hasCertificate: 'bool',
  hasQuestions: 'bool',
  hasToAnswerQuestions: 'bool',
  isPassed: 'bool',
  isTaken: 'bool',
  price: 'amountRangePrice',
  title: 'str'
};

const filterWidgetProps = {
  amountRange: {},
  amountRangePrice: {},
  bool: { items: [{ id: 'yes', data: 'Tak' }, { id: 'no', data: 'Nie' }], required: false },
  _default: { minLen: 3, required: false },
  str: { minLen: 3, required: false }
};

const mapFilters = (filtersSpec, filters) => {
  return filtersSpec.map((key) => {
    const filterWidgetPropsKey = (key in filterWidgetProps && key) || (filterFieldTypes[key] in filterWidgetProps && filterFieldTypes[key]) || '_default';
    return {
      value: (key in filters) ? filters[key] : null,
      errors: null,
      widget: Object.assign({
        fieldType: filterFieldTypes[key] || 'str'
      }, filterWidgetProps[filterWidgetPropsKey])
    };
  });
};

export default ({ columns, items, itemFunctions, itemData, filters, sorting, page, filtersSpec, data, functions }) => {
  return Object.assign({
    columns,
    items: mapItems(items, itemData, itemFunctions),
    filters: mapFilters(filtersSpec, filters),
    sorting,
    page,
  }, data && {
    data
  }, functions && {
    functions
  });
};
