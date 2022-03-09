import React, {Component} from 'react';

class PersonalForm extends Component {
  render() {
    const {onChangePersonal, personName, phone, email, address} = this.props;

    return(
      <div className="personal">
        <label htmlFor="personName">Name:</label>
        <input onChange={onChangePersonal} type="text" id="personName" value={personName}></input>

        <label htmlFor="phone">Phone Number:</label>
        <input onChange={onChangePersonal} type="text" id="phone" value={phone}></input>

        <label htmlFor="email">Email</label>
        <input onChange={onChangePersonal} type="text" id="email" value={email}></input>

        <label htmlFor="address">Address</label>
        <input onChange={onChangePersonal} type="text" id="address" value={address}></input>
      </div>
    )
  }
  }
  
  export default PersonalForm;