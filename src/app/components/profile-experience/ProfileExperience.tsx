import { bem } from '../../../utils/ComponentUtils';
import {
    getDurationYearsMonths,
    sanitizeHTML,
    separateJSXArrayReducer,
} from '../../../utils/Utils';
import Image, { ImageProps } from '../../atoms/image/Image';
import Link, { LinkProps } from '../../atoms/link/Link';
import Time, { TimeProps } from '../../atoms/time/Time';
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
                        labels={Data.labels}
                        key={i}
                    />
                ))}
            </ul>
        </article>
    );
}

function ProfileExperienceItem({
    company,
    title,
    period,
    place,
    description,
    labels = {
        workPeriod: 'Work period:',
        workDuration: 'Work duration',
    },
}: {
    company: {
        name: string;
        link: LinkProps;
        image: ImageProps;
    };
    title: string;
    period: TimeProps[];
    place: {
        text: string;
        link: LinkProps;
    };
    description: string;
    labels: {
        workPeriod?: string;
        workDuration?: string;
    };
}) {
    const periodExtremes = [period[0], period[1]];
    const stringExtremes =
        typeof period[0].dateTime === 'string' &&
        typeof period[1].dateTime === 'string';

    const timeDuration = stringExtremes
        ? getDurationYearsMonths(
              new Date(period[0].dateTime as string),
              new Date(period[1].dateTime as string)
          )
        : undefined;
    const durationText = !timeDuration
        ? ''
        : `${timeDuration.years > 0 ? timeDuration.years + ' years' : ''}`
              .concat(
                  `${
                      timeDuration.years > 0 && timeDuration.months > 0
                          ? ' and '
                          : ''
                  }`
              )
              .concat(
                  `${
                      timeDuration.years > 0 && timeDuration.months > 0
                          ? timeDuration.months + ' months'
                          : 'months'
                  }`
              );

    return (
        <li className={cl('item')}>
            <div>
                <Link
                    {...company.link}
                    title={company.name}
                >
                    <Image {...company.image} />
                </Link>
                <div>
                    <h4 className={cl('item-title')}>{title}</h4>
                    <p className={cl('item-company')}>
                        <Link
                            {...company.link}
                            label={company.name}
                        />
                    </p>
                    {periodExtremes && (
                        <p>
                            <span className="sr-only">{labels.workPeriod}</span>
                            {periodExtremes
                                .map((t) => <Time {...t} />)
                                .reduce(separateJSXArrayReducer('-'))}
                        </p>
                    )}
                    {timeDuration && durationText && (
                        <p>
                            <span className="sr-only">
                                {labels.workDuration}
                            </span>
                            <Time
                                {...{
                                    dateTime: timeDuration,
                                    text: durationText,
                                }}
                            />
                        </p>
                    )}
                    <p className={cl('item-place')}>
                        <Link
                            {...place.link}
                            label={place.text}
                        />{' '}
                        🌍
                    </p>
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
