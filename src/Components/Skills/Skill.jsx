import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Skill.css';
const Skill = () => {
  return (
    <section id='skills'>
        <h5>The Skill I Have</h5>
        <div className='container skill_container'>
            <div className="skill_frontend">
                <h3>FrontEnd Development</h3>
                <div className='skill_content'>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>HTML and CSS</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>BOOSTRAP</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>REACTJS</h4>
                        </div>
                    </article>
                </div>
            </div>
            <div className="skill_frontend">
                <h3>BaclEnd Development</h3>
                <div className='skill_content'>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>MOONGODB</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>EXPRESS js</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>NODE js</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>Backend logics</h4>
                        </div>
                    </article>
                </div>
            </div>
            <div className="skill_language">
                <h3>Programming Langauge</h3>
                <div className='skill_content'>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>c programming</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>c++ programming</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>php programming</h4>
                        </div>
                    </article>
                    <article className='skill_details'>
                        <BsFillPatchCheckFill className='skill_icon'/>
                        <div>
                            <h4>Database MYSQL</h4>
                        </div>
                    </article>
                    
                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Skill