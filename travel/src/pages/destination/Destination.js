import clsx from 'clsx'
import './Destination.scss'
import destinationData from './destinationData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Destination = () => {

    const destinations = destinationData()

    return (
        <section className={clsx('destination')} id="destination">
            <div className={clsx('heading')}>
                <span>our destination</span>
                <h3>make your destination</h3>
            </div>
            <div className={clsx('box-container')}>
                {destinations.map(destination => (
                    <div 
                        className={clsx('box')} 
                        key={destination.id}
                        data-aos="fade-up"
                        data-aos-delay={destination.aos}
                    >
                        <div className={clsx('image')}>
                            <img src={destination.img} alt="" />
                        </div>
                        <div className={clsx('content')}>
                            <h3>{destination.title}</h3>
                            <p>{destination.descriptions}</p>
                            <a href="#"> read more 
                                <i><FontAwesomeIcon icon={faAngleRight} /></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Destination