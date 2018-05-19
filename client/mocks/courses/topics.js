import pager from '../common/pager';

/*
  request: { filters, sorting, page }
*/

const columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'isTaken',
  sortable: true
}, {
  id: 'isPassed',
  sortable: true
}, {
  id: 'hasQuestions',
  sortable: true
}, {
  id: 'hasToAnswerQuestions',
  sortable: true
}];

const items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  isPassed: true,
  isTaken: false,
  hasQuestions: true,
  hasToAnswerQuestions: false
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  isPassed: false,
  isTaken: true,
  hasQuestions: true,
  hasToAnswerQuestions: false
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  isPassed: false,
  isTaken: true,
  hasQuestions: true,
  hasToAnswerQuestions: false
}]

const itemFunctions = [{
  id: 'COURSES_TOPIC'
}, {
  id: 'COURSES_TOPIC:QUESTIONS'
}, {
  id: 'COURSES_TOPIC:MARK_AS_TAKEN'
}, {
  id: 'COURSES_TOPIC:UNMARK_AS_TAKEN'
}]

const itemData = {
  id: '532'
}

const filtersSpec = ['isPassed', 'isTaken', 'hasQuestions', 'hasToAnswerQuestions', 'title'];

export default (request) => {
  const { filters, sorting, page } = request;

  return pager({ columns, items, itemFunctions, itemData, filters, sorting, page, filtersSpec });
};
