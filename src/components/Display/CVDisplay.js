import React, {Component} from 'react';
import Personal from './Personal';
import Work from './Work';
import Edu from './Edu';
import Skills from './Skills';

class CVDisplay extends Component {
  render() {
    const {onEditCV, 
           personName,
           phone,
           email,
           address,
           workExp,
           edu,
           skills,
          } = this.props;

    return(
      <div id='display'>
        <Personal 
          personName={personName}
          phone={phone}
          email={email}
          address={address}
        />

        <Work workExp={workExp}/>

        <Edu edu={edu}/>

        <Skills skills={skills}/>

        <button onClick={onEditCV}>Edit</button>
      </div>
    )
  }
}

export default CVDisplay;