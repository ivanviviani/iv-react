import { bem } from '../../../utils/ComponentUtils';
import { sanitizeHTML } from '../../../utils/Utils';
import Image from '../../atoms/image/Image';
import { Data } from './Data';
import './ProfileExperience.scss';
const cl = bem('c-profile-experience');

function ProfileExperience() {
    return (
        <article className={cl()}>
            <h3>{Data.title}</h3>
            <ul role="list">
                {Data.experiences?.map((e, i) => (
                    <ProfileExperienceItem
                        {...e}
                        key={i}
                    />
                ))}
            </ul>
        </article>
    );
}

function ProfileExperienceItem({
    image,
    title,
    period,
    duration,
    place,
    description,
}: {
    index?: number;
    image: {
        src: string;
        alt: string;
    };
    title: string;
    period: string;
    duration: string;
    place: string;
    description: string;
}) {
    return (
        <li className={cl('item')}>
            <div>
                <Image {...image} />
                <div>
                    <h4 className={cl('item-title')}>{title}</h4>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: sanitizeHTML(period),
                        }}
                    ></p>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: sanitizeHTML(duration),
                        }}
                    ></p>
                    <p className={cl('item-place')}>{place}</p>
                </div>
            </div>
            <div
                className={cl('item-description')}
                dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(description),
                }}
            ></div>
        </li>
    );
}

export default ProfileExperience;
