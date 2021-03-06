import React from 'react';
import {
  asset,
  Pano,
} from 'react-vr';

export default class Canvas extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      src: this.props.src,
    }
  }

  render() {
    return (
      <Pano source={asset(this.state.src)}/>
    );
  }
};
