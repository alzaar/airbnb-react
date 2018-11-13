import React from 'react';
import ReactDOM from 'react-dom';


class Flat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
    <div className="card" >
<img className="card-img-top" src="https://source.unsplash.com/random" alt="Card image cap" />
<div className="card-body">
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
    </div>
    );
  }

}


export default Flat;
