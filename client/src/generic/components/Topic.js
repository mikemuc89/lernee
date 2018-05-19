import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';

import Code from './Code';
import { H1, H2, H3, H4, H5 } from './H';
import Img from './Img';
import Info from './Info';
import LinkDescription from './LinkDescription';
import Paragraph from './Paragraph';
import Quote from './Quote';
import TableOfContents from './TableOfContents';
import Warning from './Warning';


class Topic extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array
  }

  render() {
    const { className, data = [] } = this.props;

    return (
      <div className={cx(className, 'topic')}>
      {data.map(({ id, params }, idx) => ({
        autotoc: <TableOfContents key={idx} data={params.elements} />,
        code: <Code key={idx} lines={params.lines} />,
        image: <Img key={idx} src={params.url} hasPopup={true}>{params.lines}</Img>,
        info: <Info key={idx} name={params.title}>{params.lines}</Info>,
        link: <LinkDescription key={idx} name={params.title} url={params.url}>{params.lines}</LinkDescription>,
        paragraph: <Paragraph key={idx}>{params.text}</Paragraph>,
        quote: <Quote key={idx} name={params.title}>{params.lines}</Quote>,
        summary: <Paragraph key={idx} summary>{params.text}</Paragraph>,
        sect1: <H1 key={idx} id={params.id}>{params.text}</H1>,
        sect2: <H2 key={idx} id={params.id}>{params.text}</H2>,
        sect3: <H3 key={idx} id={params.id}>{params.text}</H3>,
        sect4: <H4 key={idx} id={params.id}>{params.text}</H4>,
        sect5: <H5 key={idx} id={params.id}>{params.text}</H5>,
        toc: <TableOfContents key={idx} data={params.elements} />,
        warning: <Warning key={idx} name={params.title}>{params.lines}</Warning>,
      }[id]))}
      </div>
    );
  }
}


export default Topic;
