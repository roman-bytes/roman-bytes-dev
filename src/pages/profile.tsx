import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProfilePage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Profile Page" />
        <h1 className='text-white'>Profile....coming soon</h1>
    </Layout>
);

export default ProfilePage;
