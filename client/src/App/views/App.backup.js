import React from 'react';
import Loader from 'generic/components/Loader';
import RootComponent from 'generic/components/RootComponent';
import Input from 'generic/components/Input';
import MultilineInput from 'generic/components/MultilineInput';
import Autocomplete from 'generic/components/Autocomplete';
import Column from 'generic/components/Column';
import Container from 'generic/components/Container';
import Checkbox, { CHECK_TYPES } from 'generic/components/Checkbox';
import Button, { BUTTON_TYPES } from 'generic/components/Button';
import Radio from 'generic/components/Radio';
import Label from 'generic/components/Label';
import RadioGroup from 'generic/components/RadioGroup';
import CheckboxGroup from 'generic/components/CheckboxGroup';
import Row from 'generic/components/Row';
import Value from 'generic/components/Value';
import Paragraph from 'generic/components/Paragraph';
import Info from 'generic/components/Info';
import Quote from 'generic/components/Quote';
import Warning from 'generic/components/Warning';
import LinkDescription from 'generic/components/LinkDescription';
import DateRange from 'generic/components/DateRange';
import Code from 'generic/components/Code';
import DateInput from 'generic/components/DateInput';
import PageProgress from 'generic/components/PageProgress';
import Progressbar, { LABEL_TYPES as PROGRESSBAR_LABEL_TYPES } from 'generic/components/Progressbar';
import CircularProgress, { LABEL_TYPES as CIRCULAR_PROGRESS_LABEL_TYPES } from 'generic/components/CircularProgress';
import Tabs, { Tab } from 'generic/components/Tabs';
import Steps, { Step } from 'generic/components/Steps';

import cx from 'generic/utils/cx';

import About from '../../About/views/Content';
import Administration from '../../Administration/views/Content';
import Authorization from '../../Authorization/views/Content';
import Courses from '../../Courses/views/Content';
import Home from '../../Home/views/Content';
import Search from '../../Search/views/Content';
import User from '../../User/views/Content';

import * as E from '../errors';
import {
  API_URLS,
  LOCATION_IDS,
  LOCATION_URLS,
  NAVIGATION,
  TREE_PARENTS
} from '../navigation';


class App extends RootComponent {
  getDefaultNavigationParams() {
    return {
      id: LOCATION_IDS.USER,
      params: {}
    };
  }

  getUrl() {
    return API_URLS[LOCATION_IDS.INIT];
  }

  getErrorConfig() {
    return {
      FLD_VALUE_REQUIRED: E.ERR_001,
      FLD_INVLD_VALUE: E.ERR_002,
      FLD_MAX_LEN_EXCEEDED: E.ERR_003,
      FLD_MIN_LEN_EXCEEDED: E.ERR_004,
      FLD_MAX_VALUE_EXCEEDED: E.ERR_005,
      FLD_MIN_VALUE_EXCEEDED: E.ERR_006,
      FLD_INVLD_ITEM_SELECTED: E.ERR_007,
      FLD_INVLD_REGEX_MATCH: E.ERR_008,
      FLD_MAX_DATE_EXCEEDED: E.ERR_016,
      FLD_MIN_DATE_EXCEEDED: E.ERR_017
    };
  }

  getConfiguration() {
    return {
      tree: NAVIGATION,
      parents: TREE_PARENTS,
      paths: LOCATION_URLS,
      api: API_URLS
    };
  }

  getViews() {
    return {
      [LOCATION_IDS.ABOUT]: About,
      [LOCATION_IDS.ADMINISTRATION]: Administration,
      [LOCATION_IDS.AUTHORIZATION]: Authorization,
      [LOCATION_IDS.COURSES]: Courses,
      [LOCATION_IDS.HOME]: Home,
      [LOCATION_IDS.SEARCH]: Search,
      [LOCATION_IDS.USER]: User
    }[this.state.content || LOCATION_IDS.HOME];
  }

