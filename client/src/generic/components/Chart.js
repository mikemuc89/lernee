import React from 'react';
import { PropTypes } from 'prop-types';
import { Bar, Bubble, Doughnut, HorizontalBar, Line, Pie, Polar, Radar, Scatter } from 'react-chartjs-2';
import cx from '../utils/cx';


export const CHART_TYPES = {
  BAR: Symbol('CHART_TYPE.BAR'),
  BUBBLE: Symbol('CHART_TYPE.BUBBLE'),
  DOUGHNUT: Symbol('CHART_TYPE.DOUGHNUT'),
  HORIZONTAL_BAR: Symbol('CHART_TYPE.HORIZONTAL_BAR'),
  LINE: Symbol('CHART_TYPE.LINE'),
  PIE: Symbol('CHART_TYPE.PIE'),
  POLAR: Symbol('CHART_TYPE.POLAR'),
  RADAR: Symbol('CHART_TYPE.RADAR'),
  SCATTER: Symbol('CHART_TYPE.SCATTER')
};

export const CHART_LEGEND_POSITION = {
  BOTTOM: Symbol('CHART_LEGEND_POSITION.BOTTOM'),
  LEFT: Symbol('CHART_LEGEND_POSITION.LEFT'),
  RIGHT: Symbol('CHART_LEGEND_POSITION.RIGHT'),
  TOP: Symbol('CHART_LEGEND_POSITION.TOP')
};

const CHART_TYPE_TO_CLASS = {
  [CHART_TYPES.BAR]: Bar,
  [CHART_TYPES.BUBBLE]: Bubble,
  [CHART_TYPES.DOUGHNUT]: Doughnut,
  [CHART_TYPES.HORIZONTAL_BAR]: HorizontalBar,
  [CHART_TYPES.LINE]: Line,
  [CHART_TYPES.PIE]: Pie,
  [CHART_TYPES.POLAR]: Polar,
  [CHART_TYPES.RADAR]: Radar,
  [CHART_TYPES.SCATTER]: Scatter,
};

const CHART_LEGEND_POSITION_TO_STRING = {
  [CHART_LEGEND_POSITION.BOTTOM]: 'bottom',
  [CHART_LEGEND_POSITION.LEFT]: 'left',
  [CHART_LEGEND_POSITION.RIGHT]: 'right',
  [CHART_LEGEND_POSITION.TOP]: 'top'
};

const prepareChartProps = (props) => {
  const { legendPosition, labels, datasets, responsive = true, ...rest } = props;
  return {
    ...rest,
    legend: {
      ...rest.legend,
      position: CHART_LEGEND_POSITION_TO_STRING[legendPosition || CHART_LEGEND_POSITION.TOP],
      display: Boolean(legendPosition)
    },
    data: {
      ...rest.data,
      labels,
      datasets
    },
    options: {
      ...rest.options,
      responsive,
      tooltips: {
        mode: 'index',
        intersect: false,
      }
    }
  };
};


class Chart extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    chartType: PropTypes.symbol,
    legendPosition: PropTypes.symbol,
    labels: PropTypes.array,
    datasets: PropTypes.array,
    responsive: PropTypes.bool,
    title: PropTypes.string
  }

  render() {
    const { title, className, chartType = CHART_TYPES.LINE, ...props } = this.props;
    const ChartComponent = CHART_TYPE_TO_CLASS[chartType];

    return (
      <div className={cx(className, 'chart')}>
        <div className={cx('chart-title')}>{title}</div>
        <ChartComponent {...prepareChartProps(props)} />
      </div>
    );
  }
}


export default Chart;
