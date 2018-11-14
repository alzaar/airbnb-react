import React from 'react';
import './flat.css'

class Flat extends React.Component {
  constructor(props) {
    super(props)
    this.flatClick = this.flatClick.bind(this);
  }

  flatClick() {
    this.props.selectFlat(this.props.flat)
  }

  render() {

    const style = {
      width: '18em'
    };

    const title = ` - ${this.props.flat.name}`;
    const price = `${this.props.flat.price} ${this.props.flat.priceCurrency}`;

    return (
    <div className="flat" onClick={this.flatClick}>
      <div className="card" >
        <img className="card-img-top" style={style} src={this.props.flat.imageUrl} alt="Card image cap" />
        <div className="card-body">
            <p className="card-text"><strong>{price}</strong>{title}</p>
        </div>
      </div>
    </div>
    );
  }

}


export default Flat;
