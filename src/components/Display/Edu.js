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
                  <h3>{exp.school}</h3>
                  <p>{exp.degree}</p>
                  <p>{exp.start} - {exp.end}</p>
                  <p>{exp.description}</p>
                </div>
              );
          })}
        </div>
    )
  }
}

export default Edu;