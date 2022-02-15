import './Booking.scss'
import clsx from 'clsx'

const Booking = () => {
    return (
        <section 
            data-aos="zoom-in"
            data-aos-delay="150"
            className={clsx('booking-form')}
        >
            <form>
                <div 
                    data-aos="zoom-in-left" 
                    data-aos-delay="300"  
                    className={clsx('inputBox')}
                >
                    <span>where to?</span>
                    <input type='text' placeholder='place name' />
                </div>
                <div 
                    data-aos="zoom-in-left" 
                    data-aos-delay="450"  
                    className={clsx('inputBox')}
                >
                    <span>when?</span>
                    <input type='date' />
                </div>
                <div 
                    data-aos="zoom-in-left" 
                    data-aos-delay="600"  
                    className={clsx('inputBox')}
                >
                    <span>how many?</span>
                    <input type='number' placeholder='number' />
                </div>
                <input 
                    data-aos="zoom-in-left" 
                    data-aos-delay="650"  
                    type='submit' 
                    value='find now' 
                    className='btn' 
                />
            </form>
        </section>
    )
}

export default Booking