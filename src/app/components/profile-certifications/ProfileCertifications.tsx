import { bem } from '../../../utils/ComponentUtils';
import Image from '../../atoms/image/Image';
import Link from '../../atoms/link/Link';
import Time, { TimeProps } from '../../atoms/time/Time';
import { Data } from './Data';
import './ProfileCertifications.scss';
const cl = bem('c-profile-certifications');

function ProfileCertifications() {
    return (
        <article
            id="certifications"
            className={cl()}
            aria-label="Certifications"
        >
            <h3>{Data.title}</h3>
            <ul
                role="list"
                aria-label="Certifications list"
            >
                {Data.certifications?.map((e, i) => (
                    <ProfileCertificationItem
                        {...e}
                        labels={Data.labels}
                        key={i}
                    />
                ))}
            </ul>
        </article>
    );
}

function ProfileCertificationItem({
    image,
    title,
    issuer,
    releaseDate,
    expirationDate,
    link,
    labels = {
        released: 'Released:',
        expires: 'Expires:',
        viewIssuer: 'View issuer',
        viewCredential: 'View credental',
        never: 'Never',
    },
}: {
    image: {
        src: string;
        alt: string;
    };
    title: string;
    issuer: Issuer;
    releaseDate: TimeProps;
    expirationDate?: TimeProps | null;
    link: {
        href: string;
        target?: string;
        title?: string;
    };
    labels: Labels;
}) {
    const imageLinkProps = {
        ...issuer.link,
        title: labels.viewIssuer,
    };
    const imageProps = {
        ...image,
    };
    const issuerProps = {
        issuer,
        labels,
    };
    const releaseDateProps = {
        dateTime: releaseDate,
        label: labels.released,
        labels,
    };
    const expirationDateProps = {
        dateTime: expirationDate,
        label: labels.expires,
        labels,
    };
    const viewCredentialProps = {
        className: cl('item-view-credential'),
        ...link,
        label: labels.viewCredential,
        title: labels.viewCredential,
    };

    return (
        <li className={cl('item')}>
            <Link {...imageLinkProps}>
                <Image {...imageProps} />
            </Link>
            <div>
                <h4 className={cl('item-title')}>{title}</h4>
                <ProfileCertificationIssuer {...issuerProps} />
                <ProfileCertificationDate {...releaseDateProps} />
                <ProfileCertificationDate {...expirationDateProps} />
                <Link {...viewCredentialProps} />
            </div>
        </li>
    );
}

function ProfileCertificationIssuer({
    issuer,
    labels,
}: {
    issuer: Issuer;
    labels: Labels;
}) {
    const linkProps = {
        ...issuer.link,
        label: issuer.name,
        title: labels.viewIssuer,
        className: cl('item-issuer'),
    };

    return <Link {...linkProps} />;
}

function ProfileCertificationDate({
    className,
    dateTime,
    label,
    labels,
}: {
    className?: string | null;
    dateTime?: TimeProps | null;
    label: string;
    labels: Labels;
}) {
    return (
        <p {...(className ? { className } : {})}>
            {label} {!!dateTime ? <Time {...dateTime} /> : labels.never}
        </p>
    );
}

interface Issuer {
    name: string;
    link: {
        href: string;
        target?: string;
    };
}

interface Labels {
    released: string;
    expires: string;
    viewIssuer: string;
    viewCredential: string;
    never: string;
}

export default ProfileCertifications;
