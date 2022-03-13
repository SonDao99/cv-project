import React, {Component} from 'react';

class Edu extends Component {
  render() {
    const {edu} = this.props;
    return (
        <div className='workExperience'>
          <h2>Education</h2>
          {edu.map((exp) => {
              return(
                <div key={exp.id} className='experience'>
                  <div className='placeAndDates'>
                    <h3>{exp.school}</h3>
                    <p>{exp.start} - {exp.end}</p>
                  </div>
                  
                  <p><strong>{exp.degree}</strong></p>
                  <p>{exp.description}</p>
                </div>
              );
          })}
        </div>
    )
  }
}

export default Edu;