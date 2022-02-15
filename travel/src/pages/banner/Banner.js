import clsx from "clsx";
import './Banner.scss';

const Banner = () => {

    const style = {
        background: 'linear-gradient(rgba(17,17,17, .7), rgba(17,17,17, .7)), url(image/banner-bg.jpg) center/cover no-repeat',
        backgroundAttachment: "fixed"
    }
    
    return (
        <div className={clsx('banner')} style={style}>
            <span data-aos="fade-up" data-aos-delay="150">
                starts your adventure
            </span>
            <h3 data-aos="fade-up" data-aos-delay="300">
                let's explore this world
            </h3>
            <p data-aos="fade-up" data-aos-delay="450">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis Omnis, Consectetur Nemo Suscipit A Sed Molestias Reprehenderit. Voluptates Commodi Est Quisquam Nobis Perferendis Quis Deserunt Omnis Ea Modi! Minima, Saepe!
            </p>
            <a 
                href="#" 
                className="btn"
                data-aos="fade-up" 
                data-aos-delay="600"
            >book now</a>
        </div>
    )
}

export default Banner