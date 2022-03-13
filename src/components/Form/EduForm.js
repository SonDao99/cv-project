import React, {Component} from 'react';

class EduForm extends Component {
  constructor(props) {
    super(props);

    this.addEdu = this.addEdu.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
  }


  addEdu = () => {
    let updated = false;
    let newEduExp = this.props.edu;
    newEduExp.push({
      school: '',
      degree: '',
      start: '',
      end: '',
      description: '',
      id: newEduExp.length,
    })

    updated = true;
    if (updated) {
      this.props.onSetEdu(newEduExp);
    }
  }

  deleteEdu = (e) => {
    const thisExperience = e.target.parentNode;

    let experience = thisExperience;
    let i = 0;
    while (experience.previousSibling != null) {
      experience = experience.previousSibling;
      i++;
    }

    let updated = false;
    let newEdu = this.props.edu;
    newEdu.splice(i, 1);

    for (let i = 0; i < newEdu.length; i += 1) {
      newEdu[i].id = i;
    }

    updated = true;

    if (updated) {
      this.props.onSetEdu(newEdu);
    }
  }

  displayEdu = (edu) => {
    const EduArray = Array.from(edu);
    return(
      EduArray.map((exp) => {
        return (
          <div key={exp.id} className="EduExp">
            <label htmlFor="school">School Name:</label>
            <input 
              onChange={this.props.onChangeEdu} 
              type="text" 
              className='inputSchool' 
              value={exp.school}
            ></input>

            <label htmlFor="degree">Degree:</label>
            <input
              onChange={this.props.onChangeEdu}
              type="text"
              className='inputDegree'
              value={exp.degree}
            ></input>

            <label htmlFor="start">Start:</label>
            <input
              onChange={this.props.onChangeEdu}
              type="text"
              className='inputStart'
              value={exp.start}
            ></input>

            <label htmlFor="end">End:</label>
            <input
              onChange={this.props.onChangeEdu}
              type="text"
              className='inputEnd'
              value={exp.end}
            ></input>

            <label htmlFor="description">Description:</label>
            <input
              onChange={this.props.onChangeEdu}
              type="text"
              className='inputDesc'
              value={exp.description}
            ></input>

            <button type='button' onClick={this.deleteEdu} className="delete">Delete</button>
          </div>
        )
      })
    )
  }


  render() {
    const {edu} = this.props;

    return(
      <div className='allEdu'>
        <h2>Education</h2>

        <div className='allEduExperiences'>
          {this.displayEdu(edu)}
        </div>

        <button type='button' onClick={this.addEdu} className="add">Add</button>
      </div>
    )
  }
  }
  
  export default EduForm;