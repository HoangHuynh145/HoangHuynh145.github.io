import clsx from 'clsx'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

const Header = () => {

    const [icon, setIcon] = useState(faBars)
    const navbarRef = useRef()
    
    const handleClick = () => {
        navbarRef.current.classList.toggle('active')
        setIcon(icon === faBars ? faTimes : faBars)
    }

    return (
        <div className={clsx('header')} >
            <div id={clsx('menu-btn')} 
                onClick={handleClick}
            ><FontAwesomeIcon icon={icon}/></div>
            <a 
                href="#" 
                className='logo'
                data-aos="fade-up" 
                data-aos-delay="150" 
            ><i><FontAwesomeIcon icon={faPaperPlane} /></i>travel</a>
            <div className={clsx('navbar')} ref={navbarRef}>
                <a  data-aos="fade-up" 
                    data-aos-delay="300" 
                    href='#home'
                >Home</a>
                <a  data-aos="fade-up" 
                    data-aos-delay="450" 
                    href='#about'
                >About</a>
                <a  data-aos="fade-up" 
                    data-aos-delay="600" 
                    href='#destination'
                >Destination</a>
                <a  data-aos="fade-up" 
                    data-aos-delay="750" 
                    href='#services'
                >Services</a>
                <a  data-aos="fade-up" 
                    data-aos-delay="900" 
                    href='#gallery'
                >Gallery</a>
                <a  data-aos="fade-up" 
                    data-aos-delay="1050" 
                    href='#blogs'
                >Blog</a>
            </div>
            <a  data-aos="fade-up" 
                data-aos-delay="1200" 
                href='#' 
                className='btn'
            >book now</a>
        </div>
    )
}

export default Header