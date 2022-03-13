import React, {Component} from 'react';

class SkillsForm extends Component {
  constructor(props) {
    super(props);

    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }

  addSkill = () => {
    let updated = false;
    let newSkills = this.props.skills;
    newSkills.push({
      value: '',
      id: newSkills.length,
    })

    updated = true;
    if (updated) {
      this.props.onSetSkills(newSkills);
    }
  }

  deleteSkill = (e) => {
    const thisSkill = e.target.parentNode;

    let skill = thisSkill;
    let i = 0;
    while (skill.previousSibling != null) {
      skill = skill.previousSibling;
      i++;
    }

    let updated = false;
    let newSkills = this.props.skills;
    newSkills.splice(i, 1);

    for (let i = 0; i < newSkills.length; i += 1) {
      newSkills[i].id = i;
    }

    updated = true;

    if (updated) {
      this.props.onSetSkills(newSkills);
    }
  }

  displaySkills = (skills) => {
    const skillsArray = Array.from(skills);
    return(
      skillsArray.map((skill) => {
        return (
          <div key={skill.id} className="skill">
            
            <input 
              onChange={this.props.onChangeSkills} 
              type="text" 
              className='skillInput' 
              value={skill.value}
            ></input>

            <button type='button' onClick={this.deleteSkill} className="delete">Delete</button>
          </div>
        )
      })
    )
  }


  render() {
    const {skills} = this.props;

    return(
      <div className='allSkills'>
        <h2>Skills</h2>

        <div className='allSkillInputs'>
          {this.displaySkills(skills)}
        </div>

        <button type='button' onClick={this.addSkill} className="add">Add</button>
      </div>
    )
  }
  }
  
  export default SkillsForm;