  render() {
    const ContentComponent = this.getContent();

    return this.fetched ? (
      <div ref="App">
        <h1>Hello 7</h1>
        <PageProgress percent={76} />
        <Column>
          <Row>
            <Input {...this.fieldHandler('search', { validateOnBlur: true })} placeholder="Placeholder" required />
          </Row>
          <Row>
            <MultilineInput {...this.fieldHandler('search', { validateOnBlur: true })} placeholder="Placeholder" required />
          </Row>
          <Row>
            <Input {...this.fieldHandler('search')} placeholder="Placeholder" />
          </Row>
          <Paragraph>
            Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.
          </Paragraph>
          <Paragraph>
            Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.
          </Paragraph>
          <Info>
            Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.
          </Info>
          <Info>
            <div>Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.</div>
          </Info>
          <Info>
            {[
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.',
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.'
            ]}
          </Info>
          <Warning>
            Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.
          </Warning>
          <Warning>
            <div>Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.</div>
          </Warning>
          <Warning>
            {[
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.',
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.'
            ]}
          </Warning>
          <Quote>
            Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.
          </Quote>
          <Quote>
            <div>Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.</div>
          </Quote>
          <Quote>
            {[
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.',
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.'
            ]}
          </Quote>
        </Column>
        <Column>
          <Code lines={[
            'def function(param):',
            '    pass',
            '',
            'function("asd")'
          ]} highlighted={[0, 1]} />
          <Tabs>
            <Tab>Zakładka 1</Tab>
            <Tab errors="Dasdas dasdasda sdas">Zakładka 2</Tab>
            <Tab>Zakładka 3</Tab>
            <Tab>Zakładka 4</Tab>
            <Tab active>Aktywna</Tab>
            <Tab disabled>Wyłączona</Tab>
          </Tabs>
          <Steps>
            <Step errors="DAsdsdf sdfsdfsdf sdas">Step 1</Step>
            <Step>Step 2</Step>
            <Step disabled>Step dis 3</Step>
            <Step>Step 4</Step>
            <Step active>Aktywna</Step>
            <Step errors="Error">Step 6</Step>
          </Steps>
          <Row>
            <Progressbar min={0} max={100} value={44} />
          </Row>
          <Row>
            <Progressbar min={0} max={100} value={22} hasLabel labelType={PROGRESSBAR_LABEL_TYPES.PERCENT} />
          </Row>
          <Row>
            <Progressbar min={0} max={100} value={22} hasLabel labelType={PROGRESSBAR_LABEL_TYPES.ABSOLUTE} />
          </Row>
          <Row>
            <Progressbar min={0} max={100} value={22} hasLabel labelType={PROGRESSBAR_LABEL_TYPES.ABSOLUTE_FRACTION} />
          </Row>
          <Row>
            <Label>Labelka do progress?</Label>
            <Progressbar min={0} max={100} value={88} hasLabel labelType={PROGRESSBAR_LABEL_TYPES.PERCENT} />
          </Row>
          <Row>
            <CircularProgress min={0} max={100} value={22} />
            <CircularProgress min={0} max={100} value={44} />
            <CircularProgress min={0} max={100} value={66} />
            <CircularProgress min={0} max={100} value={88} />
          </Row>
          <Row>
            <CircularProgress min={0} max={100} value={44} />
          </Row>
          <Row>
            <CircularProgress min={0} max={100} value={22} hasLabel labelType={CIRCULAR_PROGRESS_LABEL_TYPES.PERCENT} />
          </Row>
          <Row>
            <CircularProgress min={0} max={100} value={66} hasLabel labelType={CIRCULAR_PROGRESS_LABEL_TYPES.ABSOLUTE} />
          </Row>
          <Row>
            <CircularProgress min={0} max={100} value={66} hasLabel labelType={CIRCULAR_PROGRESS_LABEL_TYPES.ABSOLUTE_FRACTION} />
          </Row>
          <Row>
            <Label>Labelka do date range</Label>
            <Input {...this.fieldHandler('search')} placeholder="Placeholder" />
          </Row>
          <Row>
            <Autocomplete {...this.fieldHandler('autocom')} placeholder="Placeholder" />
          </Row>
          <Row>
            <Checkbox {...this.fieldHandler('chk')} checkType={CHECK_TYPES.X} />
          </Row>
          <Row>
            <Checkbox {...this.fieldHandler('chk')} checkType={CHECK_TYPES.TICK} />
          </Row>
          <Row>
            <Checkbox {...this.fieldHandler('chk')} checkType={CHECK_TYPES.SQUARE} />
            <Label className={cx('label-checkbox')} required>Labelka check</Label>
          </Row>
          <Row>
            <Radio {...this.fieldHandler('rdo')} />
          </Row>
          <Row>
            <Label className={cx('label-group')} required>Labelka do radiogrupy</Label>
            <RadioGroup {...this.fieldHandler('rdgrp')} />
          </Row>
          <Row>
            <Label className={cx('label-group')} required>Labelka do checkboxgrupy</Label>
            <CheckboxGroup {...this.fieldHandler('multichk')} />
          </Row>
          <Row>
            <Label>Labelka do value</Label>
            <Value>Wartośc</Value>
          </Row>
          <Row>
            <Label required>Labelka do value 2</Label>
            <Value required>Wartośc 2</Value>
          </Row>
          <Row>
            <Button buttonType={BUTTON_TYPES.BACK} icon='arrow-left' hints='sdfsdfsdfs dfsdfs dsdf'>Cofnij</Button>

            <Button buttonType={BUTTON_TYPES.SUBMIT} icon='arrow-right' disabled>Podpisz</Button>
            <Button buttonType={BUTTON_TYPES.SAVE} icon='exclamation' errors='sdfsdf sdfsdf'>Wykonaj</Button>
          </Row>
          <Row>
            <Button buttonType={BUTTON_TYPES.FUNCTION} icon='arrow-left' hints='sdfsdfsdfs dfsdfs dsdf' />

            <Button buttonType={BUTTON_TYPES.FUNCTION} icon='arrow-right' disabled />
            <Button buttonType={BUTTON_TYPES.FUNCTION} icon='exclamation' errors='sdfsdf sdfsdf' />
          </Row>
          <Row>
            <Label>Labelka do date range</Label>
            <DateRange {...this.fieldHandler('daterange')} />
          </Row>
          <Row>
            <DateRange {...this.fieldHandler('daterange')} />
          </Row>
          <Row>
            <Label>Labelka do date input</Label>
            <DateInput {...this.fieldHandler('datedate')} />
          </Row>
          <Row>
            <DateInput {...this.fieldHandler('datedate')} />
          </Row>
          <LinkDescription name='Nazwa linku' url='http://www.onet.pl'>
            Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.
          </LinkDescription>
          <LinkDescription url='http://www.onet.pl'>
            <div>Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.</div>
          </LinkDescription>
          <LinkDescription name='Nazwa linku' url='http://www.onet.pl'>
            {[
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.',
              'Aliquam commodo risus arcu, in venenatis eros commodo a. Cras lobortis lectus non egestas gravida. Quisque et enim dictum, congue dolor vel, malesuada erat. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.'
            ]}
          </LinkDescription>
        </Column>
        <Container>
          <div onClick={() => this.navigate(LOCATION_IDS.ABOUT, { param1: 1, param2: 2 })}>Idź do About</div>
          <div onClick={() => this.navigate(LOCATION_IDS.ABOUT_CONTACT, { param3: 3, param4: 4 })}>Idź do About Contact</div>
          <div onClick={() => this.navigate(LOCATION_IDS.ABOUT_INFO_A, { param5: 5, param6: 6 })}>Idź do About Info A</div>
          <div onClick={() => this.navigate(LOCATION_IDS.ADMINISTRATION, { param1: 1, param2: 2 })}>Idź do Administration</div>
          <div onClick={() => this.navigate(LOCATION_IDS.COURSES, { param1: 1, param2: 2 })}>Idź do Courses</div>
        </Container>
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </div>
    ) : (
      <Loader />
    );
  }
}


export default App;
