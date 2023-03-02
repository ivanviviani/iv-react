import { bem } from '../../../utils/ComponentUtils';
import Image from '../../atoms/image/Image';
import Link from '../../atoms/link/Link';
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
                {enrichedImages?.map((image, i) => (
                    <Image
                        {...image}
                        key={i}
                    />
                ))}
            </div>
            <div className={cl('bio')}>
                <h1>{Data.bio.title}</h1>
                <h2>{Data.bio.bio}</h2>
                <p>{Data.bio.place}</p>
            </div>
            <address className={cl('contact-links')}>
                {Data.contactLinksIntro && (
                    <span>{Data.contactLinksIntro}</span>
                )}
                {Data.contactLinks?.map((l, i, a) => {
                    return (
                        <Link
                            {...l}
                            bulletAfter={i < a.length - 1}
                            key={i}
                        />
                    );
                })}
            </address>
        </article>
    );
}

export default ProfileHeader;
