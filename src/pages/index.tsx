import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Home" />
        <div className="w-1/3 opacity-25">
            <Image />
        </div>
    </Layout>
);

export default IndexPage;
