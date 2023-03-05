import { bem } from '../../../utils/ComponentUtils';
import { BULLET } from '../../../utils/Constants';
import { separateJSXArrayReducer } from '../../../utils/Utils';
import Link from '../../atoms/link/Link';
import Picture from '../../atoms/picture/Picture';
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
                    <Picture
                        {...image}
                        key={i}
                    />
                ))}
            </div>
            <div className={cl('bio')}>
                <h1>{Data.bio.title}</h1>
                <h2>{Data.bio.bio}</h2>
                <p>
                    <Link
                        {...Data.bio.place.link}
                        label={Data.bio.place.text}
                    />{' '}
                    🌍
                </p>
            </div>
            <address className={cl('contact-links')}>
                {Data.contactLinksIntro && (
                    <span>{Data.contactLinksIntro}</span>
                )}
                {Data.contactLinks
                    ?.map((l, i) => (
                        <Link
                            {...l}
                            key={i}
                        />
                    ))
                    ?.reduce(separateJSXArrayReducer(BULLET))}
            </address>
        </article>
    );
}

export default ProfileHeader;
