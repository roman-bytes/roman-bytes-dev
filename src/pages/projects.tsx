import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RomanTerminal from '../components/terminal';

const IndexPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Projects" />
        <h1>Projects</h1>
    </Layout>
);

export default IndexPage;
