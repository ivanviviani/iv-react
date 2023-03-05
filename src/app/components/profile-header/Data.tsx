import { uh } from '../../../utils/ComponentUtils';
import { breakpointInPixels } from '../../../utils/Utils';
import { CommonData } from '../CommonData';

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
        bio: 'Adobe AEM Developer & IT Consultant',
        place: {
            text: 'Verona, Italy',
            link: {
                href: 'https://www.google.com/maps/place/Verona+VR',
                target: '_blank',
                title: 'Go to Google Maps',
            },
        },
    },
    contactLinksIntro: 'Contact me on:',
    contactLinks: CommonData.contactLinks,
};
