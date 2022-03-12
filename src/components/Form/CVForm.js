import React, {Component} from 'react';
import PersonalForm from './PersonalForm';
import WorkForm from './WorkForm';

class CVForm extends Component {
  render() {
    const {
      onChangePersonal, 
      onChangeWork, 
      onSetWork,
      workExp, 
      onSubmitCV, 
      personName, 
      phone, 
      email, 
      address,
    } = this.props;

    return(
      <form onSubmit={onSubmitCV}>
        <PersonalForm
          onChangePersonal={onChangePersonal} 
          personName={personName}
          phone={phone}
          email={email}
          address={address}
        />

        <WorkForm
          onSetWork={onSetWork}
          onChangeWork={onChangeWork}
          workExp={workExp}
        />

        {/*
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