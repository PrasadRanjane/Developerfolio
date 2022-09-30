import React, { useState } from 'react'
import Edu from './../API/Educations.json'
import pic from './../Images/sarhad-logo.jpg'

const Education = () => {
    const [Cname, setCname] = useState(Edu);
    return (
        <>
            <section class="education" id="education">

                <h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>

                <p class="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

                <div class="box-container">
                    {Cname.map((eduElem) => {
                        const { id,Stream , name, imgs ,Year } = eduElem;
                        return (
                            <>
                                <div class="box">
                                    <div class="image">
                                        <img draggable="false" src={imgs} alt=""></img>
                                    </div>
                                    <div class="content">
                                        <h3>{Stream}</h3>
                                        <p>{name}</p>
                                        <h4>{Year}</h4>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </section>
        </>
    )
}

export default Education