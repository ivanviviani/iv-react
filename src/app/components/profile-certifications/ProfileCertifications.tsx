import { bem } from '../../../utils/ComponentUtils';
import { sanitizeHTML } from '../../../utils/Utils';
import Image from '../../atoms/image/Image';
import Link from '../../atoms/link/Link';
import { Data } from './Data';
import './ProfileCertifications.scss';
const cl = bem('c-profile-certifications');

function ProfileCertifications() {
    return (
        <article className={cl()}>
            <h3>{Data.title}</h3>
            <ul role="list">
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
    releaseDate: string;
    expirationDate?: string | null;
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
        className: cl('item-image'),
        ...image,
    };
    const issuerProps = {
        issuer,
        labels,
    };
    const releaseDateProps = {
        className: cl('item-date'),
        htmlDate: releaseDate,
        label: labels.released,
        labels,
    };
    const expirationDateProps = {
        className: cl('item-date'),
        htmlDate: expirationDate,
        label: labels.expires,
        labels,
    };
    const viewCredentialProps = {
        className: cl('item-view-credential'),
        ...link,
        label: labels.viewCredential,
    };

    return (
        <li className={cl('item')}>
            <div>
                <Link {...imageLinkProps}>
                    <Image {...imageProps} />
                </Link>
                <div>
                    <h4>{title}</h4>
                    <ProfileCertificationIssuer {...issuerProps} />
                    <ProfileCertificationDate {...releaseDateProps} />
                    <ProfileCertificationDate {...expirationDateProps} />
                    <Link {...viewCredentialProps} />
                </div>
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
    };

    return (
        <p className={cl('item-issuer')}>
            <Link {...linkProps} />
        </p>
    );
}

function ProfileCertificationDate({
    className,
    htmlDate,
    label,
    labels,
}: {
    className?: string | null;
    htmlDate?: string | null;
    label: string;
    labels: Labels;
}) {
    return (
        <p {...(className ? { className } : {})}>
            {label}{' '}
            {htmlDate && (
                <span
                    dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(htmlDate),
                    }}
                ></span>
            )}
            {!htmlDate && labels.never}
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
