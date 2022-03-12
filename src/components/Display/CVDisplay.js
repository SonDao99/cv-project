import React, {Component} from 'react';
import Personal from './Personal';
import Work from './Work';

class CVDisplay extends Component {
  render() {
    const {onEditCV, personName, phone, email, address, workExp} = this.props;

    return(
      <div id='display'>
        <Personal 
          personName={personName}
          phone={phone}
          email={email}
          address={address}
        />

        <Work workExp={workExp}/>

        <button onClick={onEditCV}>Edit</button>
      </div>
    )
  }
}

export default CVDisplay;