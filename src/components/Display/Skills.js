import React, {Component} from 'react';

class Skills extends Component {
  render() {
    const {skills} = this.props;
    return (
        <div className='skills'>
          <h2>Skills</h2>

          <div className='allSkillItems'>
            {skills.map((skill) => {
                return(
                    <div key={skill.id} className='skillItem'>
                    <p>•{skill.value}</p>
                    </div>
                );
            })}
          </div>
          
        </div>
    )
  }
}

export default Skills;