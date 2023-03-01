import { bem } from '../../../utils/ComponentUtils';
import Image from '../../atoms/Image/Image';
import Link from '../../atoms/Link/Link';
import { Data } from './Data';
import './ProfileHeader.scss';
const cl = bem('c-profile-header');
const enrichedImages = [
    { ...Data.coverImage, className: cl('cover-image') },
    {
        ...Data.profilePicture,
        className: cl('profile-picture'),
    },
];

function ProfileHeader() {
    return (
        <article className={cl()}>
            <div className={cl('header')}>
                {enrichedImages?.map((i) => (
                    <Image {...i} />
                ))}
            </div>
            <div className={cl('bio')}>
                <h1>{Data.bio.title}</h1>
                <h2>{Data.bio.bio}</h2>
                <p>{Data.bio.place}</p>
            </div>
            <div className={cl('contact-links')}>
                {Data.contactLinksIntro && (
                    <span>{Data.contactLinksIntro}</span>
                )}
                {Data.contactLinks?.map((l, i, a) => {
                    return (
                        <>
                            <Link {...l} />
                            {i < a.length - 1 && <>&bull;</>}
                        </>
                    );
                })}
            </div>
        </article>
    );
}

export default ProfileHeader;
