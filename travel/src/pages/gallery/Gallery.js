import clsx from 'clsx'
import './Gallery.scss'
import galleryData from './galleryData'


const Gallery = () => {

    const images = galleryData()

    return (
        <section className={clsx('gallery')} id="gallery">
            <div className={clsx('heading')}>
                <span>our gallery</span>
                <h3>we record memories</h3>
            </div>
            <div className={clsx('box-container')}>
                {images.map(image => (
                    <div 
                        className={clsx('box')} 
                        key={image.id}
                        data-aos="zoom-in-up" 
                        data-aos-delay={image.aos}
                    >
                        <img src={image.img} />
                        <span>{image.descriptions}</span>
                        <h3>{image.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery