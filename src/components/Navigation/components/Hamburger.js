import MenuIcon from './assets/menu.svg';
import './nav-items.scss';

const Hamburger = (props) => {
    return (
        <button className="nav-hamburger" onClick={props.onClick}>
            <img src={MenuIcon} alt="hamburger" />
        </button>
    )
}

export default Hamburger;