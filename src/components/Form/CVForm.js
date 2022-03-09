import React, {Component} from 'react';
import PersonalForm from './PersonalForm';

class CVForm extends Component {
  render() {
    const {onChangePersonal, onSubmitCV, personName, phone, email, address} = this.props;

    return(
      <form onSubmit={onSubmitCV}>
        <PersonalForm
          onChangePersonal={onChangePersonal} 
          personName={personName}
          phone={phone}
          email={email}
          address={address}
        />
        {/*<div className="work">
          <h2>Work Experience</h2>
          <button id="addWork" type="button">+</button>
        </div>
        <div className="education">
          <h2>Education</h2>
          <button id="addEdu" type="button">+</button>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <button id="addSkills" type="button">+</button>
        </div>*/}
        <div className="endButtons">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default CVForm;