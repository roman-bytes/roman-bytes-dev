import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Blog Page" />
        <h1 className="text-white">Blog...coming soon</h1>
    </Layout>
);

export default BlogPage;
