import React from 'react'
import Yash from '../Components/Assests/Us.jpeg'
import './CSS/About.css'
import lnkdn from '../Components/Assests/lnkdn.png'
import x from '../Components/Assests/x.png'
import insta from '../Components/Assests/insta.png'
import mail from '../Components/Assests/mail.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-contaier">

            <div className="about-left">
                <img src={Yash} alt="" />
            </div>
            <div className="about-right">
                <h2>About Me</h2>
                <p>Hello, we are Yashoda Gunawardhana & Sachini Disanayaka a third-year undergraduate students pursuing a Bachelor of Science in Engineering at the Faculty of Engineering, University of Ruhuna. Our major is in Computer Engineering, where we are deeply immersed in both theoretical and practical aspects of the field</p>
                <p>Throughout my academic journey, I have developed a keen interest in various domains of computer engineering, including software development, data analysis, and particularly, cybersecurity. I am passionate about leveraging technology to solve real-world problems and continuously seek opportunities to expand my knowledge and skills.</p>
                <p>In addition to our coursework, I actively engage in extracurricular activities and projects that enhance my understanding and application of engineering principles. we enjoy collaborating with peers on innovative projects and participating in competitions that challenge our problem-solving abilities.Looking ahead, we are excited about the potential to contribute to advancements in technology and to develop solutions that have a meaningful impact on society. We are eager to gain hands-on experience through internships and research opportunities, and to connect with professionals in the field to further our growth and career aspirations.</p>
                <a href="https://www.linkedin.com/in/yashodha-gunawardhana-217082219/"><img src={lnkdn} alt=""  />    </a>                
                <a href="mailto:ikykgunawardhana@gmail.com"><img src={mail} alt="" /></a>
                <a href=""><img src={x} alt="" /></a>

                
                
                
            </div>
        
        </div>
    </div>
  )
}

export default About