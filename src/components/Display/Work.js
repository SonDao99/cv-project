import React, {Component} from 'react';

class Work extends Component {
  render() {
    const {workExp} = this.props;
    return (
        <div className='workExperience'>
          <h2>Work Experience</h2>
          {workExp.map((work) => {
              return(
                <div key={work.id} className='experience'>
                  <div className='placeAndDates'>
                    <h3>{work.company}</h3>
                    <p>{work.start} - {work.end}</p>
                  </div>
                  
                  <p><strong>{work.role}</strong></p>
                  <p>{work.description}</p>
                </div>
              );
          })}
        </div>
    )
  }
}

export default Work;