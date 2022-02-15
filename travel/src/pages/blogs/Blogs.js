import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import './Blogs.scss'
import BlogData from './BlogData'

const Blog = () => {

    const blogs = BlogData()
    
    return (
        <section className={clsx('blogs')} id="blogs">
            <div className='heading'>
                <span>blogs & post</span>
                <h3>the untold stories</h3>
            </div>
            <div className={clsx('box-container')}>
                {blogs.map(blog => (
                    <div 
                        className={clsx('box')} 
                        key={blog.id}
                        data-aos="zoom-in-up" 
                        data-aos-delay={blog.aos}
                    >
                        <div className={clsx('image')}>
                            <img src={blog.img}/>
                        </div>
                        <div className={clsx('content')}>
                            <a href='#' className={clsx('link')}>{blog.title}</a>
                            <p>{blog.descriptions}</p>
                            <div className={clsx('icon')}>
                                <a href='#'>
                                    <i><FontAwesomeIcon icon={faClock} /></i>
                                    {blog.time}
                                </a>
                                <a href='#'>
                                    <i><FontAwesomeIcon icon={faUser} /></i>
                                    by admin
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog