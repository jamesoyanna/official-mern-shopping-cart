import './Sidedraw.css';
import { Link } from 'react-router-dom';

const Sidedraw = ({show, click}) => {
    const sideDrrawerClass = ['sidedrawer'];

    if(show){
        sideDrrawerClass.push('show');
    }
    return (
        <div className={sideDrrawerClass.join(' ')}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart <span className="sidedrawer__cartbadge">0</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
            
        </div>
    );
}

export default Sidedraw;
