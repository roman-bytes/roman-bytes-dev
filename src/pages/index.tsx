import React, { FunctionComponent, ReactElement } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RomanTerminal from '../components/terminal';

const IndexPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Roman Bytes | Full stack Developer" />
        <h1 className="font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right">
            Hello, I am Jacob Roman, a{' '}
            <span className="text-romanYellow line-through"> designer </span>
            <br /> front-end developer based in Michigan.
        </h1>
        <RomanTerminal />
    </Layout>
);

export default IndexPage;
