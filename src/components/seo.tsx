import React, { FunctionComponent, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

interface Meta {
    name: string;
    content: string;
}

interface SeoProps {
    lang?: string;
    meta?: Meta[];
    title?: string;
}

const SEO: FunctionComponent<SeoProps> = ({
    lang = 'en',
    meta = [],
    title,
}: SeoProps): ReactElement => {
    const description =
        'Roman Bytes is a developer website to host all sorts of projects I am working on. My name is Jacob Roman and I am a full stack developer with a passion for the front-end and UI Design.';
    const author = 'Jacob Roman';

    const metaDescription = description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
                class: 'w-full h-full font-mono',
            }}
            bodyAttributes={{
                class: 'bg-romanBlack w-full h-full',
            }}
            style={[
                {
                    cssText: `
                        body {
                            background-image: url(/dots.png);
                        }
                    `,
                },
            ]}
            title={title}
            titleTemplate={`%s | ${title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
};

export default SEO;
