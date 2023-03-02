import { uh } from '../../../utils/ComponentUtils';

export const Data = {
    title: 'Certifications',
    certifications: [
        {
            image: {
                src: uh(500),
                alt: 'Adobe logo',
            },
            title: 'Adobe Certified Expert - Adobe Experience Manager Sites Developer',
            issuer: {
                name: 'Adobe',
                link: {
                    href: '#',
                    target: '_blank',
                },
            },
            releaseDate: `<time datetime="2022-05-31">May 2022</time>`,
            expirationDate: `<time datetime="2024-05-31">May 2024</time>`,
            link: {
                href: '#',
                target: '_blank',
            },
        },
        {
            image: {
                src: uh(500),
                alt: 'University of Padua logo',
            },
            title: 'Laurea Magistrale in Ingegneria Informatica',
            issuer: {
                name: 'Università degli Studi di Padova',
                link: {
                    href: '#',
                    target: '_blank',
                },
            },
            releaseDate: `<time datetime="2022-10">October 2020</time>`,
            expirationDate: null,
            link: {
                href: '#',
                target: '_blank',
            },
        },
    ],
    labels: {
        released: 'Released:',
        expires: 'Expires:',
        viewIssuer: 'View issuer',
        viewCredential: 'View credential',
        never: 'Never',
    },
};
