import './Home.scss'
import clsx from 'clsx'
import '../_variables.scss'

const Home = () => {
    const style = {
        background: 'linear-gradient(rgba(17,17,17, .7), rgba(17,17,17, .7)), url(image/home-bg.jpg) center/cover no-repeat'
    }
    return (
        <section className={clsx('home')} style={style} id="home">
            <div className={clsx('content')}>
                <span data-aos="fade-up" data-aos-delay="150" 
                >follow us</span>
                <h3 data-aos="fade-up" data-aos-delay="300" 
                >to the unkown</h3>
                <p data-aos="fade-up" data-aos-delay="450" 
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod at ex obcaecati consequuntur porro dolor
                voluptates ipsam ipsum in impedit.</p>
                <a  data-aos="fade-up" 
                    data-aos-delay="400" 
                    href='#' 
                    className='btn'
                >book now</a>
            </div>
        </section>
    )
}

export default Home