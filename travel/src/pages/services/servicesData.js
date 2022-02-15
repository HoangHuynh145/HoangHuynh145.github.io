import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faPersonHiking, faUtensils, faHotel, faWallet, faHeadset } 
from "@fortawesome/free-solid-svg-icons"

const serviceDatas = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'wordwide',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quisquam!',
        aos: 150,
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faPersonHiking} />,
        title: 'adventures',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quisquam!',
        aos: 300,
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faUtensils} />,
        title: 'food & drink',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quisquam!',
        aos: 450,
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faHotel} />,
        title: 'affordable hotel',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quisquam!',
        aos: 600,
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faWallet} />,
        title: 'affordable price',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quisquam!',
        aos: 750,
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faHeadset} />,
        title: '24/7 service',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quisquam!',
        aos: 900,
    },
]

const servicesData = () => {
    return serviceDatas
}

export default servicesData