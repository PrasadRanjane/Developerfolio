import React from 'react'
import Hero from './../Images/Hero.jpeg'
import h1 from './../Images/Hero2.jpg'
import h2 from './../Images/cmsoon.png'

const Main = () => {

    return (
        <div>

            {/* Main section starts her */}
            <section class="home" id="home">
                
                    <div id="particles-js"></div>

                    <div class="content">
                        <h2>Hi There,<br /> I'm Prasad <span>Ranjane</span></h2>
                        <p>i am <span class="typing-text">FrontEnd Developer.</span></p>
                        <a href="#about" class="btn"><span>About Me</span>
                            <i class="fas fa-arrow-circle-down"></i>
                        </a>
                        <div class="socials">
                            <ul class="social-icons">
                                <li><a class="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/prasadranjane32/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                <li><a class="github" aria-label="GitHub" href="https://github.com/PrasadRanjane" target="_blank"><i class="fab fa-github"></i></a></li>
                                <li><a class="twitter" aria-label="Twitter" href="https://twitter.com/prasadranjane32?t=436cohsDyCorqOQYT-AUJg&s=08" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a class="whatsapp" aria-label="Whatsapp" href="http://wa.me/919518751324?text=Hi+my+Name+is " target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                                {/* <li><a class="telegram" aria-label="Telegram" href="#" target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
                                <li><a class="instagram" aria-label="Instagram" href="#"><i class="fab fa-instagram" target="_blank"></i></a></li>
                                <li><a class="dev" aria-label="Dev" href="#" target="_blank"><i class="fab fa-dev"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="image">
                        {/* <img draggable="false" className='tilt' src={Hero} alt='Profile Pic'></img> */}
                        <img draggable="false" className='tilt' src={h2} alt='Profile Pic'></img>
                    </div>
                
            </section>
        </div>
    )
}

export default Main