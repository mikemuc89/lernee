import React from 'react';
import FlowComponent from 'generic/components/FlowComponent';

import Step1 from './Register/Step1';
import Step2 from './Register/Step2';


class AuthorizationRegister extends FlowComponent {
  getViews() {
    return {
      Step1: Step1,
      Step2: Step2
    }[this.state.step];
  }

  render() {
    const StepComponent = this.getContent();

    return (
      <div ref="AuthorizationRegister">
        <div>Authorization Register</div>
      {StepComponent && (
        <StepComponent {...this.viewHandler()} />
      )}
      </div>
    );
  }
}


export default AuthorizationRegister;
