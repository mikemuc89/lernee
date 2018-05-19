/*
  request: {}
*/

export default (/* request */) => {
  return {
    facebook: 'http://www.facebook.com',
    mail: 'asd@asdasdasd.asd.asd.asd.pl',
    name: 'Zaślepkowa nazwa serwisu',
    info: 'Sed consectetur diam a dictum tempor. Nunc aliquet suscipit eleifend.'
          + 'Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo.'
          + 'Suspendisse facilisis ornare arcu eu facilisis. Pellentesque non tellus nibh.'
          + 'Cras at commodo elit, in posuere arcu. Aenean vulputate libero vel lectus fringilla, ut pellentesque lacus rhoncus.'
          + 'Phasellus vel dui ut mauris pellentesque gravida id elementum quam.'
          + 'Vivamus faucibus mi arcu, at malesuada orci pellentesque nec.'
          + 'Suspendisse vel facilisis purus. Cras scelerisque leo quis ultricies efficitur.'
          + 'Quisque vestibulum eget arcu ac consequat.',
    terms: [{
      elType: 'paragraph',
      params: {
        text: 'Aenean eu cursus dolor. Praesent fringilla sit amet lorem in tincidunt. Phasellus libero ex, ornare at pharetra vitae, consequat ac dolor. Etiam pulvinar ligula non nulla pretium, et faucibus augue sodales. Aliquam dolor enim, posuere et pulvinar porttitor, luctus eu nunc.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Donec varius fermentum tempus. Aliquam sed porttitor nisl, ornare faucibus nunc. Phasellus ac odio varius, scelerisque velit at, pellentesque dui.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras vulputate lorem diam, nec dapibus mauris suscipit et. Praesent faucibus magna eu orci tincidunt efficitur.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nunc aliquet suscipit eleifend. Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo. Suspendisse facilisis ornare arcu eu facilisis.'
      }
    }]
  };
};
