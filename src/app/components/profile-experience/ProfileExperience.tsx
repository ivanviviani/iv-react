import DOMPurify from 'dompurify';
import { bem } from '../../../utils/ComponentUtils';
import { Data } from './Data';
import './ProfileExperience.scss';
const cl = bem('c-profile-experience');

function ProfileExperience() {
    return (
        <article className={cl()}>
            <h3>Experience</h3>
            <ul>
                {Data.experiences.map((e) => (
                    <ProfileExperienceItem {...e} />
                ))}
            </ul>
        </article>
    );
}

function ProfileExperienceItem({
    image,
    title,
    period,
    place,
    description,
}: {
    image: {
        src: string;
        alt: string;
    };
    title: string;
    period: string;
    place: string;
    description: string;
}) {
    return (
        <li className={cl('item')}>
            <img {...image} />
            <div>
                <h4 className={cl('item-title')}>{title}</h4>
                <p className={cl('item-period')}>{period}</p>
                <p className={cl('item-place')}>{place}</p>
                <div
                    className={cl('item-description')}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(description),
                    }}
                ></div>
            </div>
        </li>
    );
}

export default ProfileExperience;
