import { uh } from '../../../utils/ComponentUtils';

export const Data = {
    title: 'Certifications 🥇',
    certifications: [
        {
            image: {
                src: '/assets/images/w3cx.png',
                alt: 'W3Cx',
            },
            title: 'edX Verified Certificate for Introduction to Web Accessibility',
            issuer: {
                name: 'edX',
                link: {
                    href: 'https://www.edx.org/',
                    target: '_blank',
                },
            },
            releaseDate: {
                dateTime: '2023-04-08',
                text: 'April 2023',
            },
            expirationDate: null,
            link: {
                href: 'https://courses.edx.org/certificates/1a2dcc1f55c748318693022e3e29ab49',
                target: '_blank',
            },
        },
        {
            image: {
                src: '/assets/images/adobe-expert.png',
                alt: 'Adobe logo',
            },
            title: 'Adobe Certified Expert - Adobe Experience Manager Sites Developer',
            issuer: {
                name: 'Adobe',
                link: {
                    href: 'https://www.credly.com/organizations/adobe/badges',
                    target: '_blank',
                },
            },
            releaseDate: {
                dateTime: '2022-05-31',
                text: 'May 2022',
            },
            expirationDate: {
                dateTime: '2024-05-31',
                text: 'May 2024',
            },
            link: {
                href: 'https://www.credly.com/badges/a2e988dd-9ec2-4e62-8a2d-6b729751be2d',
                target: '_blank',
            },
        },
        {
            image: {
                src: '/assets/images/md.png',
                alt: `Master's Degree in Computer Engineering at University of Padova`,
            },
            title: `Master's Degree in Computer Engineering`,
            issuer: {
                name: 'University of Padova',
                link: {
                    href: 'https://bestr.it/organization/show/65',
                    target: '_blank',
                },
            },
            releaseDate: {
                dateTime: '2022-10',
                text: 'October 2020',
            },
            expirationDate: null,
            link: {
                href: 'https://bestr.it/award/show/1z6e1GcVRgSoL87aB4iwMA',
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
