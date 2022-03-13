import React, {Component} from 'react';

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.addWork = this.addWork.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
  }

  addWork = () => {
    let updated = false;
    let newWorkExp = this.props.workExp;
    newWorkExp.push({
      company: '',
      role: '',
      start: '',
      end: '',
      description: '',
      id: newWorkExp.length,
    })

    updated = true;
    if (updated) {
      this.props.onSetWork(newWorkExp);
    }
  }

  deleteWork = (e) => {
    const thisExperience = e.target.parentNode;

    let experience = thisExperience;
    let i = 0;
    while (experience.previousSibling != null) {
      experience = experience.previousSibling;
      i++;
    }

    let updated = false;
    let newWorkExp = this.props.workExp;
    newWorkExp.splice(i, 1);

    for (let i = 0; i < newWorkExp.length; i += 1) {
      newWorkExp[i].id = i;
    }

    updated = true;

    if (updated) {
      this.props.onSetWork(newWorkExp);
    }
  }

  displayWork = (workExp) => {
    const workArray = Array.from(workExp);
    return(
      workArray.map((exp) => {
        return (
          <div key={exp.id} className="workExp">
            <label htmlFor="company">Company Name:</label>
            <input 
              onChange={this.props.onChangeWork} 
              type="text" 
              className='inputCompany' 
              value={exp.company}
            ></input>

            <label htmlFor="role">Role:</label>
            <input
              onChange={this.props.onChangeWork}
              type="text"
              className='inputRole'
              value={exp.role}
            ></input>

            <label htmlFor="start">Start:</label>
            <input
              onChange={this.props.onChangeWork}
              type="text"
              className='inputStart'
              value={exp.start}
            ></input>

            <label htmlFor="end">End:</label>
            <input
              onChange={this.props.onChangeWork}
              type="text"
              className='inputEnd'
              value={exp.end}
            ></input>

            <label htmlFor="description">Description:</label>
            <input
              onChange={this.props.onChangeWork}
              type="text"
              className='inputDesc'
              value={exp.description}
            ></input>

            <button type='button' onClick={this.deleteWork} className="delete">Delete</button>
          </div>
        )
      })
    )
  }


  render() {
    const {workExp} = this.props;

    return(
      <div className='allWork'>
        <h2>Work Experience</h2>

        <div className='allWorkExperiences'>
          {this.displayWork(workExp)}
        </div>

        <button type='button' onClick={this.addWork} className="add">Add</button>
      </div>
    )
  }
  }
  
  export default WorkForm;