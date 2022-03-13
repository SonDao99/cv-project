import React, {Component} from 'react';

class Personal extends Component {
  render() {
    return (
        <div className='personal'>
          <h1>{this.props.personName.toUpperCase()}</h1>

          <div>
            <p><strong>Phone:</strong> {this.props.phone}</p>
            <p><strong>E-mail:</strong> {this.props.email}</p>
            <p><strong>Address:</strong> {this.props.address}</p>
          </div>
          
        </div>
    )
  }
}

export default Personal;