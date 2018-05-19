/*
  request: { id }
*/

export default (/* request */) => {
  return {
    course: {
      id: '555',
      title: 'Nunc aliquet suscipit eleifend. Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo. Suspendisse facilisis ornare arcu eu facilisis.'
    },
    questions: [{
      text: 'Sed accumsan aliquam tellus, convallis pellentesque erat ultrices non?',
      questionType: 'single',
      answers: [{
        id: '1',
        text: 'Vestibulum libero sapien.'
      }, {
        id: '2',
        text: 'Cras vulputate lorem diam.'
      }],
      points: 1
    }, {
      text: 'Morbi ac laoreet ipsum. In ultricies ut lacus quis aliquet?',
      questionType: 'single',
      answers: [{
        id: '5',
        text: 'Vestibulum posuere lobortis.'
      }, {
        id: '23',
        text: 'Etiam pulvinar ligula non nulla pretium, et faucibus augue sodales.'
      }, {
        id: '55',
        text: 'Sed accumsan aliquam tellus, convallis pellentesque erat ultrices non.'
      }],
      points: 3
    }, {
      text: 'Morbi ac laoreet ipsum. In ultricies ut lacus quis aliquet?',
      questionType: 'multi',
      answers: [{
        id: '5',
        text: 'Aliquam posuere lobortis.'
      }, {
        id: '23',
        text: 'Aliquam pulvinar ligula non nulla pretium, et faucibus augue sodales.'
      }, {
        id: '55',
        text: 'Sed accumsan aliquam tellus, posuere pellentesque erat ultrices non.'
      }, {
        id: '65',
        text: 'Aliquam accumsan aliquam tellus, convallis pellentesque erat ultrices non.'
      }],
      points: 4
    }, {
      text: 'Curabitur sed lacus nec lectus posuere eleifend id ac justo?',
      questionType: 'open',
      points: 4
    }]
  };
};
