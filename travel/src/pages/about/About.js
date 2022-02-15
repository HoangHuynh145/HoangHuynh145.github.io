import clsx from 'clsx'
import './About.scss'
import aboutData from './aboutData'
import { useState } from 'react'

const About = () => {

    const [count, setCount] = useState(1)
    const videos = aboutData()
    // console.log(videos);

    return (
        <section className={clsx('about')} id="about">
            <div 
                className={clsx('video-container')} 
                data-aos="fade-right" 
                data-aos-delay="300" 
            >
                {videos.map(video => (
                    <video
                        src={video.video}
                        muted autoPlay loop
                        className={clsx('video', count === video.id && 'active')}
                        key={video.id}
                    />
                ))}
                <span></span>
                <div className={clsx('control')}>
                    {videos.map(video => (
                        <span 
                            className={clsx('control-btn', count === video.id && 'active')}
                            key={video.id}
                            onClick={() => setCount(video.id)}
                        />
                    ))}
                </div>
            </div>
            <div 
                className={clsx('content')}
                data-aos="fade-right" 
                data-aos-delay="600" 
            >
                <span>why choose us?</span>
                <h3>nature's majesty awaits you</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste corporis cum amet ullam quidem vero in ad!
                    Beatae, eligendi sapiente!</p>
                <a href='#' className='btn'>read more</a>
            </div>
        </section>
    )
}

export default About

