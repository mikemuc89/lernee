/*
  request: { placement, id }
*/

export default (/* request */) => {
  return {
    items: [{
      author: 'Jan Kowalski',
      id: '123'
      text: 'Długi komentarz... Ut rutrum erat finibus, tincidunt erat sed, feugiat augue. Etiam eget ante id massa commodo vestibulum. Morbi hendrerit quis neque quis pharetra. Integer luctus aliquam enim at luctus. Nam sed ante cursus urna congue aliquet. Phasellus ac ipsum et metus porta condimentum. Nullam non dignissim magna, nec semper massa. Aenean blandit laoreet tellus in aliquam. Nulla venenatis lorem sed lectus luctus blandit. Aenean dolor tellus, lacinia nec pretium non, viverra vitae augue. Nam porttitor felis ut erat pharetra posuere. Vivamus ut lobortis nulla, vitae euismod mauris. Aliquam massa nibh, lacinia eu consequat varius, convallis vel enim. Curabitur id luctus sapien. Praesent vitae porttitor risus.'
    }, {
      author: 'Piotr Nowak',
      id: '124',
      text: 'Cracovia Pany!',
      children: [{
        author: 'Jan Kowalski',
        id: '125',
        text: 'Jak śmiesz!',
      }, {
        author: 'Zbigniew Bombalina',
        id: '126',
        text: 'Śmiem wątpic',
        children: [{
          author: 'Jan Kowalski',
          id: '127',
          text: 'Hm, no i dobrze.'
        }]
      }]
    }]
  };
};
