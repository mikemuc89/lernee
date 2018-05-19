/*
  request: { id }
*/

export default (/* request */) => {
  return {
    data: {
      title: 'Lorem ipsum dolor sit amet.',
      subtitle: 'Nullam dignissim eros consequat augue bibendum, sed tempor sem vulputate. Aliquam euismod erat nulla, vel condimentum ligula pharetra vitae. In maximus aliquet enim sed ultrices.',
      description: 'Mauris bibendum, arcu vitae hendrerit sollicitudin, urna ipsum tincidunt arcu, id tincidunt leo ligula nec lorem. Morbi auctor felis in mauris ultrices, at placerat justo malesuada. Maecenas placerat, magna vel auctor sodales, odio leo aliquet neque, id interdum erat libero semper odio. Aliquam commodo, arcu eu vehicula dignissim, purus arcu sodales velit, eu accumsan orci velit a risus. Cras magna tellus, feugiat quis eros vitae, faucibus convallis metus. Quisque et purus vehicula eros fermentum pulvinar at quis libero. Vestibulum posuere lacus dignissim augue rutrum mollis. Nam nec orci dapibus, ornare risus quis, scelerisque metus. Nullam luctus, magna quis commodo imperdiet, turpis enim tempor lorem, vel sagittis nisl dolor vitae arcu. Sed pulvinar purus ipsum, nec pharetra leo finibus eu. Cras at porttitor eros.',
      icon: 'exclamation',
      isFree: false,
      price: {
        withCertificate: '123,54 PLN',
        withoutCertificate: '434,54 PLN'
      },
      theory: [
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.'
      ],
      practice: [
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.',
        'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.'
      ]
    },
    functions: [{
      id: 'COURSES_REGISTER'
    }]
  };
};
