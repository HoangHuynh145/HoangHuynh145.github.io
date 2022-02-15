import './Services.scss'
import clsx from 'clsx'
import servicesData from './servicesData'

const Services = () => {

    const serviceDatas = servicesData()
    console.log(serviceDatas);
    return (
        <section className={clsx('services')} id="services">
            <div className='heading'>
                <span>our services</span>
                <h3>countless experience</h3>
            </div>
            <div className={clsx('box-container')}>
                {serviceDatas.map(serviceData => (
                    <div 
                        className={clsx('box')} 
                        key={serviceData.id}
                        data-aos="zoom-in" 
                        data-aos-delay={serviceData.aos}
                    >
                        <i>{serviceData.icon}</i>
                        <div className={clsx('content')}>
                            <h3>{serviceData.title}</h3>
                            <p>{serviceData.descriptions}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services