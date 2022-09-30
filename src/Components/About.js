import React from 'react'
import Hero from './../Images/Hero.jpeg'

const About = () => {
  return (
    <>
    {/* About section */}
        <section class="about" id="about">
    <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div class="row">

    <div class="image">
        <img draggable="false" class="tilt" src={Hero} alt=""></img>
           </div>
    <div class="content">
        <h3>I'm Prasad</h3>
        <span class="tag">Full Stack Developer</span>
        
        <p>I am a Full-Stack developer based in Pune, India. 
          I am an Bachelor of Computer Applications graduate from SPPU.
          I am very passionate about improving my coding skills & developing applications & websites.
          I build WebApps and Websites using React.Js and React Native.
          Working for myself to improve my skills.
          Love to build Full-Stack clones. </p>
        
        <div class="box-container">
            <div class="box">
              <p><span> age: </span> 22</p>
              <p><span> phone : </span> +91 9518751324</p>
            </div>
            <div class="box">
              <p><span> email : </span> prasadranjane97@gmail.com</p>
              <p><span> place : </span> Pune, India - 411046</p>
            </div>
        </div>
        
        <div class="resumebtn">
            <a href="#" class="btn"><span>Resume</span>
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
    </div>
</section>
    </>
  )
}

export default About