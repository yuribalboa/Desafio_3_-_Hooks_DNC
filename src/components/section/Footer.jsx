import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"


function Footer(){
    return(
        <div className={styles.footer} id='Footer'>

            <ul>
                <li><a href='https://www.instagram.com/yurineudine/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/yuribalboa'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/yuri-neudine-tropeia/'><FaLinkedin size={30}/></a></li>
            </ul>

            <p>Copyright &copy;2024 All rights reserved</p>
        </div>
    )
}

export default Footer