import { bem } from '../../../utils/ComponentUtils';
import { Data } from './Data';
import './SkipLinks.scss';
const cl = bem('c-skip-links');

function SkipLinks() {
    return (
        <nav
            className={cl()}
            aria-label="Skip links"
        >
            {Data.skipLinks.map((sl, i) => (
                <a
                    className={`${cl('link')} sr-only sr-only-focusable`}
                    href={sl.href}
                    title={sl.title || sl.label}
                    key={i}
                >
                    {sl.label}
                </a>
            ))}
        </nav>
    );
}

export default SkipLinks;
