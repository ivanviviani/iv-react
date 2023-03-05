import { uh } from '../../../utils/ComponentUtils';
import { breakpointInPixels } from '../../../utils/Utils';

export const Data = {
    coverImage: {
        src: '/assets/images/cover-mob.jfif',
        srcSets: [
            {
                srcSet: '/assets/images/cover-dsk.jfif',
                media: `(min-width: ${breakpointInPixels('l')}px)`,
            },
            {
                type: 'image/jpg',
                srcSet: '/assets/images/cover-dsk.jpg',
                media: `(min-width: ${breakpointInPixels('l')}px)`,
            },
            {
                srcSet: '/assets/images/cover-tbl.jfif',
                media: `(min-width: ${breakpointInPixels('m')}px)`,
            },
            {
                type: 'image/jpg',
                srcSet: '/assets/images/cover-tbl.jpg',
                media: `(min-width: ${breakpointInPixels('m')}px)`,
            },
            {
                srcSet: '/assets/images/cover-mob.jfif',
                media: `(max-width: ${breakpointInPixels('m', -1)}px)`,
            },
            {
                srcSet: '/assets/images/cover-mob.jpg',
                media: `(max-width: ${breakpointInPixels('m', -1)}px)`,
            },
        ],
        alt: 'Cover image',
    },
    profilePicture: {
        src: '/assets/images/pp.jfif',
        srcSets: [
            {
                type: 'image/jfif',
                srcSet: '/assets/images/pp.jfif',
            },
        ],
        alt: 'Profile picture',
    },
    bio: {
        title: 'Ivan Viviani',
        bio: 'Adobe AEM Developer & IT Consultant @ Aktive Reply',
        place: 'Verona, Italy 🌍',
    },
    contactLinksIntro: 'Contact me on:',
    contactLinks: [
        {
            label: 'Email',
            href: 'mailto:ivan.viviani.vr@gmail.com',
            target: '_blank',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ivanviviani',
            target: '_blank',
        },
        {
            label: 'Github',
            href: 'https://www.github.com/ivanviviani',
            target: '_blank',
        },
    ],
};
