import pager from './common/pager';

/*
  request: { filters, sorting, page }
*/

const columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'type',
  sortable: true
}, {
  id: 'text',
  sortable: false
}];

const items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  text: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut, ullamcorper tempus ex. Aliquam mauris elit, hendrerit ac sollicitudin quis, porttitor nec dui. Cras volutpat venenatis ipsum.',
  type: 'Kurs'
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  text: 'Praesent sodales diam nibh, eu laoreet ante tristique quis. Praesent facilisis, lectus id porttitor sollicitudin, purus felis consectetur purus, id malesuada lacus nisi in metus. Morbi vel gravida nibh, eget malesuada dui.',
  type: 'Temat'
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  text: 'Integer in nisi vel sapien placerat luctus. Aenean aliquam mi ut est sagittis laoreet. Proin rhoncus eleifend tortor egestas suscipit. Vivamus in risus sed diam fringilla euismod.',
  type: 'Kurs'
}];

const itemData = {
  id: '532'
};

const filtersSpec = [];

export default (request) => {
  const { filters, sorting, page } = request;

  return pager({ columns, items, itemData, filters, sorting, page, filtersSpec });
};
