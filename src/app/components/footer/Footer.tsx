import { bem } from '../../../utils/ComponentUtils';
import './Footer.scss';
const cl = bem('s-footer');

function Footer() {
    return (
        <footer
            id="footer"
            className={cl()}
        >
            Copyright @ 2023
        </footer>
    );
}

export default Footer;
