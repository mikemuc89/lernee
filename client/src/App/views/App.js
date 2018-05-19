import React from 'react';
import { PropTypes } from 'prop-types';

import cx from 'generic/utils/cx';

import Button, { BUTTON_TYPES } from 'generic/components/Button';
import Column from 'generic/components/Column';
import Footer from 'generic/components/Footer';
import Input from 'generic/components/Input';
import Loader from 'generic/components/Loader';
import Menu, { MenuLink } from 'generic/components/Menu';
import PageProgress from 'generic/components/PageProgress';
import RootComponent from 'generic/components/RootComponent';
import TopMenu, { TopMenuLink } from 'generic/components/TopMenu';

import Chart, { CHART_TYPES } from 'generic/components/Chart';
import Notification from 'generic/components/Notification';

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
  static childContextTypes = {
    navigate: PropTypes.func,
    navIds: PropTypes.object,
    navConfig: PropTypes.object
  }

  getChildContext() {
    return {
      navigate: this.navigate,
      navIds: LOCATION_IDS,
      navConfig: this.getConfiguration()
    };
  }

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

  getViewConfig(id, path = []) {
    const { tree, parents } = this.getConfiguration();
    const locationId = typeof id === 'string' ? LOCATION_IDS[id.toUpperCase()] : id;
    path.unshift(locationId);
    if (!parents[locationId]) {
      return Object.assign({ id }, path.reduce((result, currentId, idx) => (
        idx === 0 ? result[currentId] : result.children[currentId]
      ), tree));
    } else {
      return this.getViewConfig(parents[locationId], path);
    }
  }

  render() {
    const ContentComponent = this.getContent();
    const { data: { data, links, menu, notices, user, loadingProgress = 0 } = {} } = this.state;

    const lineChartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Something',
        data: [
          {x: 0, y: 1},
          {x: 1, y: 6},
          {x: 2, y: 2},
          {x: 3, y: 15},
          {x: 4, y: 0},
          {x: 5, y: 4},
          {x: 6, y: 12},
          {x: 7, y: 34},
          {x: 8, y: 36},
          {x: 9, y: 16}
        ],
        backgroundColor: 'rgba(220, 20, 20, 0.2)',
        borderColor: 'rgba(220, 20, 20, 1)',
        borderWidth: 2
      }]
    };

    const bubbleChartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Something',
        data: [
          {x: 0, y: 1, v: 15},
          {x: 1, y: 6, v: 3},
          {x: 2, y: 2, v: 10},
          {x: 3, y: 15, v: 1},
          {x: 4, y: 0, v: 22},
          {x: 5, y: 4, v: 40},
          {x: 6, y: 12, v: 50},
          {x: 7, y: 34, v: 3},
          {x: 8, y: 36, v: 22},
          {x: 9, y: 16, v: 11}
        ],
        backgroundColor: 'rgba(220, 20, 20, 0.2)',
        borderColor: 'rgba(220, 20, 20, 1)',
        borderWidth: 2
      }]
    };

    const barChartData = {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      datasets: [{
        label: 'Something',
        data: [1, 6, 2, 15, 0, 4, 12, 34, 36, 16],
        backgroundColor: 'rgba(220, 20, 20, 0.2)',
        borderColor: 'rgba(220, 20, 20, 1)',
        borderWidth: 2
      }]
    };

    const chartOptions = {
      
    };

    return this.fetched ? (
      <div ref="App">
        <PageProgress percent={loadingProgress} />
        <TopMenu>
          <Column colCount={5} colSpan={3}>
          {links.map(({ id, text, url }) => (
            <TopMenuLink key={id} url={url} id={id}>{text}</TopMenuLink>
          ))}
          </Column>
          <Column colCount={5} colSpan={1}>
          {user ? (
            <div/>
          ) : (
            <div className={cx('right')}>
              <TopMenuLink onClick={() => this.navigate(LOCATION_IDS.AUTHORIZATION_LOGIN)}>Zaloguj</TopMenuLink>
              <TopMenuLink onClick={() => this.navigate(LOCATION_IDS.AUTHORIZATION_REGISTER)}>Zarejestruj</TopMenuLink>
            </div>
          )}
          </Column>
          <Column colCount={5} colSpan={1}>
            <Input {...this.fieldHandler('search', { validateOnBlur: true })} className="with-button" placeholder="Wyszukaj" required={false} />
            <Button className={cx('after-input')} icon="search" buttonType={BUTTON_TYPES.SEARCH} />
          </Column>
        </TopMenu>
        <Menu>
          <span className={cx('menu-logo')} onClick={() => this.navigate(LOCATION_IDS.HOME)} />
        {menu.map(({ id }) => (
          <MenuLink key={id} data={this.getViewConfig(id)} onClick={() => this.navigate(LOCATION_IDS[id.toUpperCase()])} />
        ))}
        </Menu>
        <Notification internalRedirection={{ text: 'Internal', id: 'ABOUT_INFO' }} icon="info" externalLink={{ text: 'External', url: 'http://www.onet.pl/' }}>Notification text</Notification>
        <Column>
          <Chart chartType={CHART_TYPES.LINE} title="Line chart" labels={lineChartData.labels} datasets={lineChartData.datasets} options={chartOptions} />  
          <Chart chartType={CHART_TYPES.BAR} title="Bar chart" labels={barChartData.labels} datasets={barChartData.datasets} options={chartOptions} />        
          <Chart chartType={CHART_TYPES.HORIZONTAL_BAR} title="Horizontal Bar chart" labels={barChartData.labels} datasets={barChartData.datasets} options={chartOptions} />        
        </Column>
        <Column>
          <Chart chartType={CHART_TYPES.BUBBLE} title="Bubble chart" data={bubbleChartData.labels} datasets={bubbleChartData.datasets} options={chartOptions} />
          <Chart chartType={CHART_TYPES.DOUGHNUT} title="Doughnut chart" labels={barChartData.labels} datasets={barChartData.datasets} options={chartOptions} />  
          <Chart chartType={CHART_TYPES.PIE} title="Pie chart" labels={barChartData.labels} datasets={barChartData.datasets} options={chartOptions} />  
          <Chart chartType={CHART_TYPES.RADAR} title="Radar chart" labels={barChartData.labels} datasets={barChartData.datasets} options={chartOptions} />  
          <Chart chartType={CHART_TYPES.POLAR} title="Polar chart" labels={barChartData.labels} datasets={barChartData.datasets} options={chartOptions} />  
          <Chart chartType={CHART_TYPES.SCATTER} title="Scatter chart" labels={lineChartData.labels} datasets={lineChartData.datasets} options={chartOptions} />  
        </Column>
      {ContentComponent && (
        <ContentComponent className={cx('app-content')} {...this.viewHandler()} />
      )}
        <Footer>
          <i className="fa fa-copyright"></i>
          <span>www.netgis.com.pl Michał Mućko Systemy Informacji Przestrzennej w Internecie</span>
        </Footer>
      </div>
    ) : (
      <Loader />
    );
  }
}


export default App;
