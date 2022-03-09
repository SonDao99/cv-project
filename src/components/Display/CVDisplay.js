import React, {Component} from 'react';
import Personal from './Personal';

class CVDisplay extends Component {
  render() {
    const {onEditCV, personName, phone, email, address,} = this.props;

    return(
      <div id='display'>
        <Personal 
        personName={personName}
        phone={phone}
        email={email}
        address={address}
        />
        <button onClick={onEditCV}>Edit</button>
      </div>
    )
  }
}

export default CVDisplay;