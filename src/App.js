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
      workExp: [],
      edu: [],
      skills: [],
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

  onEditCV = (e) => {
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
    //
  }

  render() {
    const {personName, phone, email, address, workExp} = this.state;

    let {mode} = this.state;

    let display;
    if (mode === 'edit') {
      display = <CVForm
                  onChangePersonal={this.onChangePersonal}
                  onChangeWork={this.onChangeWork}
                  onSubmitCV={this.onSubmitCV}
                  personName={personName}
                  phone={phone}
                  email={email}
                  address={address}
                  workExp={workExp}
                />
    } else {
      display = <div>
                  <CVDisplay
                    onEditCV={this.onEditCV}
                    personName={personName}
                    phone={phone}
                    email={email}
                    address={address}
                    workExp={workExp}
                  />
                </div>
    }

    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
