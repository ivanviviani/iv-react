import { bem } from '../../../utils/ComponentUtils';
import { Data } from './Data';
import Link from '../../atoms/link/Link';
import { separateJSXArrayReducer } from '../../../utils/Utils';
import { BULLET } from '../../../utils/Constants';
import './Footer.scss';
const cl = bem('s-footer');

function Footer() {
    return (
        <footer
            id="footer"
            className={cl()}
            aria-label="Footer"
        >
            <div>
                <p
                    className={cl('contact-links')}
                    aria-label="Contact links"
                >
                    {Data.contactLinks
                        ?.map((l, i) => (
                            <Link
                                {...l}
                                key={i}
                            />
                        ))
                        ?.reduce(separateJSXArrayReducer(BULLET))}
                </p>
                {Data.copyright && (
                    <p
                        className={cl('copyright')}
                        aria-label="Copyright"
                    >
                        {Data.copyright}
                    </p>
                )}
            </div>
        </footer>
    );
}

export default Footer;
