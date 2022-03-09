import React, {Component} from 'react';

class Personal extends Component {
  render() {
    return (
        <div className='personal'>
          <h1>{this.props.personName}</h1>
          <p>{this.props.phone}</p>
          <p>{this.props.email}</p>
          <p>{this.props.address}</p>
        </div>
    )
  }
}

export default Personal;