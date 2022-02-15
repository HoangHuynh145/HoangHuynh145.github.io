import clsx from 'clsx';
import "./Credit.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Credit = () => {
    return (
        <div className={clsx('credit')}>
            re-make by <span>hoang onlyfns</span> :3
            <div className={clsx('powered')}>
                <span> 
                    <i><FontAwesomeIcon icon={faReact} size="lg"/></i> 
                    powered by <a href='https://reactjs.org/'>react</a>
                </span>
            </div>
        </div>
    )
}

export default Credit