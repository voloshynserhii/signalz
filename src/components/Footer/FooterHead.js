
import Logo from '../Navigation/components/Logo';
import NavMenu from '../Navigation/components/NavMenu';
import './footer.scss';

const FooterHead = () => {
    return (
        <div className="flex-between-center">
            <Logo path="/"/>
            <NavMenu />
        </div>
    )
}
export default FooterHead;