import { uh } from '../../../utils/ComponentUtils';
import { currentDateISO } from '../../../utils/Utils';

export const Data = {
    title: 'Experience 👨‍💻',
    experiences: [
        {
            company: {
                name: 'Aktive Reply',
                image: {
                    src: '/assets/images/aktive.jfif',
                    alt: 'Aktive Reply logo',
                },
                link: {
                    href: 'https://www.reply.com/aktive-reply/en/',
                    target: '_blank',
                },
            },
            title: 'IT Consultant - AEM Developer',
            period: [
                {
                    dateTime: '2020-10',
                    text: 'October 2020',
                },
                {
                    dateTime: currentDateISO(),
                    text: 'Present',
                },
            ],
            place: {
                text: 'Verona, Italy',
                link: {
                    href: 'https://www.google.com/maps/place/Verona+VR',
                    target: '_blank',
                    title: 'Go to Google Maps',
                },
            },
            description: `
                <p>
                    <span style="font-weight: 500">Certified <a href="https://business.adobe.com/products/experience-manager/adobe-experience-manager.html" target="_blank">Adobe Experience Manager</a>
                    developer expert</span>, specialised in:
                </p>
                <ul role="list">
                    <li>
                        <p>AEM page templates with responsive grids and component policies</p>
                    </li>
                    <li>
                        <p>AEM components on frontend side (HTML, CSS/Sass and JavaScript) and server side (Sightly HTL, Granite UI dialogs, Apache Sling models, OSGi services and servlets, JCR operations)</p>
                    </li>
                    <li>
                        <p>Granite UI components customisation to better configure AEM components</p>
                    </li>
                    <li><p>Apache dispatcher configuration for AEM sites (domain setup, farms and vhosts, rewrite rules and redirects, caching rules, error pages handling)</p></li>
                    <li>
                        <p><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG</a> web accessibility guidelines and website adaptation (<a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> and accessibility functionality in JavaScript)</p>
                    </li>
                    <li><p>Technical support to AEM site editors</p></li>
                </ul>
            `,
        },
    ],
    labels: {
        workPeriod: 'Work period:',
        workDuration: 'Work duration:',
    },
};
