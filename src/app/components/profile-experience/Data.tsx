import { uh } from '../../../utils/ComponentUtils';

export const Data = {
    title: 'Experience 👨‍💻',
    experiences: [
        {
            image: {
                src: '/assets/images/aktive.jfif',
                alt: 'Aktive Reply logo',
            },
            title: 'IT Consultant - AEM Developer',
            period: `<time datetime="2020-10">October 2020</time> - <time datetime="${
                new Date().toISOString().split('T')[0]
            }">Present</time>`,
            duration: '<time datetime="P2Y6M">2 years and 6 months</time>',
            place: 'Verona, Italy 🌍',
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
};
