import React, {Component} from 'react';
import PersonalForm from './PersonalForm';
import WorkForm from './WorkForm';
import EduForm from './EduForm';
import SkillsForm from './SkillsForm';

class CVForm extends Component {
  render() {
    const {
      onChangePersonal, 
      onSubmitCV, 
      personName, 
      phone, 
      email, 
      address,

      onChangeWork, 
      onSetWork,
      workExp, 
      
      edu,
      onChangeEdu,
      onSetEdu,

      skills,
      onChangeSkills,
      onSetSkills,
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

        <EduForm
          onSetEdu={onSetEdu}
          onChangeEdu={onChangeEdu}
          edu={edu}
        />

        <SkillsForm
          skills={skills}
          onChangeSkills={onChangeSkills}
          onSetSkills={onSetSkills}
        />

        <div className="endButtons">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default CVForm;