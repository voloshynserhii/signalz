import './buttons.scss';

const SwitchButton = (props) => {
    return (
        <div className="switch-button">
            <div className="inner-switch"><span>{props.children}</span></div>
        </div>
    )
}
export default SwitchButton;