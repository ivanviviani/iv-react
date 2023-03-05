import { bem } from '../../../utils/ComponentUtils';
import './Footer.scss';
import { Data } from './Data';
const cl = bem('s-footer');

function Footer() {
    return (
        <footer
            id="footer"
            className={cl()}
        >
            <div>
                {Data.copyright && (
                    <p className={cl('copyright')}>{Data.copyright}</p>
                )}
            </div>
        </footer>
    );
}

export default Footer;
