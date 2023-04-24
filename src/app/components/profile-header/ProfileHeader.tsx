import { bem } from '../../../utils/ComponentUtils';
import { BULLET } from '../../../utils/Constants';
import { separateJSXArrayReducer } from '../../../utils/Utils';
import Link from '../../atoms/link/Link';
import Picture from '../../atoms/picture/Picture';
import NyanFestival from '../nyan-festival/NyanFestival';
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

function ProfileHeader(props: { withNyanFestival?: boolean }) {
    return (
        <article
            className={cl()}
            aria-label="Profile header"
        >
            <div
                className={cl('header')}
                aria-label="Cover image and profile picture"
            >
                {enrichedImages?.map((image, i) => (
                    <Picture
                        {...image}
                        key={i}
                    />
                ))}
            </div>
            {props.withNyanFestival && (
                <div className={cl('nyan-festival')}>
                    <NyanFestival />
                </div>
            )}
            <div
                id="bio"
                className={cl('bio')}
                aria-label="Bio"
            >
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
            <address
                id="contacts"
                className={cl('contact-links')}
                aria-label="Contact links"
            >
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
