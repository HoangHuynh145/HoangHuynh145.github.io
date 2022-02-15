import clsx from "clsx";
import footerData from "./footerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } 
from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'

const Footer = () => {

    const [quickLinks, contacts] = footerData() 
    console.log(quickLinks);

    return (
        <section className={clsx('footer')}>
            <div className={clsx('box-container')}>
                <div 
                    className={clsx('box')}
                    data-aos="fade-right" 
                    data-aos-delay="150"
                >
                    <a href="#" className="logo">
                        <i><FontAwesomeIcon icon={faPaperPlane}/></i>
                        travel
                    </a>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Possimus Reiciendis Voluptate Enim Accusamus Deserunt.</p>
                    <div className={clsx('socials')}>
                        <a><FontAwesomeIcon icon={faFacebookF} className={clsx('icon')} /></a>
                        <a><FontAwesomeIcon icon={faTwitter} className={clsx('icon')} /></a>
                        <a><FontAwesomeIcon icon={faInstagram} className={clsx('icon')} /></a>
                        <a><FontAwesomeIcon icon={faLinkedin} className={clsx('icon')} /></a>
                    </div>
                </div>
                <div 
                    className={clsx('box')}
                    data-aos="fade-right" 
                    data-aos-delay="300"
                >
                    <h3>quick links</h3>
                    {quickLinks.map(quickLink => (
                        <a  href={`${quickLink.name}`} 
                            className={clsx('link')} 
                            key={quickLink.id}
                        >
                            <i><FontAwesomeIcon icon={faArrowRight}/></i>
                            {quickLink.name}
                        </a>
                    ))}
                </div>
                <div 
                    className={clsx('box')}
                    data-aos="fade-right" 
                    data-aos-delay="450"
                >
                    <h3>our address</h3>
                    {contacts.map(contact => (
                        <p 
                            className={clsx( contact.id === 3 && 'email')} 
                            key={contact.id}
                        >
                            <i>{contact.icon}</i>
                            {contact.title}
                        </p>
                    ))}
                </div>
                <div 
                    className={clsx('box')}
                    data-aos="fade-right" 
                    data-aos-delay="650"
                >
                    <h3>new letter</h3>
                    <span>subscribe for lastest updates</span>
                    <form>
                        <input type='email' placeholder="enter your email" />
                        <input type='submit' value='subscribe' className="btn"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Footer