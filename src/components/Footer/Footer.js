
import FooterHead from './FooterHead';
import FooterBottom from './FooterBottom';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <FooterHead />
            <hr/>
            <FooterBottom />
        </div>
    )
}
export default Footer;