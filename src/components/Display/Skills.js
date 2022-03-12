import React, {Component} from 'react';

class Skills extends Component {
  render() {
    const {skills} = this.props;
    return (
        <div className='allSkills'>
          <h2>Skills</h2>
          {skills.map((skill) => {
              return(
                <div key={skill.id} className='skillItem'>
                  <p>{skill.value}</p>
                </div>
              );
          })}
        </div>
    )
  }
}

export default Skills;