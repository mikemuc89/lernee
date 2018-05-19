import React from 'react';
import ViewComponent from 'generic/components/ViewComponent';
import { H1, H2, H3 } from 'generic/components/H';
import Container from 'generic/components/Container';

import Dashboard from './Dashboard';
import Payments from './Payments';
import Users from './Users';

import { LOCATION_IDS } from '../../App/navigation';


class AdministrationContent extends ViewComponent {
  getViews() {
    return {
      [LOCATION_IDS.ADMINISTRATION_DASHBOARD]: Dashboard,
      [LOCATION_IDS.ADMINISTRATION_PAYMENTS]: Payments,
      [LOCATION_IDS.ADMINISTRATION_USERS]: Users
    }[this.state.content];
  }

  render() {
    const ContentComponent = this.getContent();

    return (
      <Container ref="AdministrationContent" className="content-component">
        <H1>Administration</H1>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.</div>
        <H2>Subtitle administration</H2>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.</div>
        <H3>Third tier header administration</H3>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.</div>
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </Container>
    );
  }
}


export default AdministrationContent;
