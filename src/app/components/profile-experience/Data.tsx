import { uh } from '../../../utils/ComponentUtils';

export const Data = {
    experiences: [
        {
            image: {
                src: uh(100),
                alt: 'Aktive Reply logo',
            },
            title: 'IT Consultant - AEM Developer',
            period: 'October 2020 - Present &bull; 2 years and 6 months',
            place: 'Verona, Italy',
            description: `
                <p>
                    Certified Adobe Experience Manager Sites
                    developer expert specializzato in:
                </p>
                <ul>
                    <li>
                        Template di pagina AEM con responsive grid e
                        policy
                    </li>
                    <li>
                        Componenti AEM lato frontend (HTML,
                        CSS/Sass, JavaScript) e lato server (uso del
                        linguaggio Sightly/HTL, dialog Granite UI,
                        modelli Sling, servizi OSGi e servlet)
                    </li>
                    <li>
                        Personalizzazione di componenti Granite per
                        una migliore configurazione dei componenti
                        AEM
                    </li>
                    <li>Configurazione di dispatcher AEM</li>
                    <li>
                        Regole di accessibilità WCAG e adattamento
                        di siti web
                    </li>
                    <li>Supporto tecnico al team editoriale</li>
                </ul>
            `,
        },
    ],
};
