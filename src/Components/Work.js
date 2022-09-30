import React, { useState } from 'react'
import WorkD from './../API/Works.json'


const Work = () => {
    const [PData, SetWorkData] = useState(WorkD);
    return (
        <>
            <section class="work" id="work">

                <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

                <div class="box-container">

                    
                        {PData.map((Pwork) => {
                            const { id, Pname, Description, imgs, Code } = Pwork;
                            return (
                                <>
                                <div class="box tilt">
                                    <img draggable="false" src={Pwork.imgs} alt="" />
                                    <div class="content">
                                        <div class="tag">
                                            <h3>{Pwork.Pname}</h3>
                                        </div>
                                        <div class="desc">
                                            <p>{Pwork.Description}</p>
                                            <div class="btns">
                                                <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                                                <a href={Pwork.Code} class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </>
                            )
                        })}
                   

                </div>

                <div class="viewall">
                    <a href="#" class="btn"><span>View All</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

            </section>
        </>
    )
}

export default Work