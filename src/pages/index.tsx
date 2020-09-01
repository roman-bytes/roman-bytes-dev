import React, { FunctionComponent, ReactElement } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RomanTerminal from '../components/terminal';

const IndexPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Roman Bytes | Full stack Developer" />
        <div className="font-sans text-white right-5 absolute top-5 text-2xl text-right">
            Hello, I am Jacob Roman, a
            <span className="text-romanYellow line-through"> designer </span>
            <br /> full stack developer based in Michigan.
        </div>
        <RomanTerminal />
    </Layout>
);

export default IndexPage;
