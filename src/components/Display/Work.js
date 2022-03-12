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
                  <h3>{work.company}</h3>
                  <p>{work.role}</p>
                  <p>{work.start} - {work.end}</p>
                  <p>{work.description}</p>
                </div>
              );
          })}
        </div>
    )
  }
}

export default Work;