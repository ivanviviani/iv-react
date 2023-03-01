import { uh } from '../../../utils/ComponentUtils';

export const Data = {
    coverImage: {
        src: uh(800, 200),
        alt: 'Cover image',
    },
    profilePicture: {
        src: uh(100),
        alt: 'Profile picture',
    },
    bio: {
        title: 'Ivan Viviani',
        bio: 'Adobe AEM Developer & IT Consultant @ Aktive Reply',
        place: 'Verona, Italy',
    },
    contactLinksIntro: 'Contact me on:',
    contactLinks: [
        {
            label: 'Email',
            href: 'mailto:ivan.viviani.vr@gmail.com',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ivanviviani',
        },
        {
            label: 'Github',
            href: 'https://www.github.com/ivanviviani',
        },
    ],
};
