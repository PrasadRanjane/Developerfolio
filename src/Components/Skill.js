import React, { useState } from 'react'
import skills from './../API/skills.json'

const Skill = () => {
    const [sname, setSname] = useState(skills);
    return (
        <>
            <section class="skills" id="skills">

                <h2 class="heading"><i class="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

                <div class="container">
                    <div class="row" id="skillsContainer">




                        {sname.map((curElem) => {
                            const { id, name, icon } = curElem;
                            return (
                                <>
                                    <div class="bar">
                                        <div class="info">
                                            <img src={icon}></img>
                                            <span>{name}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                        



                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill