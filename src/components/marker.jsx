import React from 'react';
import './marker.css'


class Marker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = 'marker';
    if (this.props.selected) {
      classes += ' selected';
    }

    return(
      <div className={classes}>
        {`${this.props.priceCurrency} ${this.props.price}`}
      </div>
    );
  }
}

export default Marker;
