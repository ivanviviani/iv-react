import { bem } from '../../../utils/ComponentUtils';
import { emojiFlag } from '../../../utils/Utils';
import { Data } from './Data';
import './ProfileLanguages.scss';
const cl = bem('c-profile-languages');

function ProfileLanguages() {
    return (
        <article
            id="languages"
            className={cl()}
            aria-label="Languages"
        >
            <h3>{Data.title}</h3>
            <ul
                role="list"
                aria-label="Languages list"
            >
                {Data.languages?.map((l, i) => (
                    <ProfileLanguageItem
                        {...l}
                        key={i}
                    />
                ))}
            </ul>
        </article>
    );
}

function ProfileLanguageItem({
    countryCode,
    label,
    description,
}: {
    countryCode?: string;
    label: string;
    description?: string;
}) {
    const flag = countryCode && emojiFlag(countryCode);
    return (
        <li className={cl('item')}>
            <h4>
                {label}{' '}
                {flag && (
                    <>
                        (<span title={flag.title}>{flag.emoji}</span>)
                    </>
                )}
            </h4>
            {description && <p>{description}</p>}
        </li>
    );
}

export default ProfileLanguages;
