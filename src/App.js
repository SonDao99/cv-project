import React, { Component } from "react";
import CVForm from './components/Form/CVForm';
import CVDisplay from './components/Display/CVDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'edit',
      personName: '',
      phone: '',
      email: '',
      address: '',
      workExp: [{
        company: '',
        role: '',
        start: '',
        end: '',
        description: '',
        id: 0,
      }],
      edu: [],
      skills: [],
      inputValue: {},
    }

    this.onSubmitCV = this.onSubmitCV.bind(this);
    this.onEditCV = this.onEditCV.bind(this);
  }

  setWorkExp = (newWorkExp) => {
    this.setState({
      workExp: newWorkExp
    });
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

  render() {
    const {personName, phone, email, address, workExp} = this.state;

    let {mode} = this.state;

    let display;
    if (mode === 'edit') {
      display = <CVForm
                  onChangePersonal={this.onChangePersonal}
                  onChangeWork={this.onChangeWork}
                  onSetWork={this.setWorkExp}
                  onSubmitCV={this.onSubmitCV}
                  personName={personName}
                  phone={phone}
                  email={email}
                  address={address}
                  workExp={workExp}
                />        
    } else {
      display = <CVDisplay
                  onEditCV={this.onEditCV}
                  personName={personName}
                  phone={phone}
                  email={email}
                  address={address}
                  workExp={workExp}
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
