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
                    <span style="font-weight: 500">Certified Adobe Experience Manager Sites
                    developer expert</span> specializzato in:
                </p>
                <ul role="list">
                    <li>
                        <p>Template di pagina AEM con responsive grid e
                        policy</p>
                    </li>
                    <li>
                        <p>Componenti AEM lato frontend (HTML,
                        CSS/Sass, JavaScript) e lato server (uso del
                        linguaggio Sightly/HTL, dialog Granite UI,
                        modelli Sling, servizi OSGi e servlet)</p>
                    </li>
                    <li>
                        <p>Personalizzazione di componenti Granite per
                        una migliore configurazione dei componenti
                        AEM</p>
                    </li>
                    <li><p>Configurazione di dispatcher AEM</p></li>
                    <li>
                        <p>Regole di accessibilità WCAG e adattamento
                        di siti web</p>
                    </li>
                    <li><p>Supporto tecnico al team editoriale</p></li>
                </ul>
            `,
        },
    ],
    labels: {
        workPeriod: 'Work period:',
        workDuration: 'Work duration:',
    },
};
