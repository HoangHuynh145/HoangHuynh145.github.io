import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMap, faPhone, faEnvelope, faClock }
    from '@fortawesome/free-solid-svg-icons'

const quickLinks = [
    {
        id: 1,
        name: 'home',
    },
    {
        id: 2,
        name: 'about',
    },
    {
        id: 3,
        name: 'destination',
    },
    {
        id: 4,
        name: 'services',
    },
    {
        id: 5,
        name: 'gallery',
    },
    {
        id: 6,
        name: 'blogs',
    },
]

const contacts = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faMap} />,
        title: 'việt nam',
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faPhone} />,
        title: '0678910JQK',
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        title: 'hongbeoi@gmail.com',
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faClock} />,
        title: '7:00am - 10:00pm',
    },
]

const footerData = () => {
    return [quickLinks, contacts]
}

export default footerData