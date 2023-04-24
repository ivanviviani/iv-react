const AdobeExpertCertifications = [
    {
        image: {
            src: '/assets/images/adobe-expert.png',
            alt: 'Adobe expert',
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
];

const AdobeProfessionalCertifications = [
    {
        image: {
            src: '/assets/images/adobe-professional.png',
            alt: 'Adobe professional',
        },
        title: 'Adobe Professional - Adobe Experience Manager Dev/Ops',
        issuer: {
            name: 'Adobe',
            link: {
                href: 'https://www.credly.com/organizations/adobe/badges',
                target: '_blank',
            },
        },
        releaseDate: {
            dateTime: '2022-03-26',
            text: 'March 2022',
        },
        expirationDate: null,
        link: {
            href: 'https://www.credly.com/badges/e4c90a89-b3f2-4090-b929-72f90eb5b830',
            target: '_blank',
        },
    },
    {
        image: {
            src: '/assets/images/adobe-professional.png',
            alt: 'Adobe professional',
        },
        title: 'Adobe Professional - Adobe Experience Manager Front-End Developer',
        issuer: {
            name: 'Adobe',
            link: {
                href: 'https://www.credly.com/organizations/adobe/badges',
                target: '_blank',
            },
        },
        releaseDate: {
            dateTime: '2022-04-08',
            text: 'April 2022',
        },
        expirationDate: null,
        link: {
            href: 'https://www.credly.com/badges/e11b139d-4545-4d97-ad86-2328f5952422',
            target: '_blank',
        },
    },
    {
        image: {
            src: '/assets/images/adobe-professional.png',
            alt: 'Adobe professional',
        },
        title: 'Adobe Professional - Adobe Experience Manager Back-End Developer',
        issuer: {
            name: 'Adobe',
            link: {
                href: 'https://www.credly.com/organizations/adobe/badges',
                target: '_blank',
            },
        },
        releaseDate: {
            dateTime: '2022-03-26',
            text: 'March 2022',
        },
        expirationDate: null,
        link: {
            href: 'https://www.credly.com/badges/54e0ab19-cea4-4a54-b686-84f404ee5928',
            target: '_blank',
        },
    },
    {
        image: {
            src: '/assets/images/adobe-professional.png',
            alt: 'Adobe professional',
        },
        title: 'Adobe Professional - Adobe Experience Manager Sites Business Practitioner',
        issuer: {
            name: 'Adobe',
            link: {
                href: 'https://www.credly.com/organizations/adobe/badges',
                target: '_blank',
            },
        },
        releaseDate: {
            dateTime: '2022-04-08',
            text: 'April 2022',
        },
        expirationDate: null,
        link: {
            href: 'https://www.credly.com/badges/45128b89-9df6-4878-b405-8f4143e0f4ed',
            target: '_blank',
        },
    },
];

export const Data = {
    title: 'Certifications 🥇',
    certifications: [
        ...AdobeExpertCertifications,
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
        ...AdobeProfessionalCertifications,
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
