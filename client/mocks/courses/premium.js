import pager from '../common/pager';

/*
  request: { filters, sorting, page }
*/

const columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'shortDescription',
  sortable: false
}, {
  id: 'price',
  sortable: ['withCertificate', 'withoutCertificate']
}, {
  id: 'hasCertificate',
  sortable: true
}];

const items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  shortDescription: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut, ullamcorper tempus ex. Aliquam mauris elit, hendrerit ac sollicitudin quis, porttitor nec dui. Cras volutpat venenatis ipsum.',
  price: {
    withoutCertificate: '43,22 PLN',
    withCertificate: '432,43 PLN'
  },
  hasCertificate: true
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  shortDescription: 'Praesent sodales diam nibh, eu laoreet ante tristique quis. Praesent facilisis, lectus id porttitor sollicitudin, purus felis consectetur purus, id malesuada lacus nisi in metus. Morbi vel gravida nibh, eget malesuada dui.',
  price: {
    withoutCertificate: '11,94 PLN'
  },
  hasCertificate: false
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  shortDescription: 'Integer in nisi vel sapien placerat luctus. Aenean aliquam mi ut est sagittis laoreet. Proin rhoncus eleifend tortor egestas suscipit. Vivamus in risus sed diam fringilla euismod.',
  price: {
    withoutCertificate: '22,99 PLN',
    withCertificate: '123,00 PLN'
  },
  hasCertificate: true
}]

const itemFunctions = [{
  id: 'COURSES_REGISTER'
}, {
  id: 'COURSES_EXAM'
}, {
  id: 'COURSES_TOPICS'
}, {
  id: 'COURSES_DETAILS'
}]

const itemData = {
  id: '532'
}

const filtersSpec = ['hasCertificate', 'title', 'price'];

export default (request) => {
  const { filters, sorting, page } = request;

  return pager({ columns, items, itemFunctions, itemData, filters, sorting, page, filtersSpec });
};
