/*
  request: { id }
*/

export default (/* request */) => {
  return {
    course: {
      id: '555',
      title: 'Nunc aliquet suscipit eleifend. Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo. Suspendisse facilisis ornare arcu eu facilisis.'
    },
    data: {
      hasToAnswerQuestions: false,
      id: '124',
      subtitle: 'Aliquam sed porttitor nisl, ornare faucibus nunc. Phasellus ac odio varius, scelerisque velit at, pellentesque dui. Maecenas ultricies ipsum quis enim aliquam varius.',
      title: 'Donec varius fermentum tempus'
    },
    functions: [{
      id: 'COURSES_TOPIC:QUESTIONS'
    }, {
      id: 'COURSES_TOPIC:MARK_AS_TAKEN'
    }, {
      id: 'COURSES_TOPIC:UNMARK_AS_TAKEN'
    }],
    navigation: {
      next: {
        id: '125',
        title: 'Vestibulum libero sapien'
      },
      prev: {
        id: '123',
        title: 'Praesent fringilla sit amet lorem in tincidunt'
      }
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
    }],
    content: [{
      params: {
        elType: 'autotoc',
        elements: [{
          id: '1',
          text: 'Sekcja pierwsza pierwszego poziomu',
          elements: [{
            id: '1_1',
            text: 'Sekcja pierwsza drugiego poziomu',
            elements: [],
          }, {
            id: '1_2',
            text: 'Sekcja druga drugiego poziomu',
            elements: []
          }]
        }, {
          id: '2',
          text: 'Sekcja druga pierwszego poziomu',
          elements: []
        }]
      }
    }, {
      elType: 'sect1',
      params: {
        id: '1',
        text: 'Sekcja pierwsza pierwszego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ##nazwa_zmiennej##.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Donec auctor cursus ex eu gravida. Duis quis iaculis mauris, sed consequat justo.'
      }
    }, {
      elType: 'sect2',
      params: {
        id: '1_1',
        text: 'Sekcja pierwsza drugiego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Pellentesque lacus nisl, laoreet vitae lacus vel, semper lobortis ante.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nullam quis leo ac lacus venenatis laoreet eu convallis lorem.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Suspendisse aliquet eu lacus a vulputate.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Aenean finibus leo non ante blandit pellentesque.'
      }
    }, {
      elType: 'sect2',
      params: {
        id: '1_2',
        text: 'Sekcja druga drugiego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'quote',
      params: {
        lines: [
          'Mauris vel iaculis metus, ac venenatis ex.',
          'In euismod enim ut enim ullamcorper convallis.',
          'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
        ]
      }
    }, {
      elType: 'sect1',
      params: {
        id: '2',
        text: 'Sekcja druga pierwszego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'info',
      params: {
        lines: [
          'Aliquam commodo risus arcu, in venenatis eros commodo a.',
          'Cras lobortis lectus non egestas gravida.',
          'Quisque et enim dictum, congue dolor vel, malesuada erat. Aliquam et semper libero. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.'
        ]
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nunc pharetra justo turpis, eget dictum ante faucibus id.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Aenean tempus dictum commodo.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nam purus ante, viverra aliquam molestie quis, tincidunt vitae dui.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Aliquam ac dictum ligula.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Suspendisse consectetur volutpat tempus.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nulla vel sodales justo, <a class="ng-topic-inlinelink" href="http://www.onet.pl" target="_blank">Nazwa linku</a> finibus feugiat mi. Duis pharetra iaculis urna suscipit laoreet.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi eu hendrerit nisi. <span class="ng-topic-inlineemph">Integer id magna semper</span>, ornare nunc vel, pellentesque neque.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi semper, felis quis mattis dignissim, sem urna hendrerit ipsum, eu ultrices lorem magna ac diam. Ut non pharetra ante.'
      }
    }, {
      elType: 'code',
      params: {
        lines: [
          'class Course(models.Model):',
          '    ident = IdentField()',
          '    title = TitleField()',
          '    short_description = models.TextField()',
          '    long_description = models.TextField()',
          '    icon = IconField()',
          '    image = ImageField()',
          '    is_free = models.BooleanField(default=False)',
          '    has_certificate = models.BooleanField(default=False)',
          '    price = models.DecimalField(max_digits=6, decimal_places=2)',
          '    price_with_certificate = models.DecimalField(max_digits=6, decimal_places=2)',
          '    visible = models.BooleanField(default=True)',
          '    certificate_title = TitleField(blank=True, null=True)',
          '    certificate_background = URLField(blank=True, null=True)'
        ]
      },
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi at efficitur sapien. Duis nec posuere lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur elementum odio velit, id porttitor dolor lacinia ut. Ut tellus arcu, consequat et ultricies in, mollis vel mauris. Proin metus augue, porttitor nec rutrum a, cursus ut enim. In turpis neque, tincidunt vehicula mauris quis, malesuada tempus magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque fermentum eget elit id feugiat. Donec sed sem magna. Sed dui nisi, porttitor eget scelerisque dapibus, convallis eget sem. Ut erat tellus, condimentum sed lacus at, blandit vehicula tellus. Cras non dolor eget arcu elementum sodales. Etiam tempor magna at sollicitudin fringilla. Vivamus at porttitor orci. Etiam dictum blandit mattis.'
      }
    }, {
      elType: 'warning',
      params: {
        lines: [
          'Donec pretium, lectus id lacinia fermentum, velit erat condimentum urna, sit amet pharetra orci felis interdum velit.'
        ]
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras tempus ac sapien sed maximus. Donec dictum faucibus fringilla. Vestibulum et cursus nisi.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Suspendisse vitae velit at risus cursus maximus a id mi.'
      }
    }, {
      elType: 'link',
      params: {
        lines: [
          'Podpis pod linkiem'
        ],
        title: 'Nazwa linku',
        url: 'http://www.onet.pl'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras luctus massa eu ornare egestas.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi porttitor suscipit mi aliquet pharetra.'
      }
    }, {
      elType: 'link',
      params: {
        lines: [
          'Podpis pod linkiem 2 afsdf sd gsgdfgdfg lacinia fermentum, velit erat condimentum urna.'
        ],
        title: 'Nazwa linku 2, wewn.',
        url: '/about'
      }
    }, {
      elType: 'link',
      params: {
        title: 'Nazwa linku bez podpisu',
        url: 'http://www.onet.pl'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras luctus massa eu ornare egestas.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi porttitor suscipit mi aliquet pharetra.'
      }
    }, {
      elType: 'link',
      params: {
        title: 'Nazwa linku 2, wewn. bez podpisu',
        url: '/about'
      }
    }, {
      elType: 'link',
      params: {
        url: 'http://www.onet.pl'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras luctus massa eu ornare egestas.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi porttitor suscipit mi aliquet pharetra.'
      }
    }, {
      elType: 'link',
      params: {
        url: '/about'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi hendrerit blandit nisl, non aliquet nulla volutpat sit amet.'
      }
    }, {
      elType: 'image',
      params: {
        lines: [
          'Podpis pod obrazkiem'
        ],
        url: 'https://globalgamejam.org/sites/default/files/styles/game_sidebar__normal/public/game/featured_image/promo_5.png?itok=9dymM8JD'
      }
    }, {
      elType: 'image',
      params: {
        url: 'https://globalgamejam.org/sites/default/files/styles/game_sidebar__normal/public/game/featured_image/promo_5.png?itok=9dymM8JD'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nullam ornare dolor odio, pretium pharetra odio aliquam non. Donec pretium, lectus id lacinia fermentum, velit erat condimentum urna, sit amet pharetra orci felis interdum velit. Donec fermentum accumsan fermentum. Vestibulum facilisis, dui vitae pretium molestie, purus ante fringilla elit, lobortis convallis orci mauris non purus. Maecenas viverra convallis dignissim. Aliquam justo augue, iaculis in mi ac, sollicitudin lobortis magna. Curabitur sit amet porttitor turpis. Vivamus sagittis orci ac nisi sollicitudin, a semper nunc ultricies.'
      }
    }]
  };
};
