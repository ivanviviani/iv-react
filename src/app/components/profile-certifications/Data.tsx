import { uh } from '../../../utils/ComponentUtils';

export const Data = {
    title: 'Certifications 🥇',
    certifications: [
        {
            image: {
                src: '/assets/images/adobe.jfif',
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
                src: '/assets/images/unipd.jfif',
                alt: 'University of Padua logo',
            },
            title: 'Laurea Magistrale in Ingegneria Informatica',
            issuer: {
                name: 'Università degli Studi di Padova',
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
