import React, { FunctionComponent, ReactElement } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ThanksPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Thanks for getting in touch!" />
        <div className="xl:w-full lg:w-3/4 text-md leading-8 font-sans p-8 text-white border border-white bg-romanBlack">
            <h1>
                Thanks for reaching out! I should be in touch with you soon.
            </h1>
        </div>
    </Layout>
);

export default ThanksPage;
