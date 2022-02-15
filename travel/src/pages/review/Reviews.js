import clsx from "clsx";
import userData from "./userData";
import './Review.scss'

const Reviews = () => {
    const users = userData()
    return (
        <section className={clsx('review')}>
            <div className={clsx('content')}>
                <span>testimonials</span>
                <h3>good news from our clinets</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum voluptatibus harum delectus
                reprehenderit doloremque quae culpa vel numquam. Id adipisci quam ea enim cum, deserunt quidem. Illo,
                aut corrupti.</p>
            </div>
            <div className={clsx('box-container')}>
                {users.map(user => (
                    <div 
                        className={clsx('box')} 
                        key={user.id}
                        data-aos="fade-up" 
                        data-aos-delay={user.aos}
                    >
                        <p>{user.descriptions}</p>
                        <div className={clsx('user')}>
                            <img src={user.avatar} />
                            <div className={clsx('info')}>
                                <h3>{user.name}</h3>
                                <span>{user.job}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews