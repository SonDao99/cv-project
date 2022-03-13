import React, { Component } from "react";
import CVForm from './components/Form/CVForm';
import CVDisplay from './components/Display/CVDisplay';
import './styles/style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'edit',
      personName: '',
      phone: '',
      email: '',
      address: '',
      workExp: [/*{
        company: '',
        role: '',
        start: '',
        end: '',
        description: '',
        id: 0,
      }*/],
      edu: [/*{
        school: '',
        degree: '',
        start: '',
        end: '',
        description: '',
        id: 0,
      }*/],
      skills: [/*{
        value: '',
        id: 0,
      }*/],
      inputValue: {},
    }

    this.onSubmitCV = this.onSubmitCV.bind(this);
    this.onEditCV = this.onEditCV.bind(this);
  }

  onSubmitCV = (e) => {
    e.preventDefault();

    const personName = document.getElementById('personName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const address = document.getElementById('address');

    this.setState({
      mode: 'view',
      personName: personName.value,
      phone: phone.value,
      email: email.value,
      address: address.value,
    })
  }

  onEditCV = () => {
    this.setState({
      mode: 'edit',
    })
  }

  onChangePersonal = (e) => {
    const elementID = e.target.id;
    this.setState({
      [elementID]: e.target.value,
    })
  }

  setWorkExp = (newWorkExp) => {
    this.setState({
      workExp: newWorkExp
    });
  }

  onChangeWork = (e) => {
    const parentNode = e.target.parentElement;

    let experience = parentNode;
    let i = 0;
    while (experience.previousSibling != null) {
      experience = experience.previousSibling;
      i++;
    }

    this.setState({
      workExp: this.state.workExp.slice(0,i).concat(
        {
          company: parentNode.children[1].value,
          role: parentNode.children[3].value,
          start: parentNode.children[5].value,
          end: parentNode.children[7].value,
          description: parentNode.children[9].value,
          id: i,
        }, 
        this.state.workExp.slice(i+1)),
    })
  }

  setEduExp = (newEduExp) => {
    this.setState({
      edu: newEduExp
    });
  }

  onChangeEdu = (e) => {
    const parentNode = e.target.parentElement;

    let experience = parentNode;
    let i = 0;
    while (experience.previousSibling != null) {
      experience = experience.previousSibling;
      i++;
    }

    this.setState({
      edu: this.state.edu.slice(0,i).concat(
        {
          school: parentNode.children[1].value,
          degree: parentNode.children[3].value,
          start: parentNode.children[5].value,
          end: parentNode.children[7].value,
          description: parentNode.children[9].value,
          id: i,
        }, 
        this.state.edu.slice(i+1)),
    })
  }

  setSkills = (newSkills) => {
    this.setState({
      skills: newSkills
    });
  }

  onChangeSkills = (e) => {
    const parentNode = e.target.parentElement;

    let skill = parentNode;
    let i = 0;
    while (skill.previousSibling != null) {
      skill = skill.previousSibling;
      i++;
    }

    this.setState({
      skills: this.state.skills.slice(0,i).concat(
        {
          value: parentNode.children[0].value,
          id: i,
        }, 
        this.state.skills.slice(i+1)),
    })
  }

  render() {
    const {personName, phone, email, address, workExp, edu, skills} = this.state;

    let {mode} = this.state;

    let display;
    if (mode === 'edit') {
      display = <CVForm
                  onChangePersonal={this.onChangePersonal}
                  personName={personName}
                  phone={phone}
                  email={email}
                  address={address}

                  workExp={workExp}
                  onChangeWork={this.onChangeWork}
                  onSetWork={this.setWorkExp}

                  edu={edu}
                  onChangeEdu={this.onChangeEdu}
                  onSetEdu={this.setEduExp}

                  skills={skills}
                  onChangeSkills={this.onChangeSkills}
                  onSetSkills={this.setSkills}
                  
                  onSubmitCV={this.onSubmitCV}
                />        
    } else {
      display = <CVDisplay
                  onEditCV={this.onEditCV}

                  personName={personName}
                  phone={phone}
                  email={email}
                  address={address}

                  workExp={workExp}

                  edu={edu}

                  skills={skills}
                />              
    }

    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
