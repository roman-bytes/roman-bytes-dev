import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProfilePage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Profile Page" />
        <div className="flex flex-col bg-romanBlack border border-white w-full overflow-hidden xl:my-2 xl:px-2">
            <div className="flex flex-no-wrap xl:-mx-2 overflow-hidden mt-4 text-white">
                <img className="w-full" src="/about-jacob-roman.png" />
                <div className="font-sans leading-normal">
                    <h1 className="text-xlxlxl font-ubuntu font-bold -ml-12">
                        Jacob Roman
                    </h1>
                    <p className="mb-4">
                        My name is Jacob Roman and I am a Frontend Developer
                        looking for a new challenge and a new company to pursue
                        an awesome career with. I have ten years of experience
                        developing websites and I have never met a challenge I
                        wasn’t compelled to dig into.
                    </p>
                    <p>
                        I have experience with React / JavaScript / HTML / CSS /
                        Node.js / Express. I have a strong background in design,
                        I stem from a degree in Graphic Design, and I also have
                        a large knowledge base about web accessibility
                        principles due to my previous career. I am a team player
                        and have an open mind about all ideas. I enjoy I enjoy I
                        I enjoy well-written code, I thrive on keeping my work
                        organized and simplistic. While reading Icon
                        Interactive’s mission statement, a phrase stuck out to
                        me. “...simplifying the most complex ideas”. That is
                        what I enjoy doing on a daily basis.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
);

export default ProfilePage;
