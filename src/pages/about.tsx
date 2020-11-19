import React, { FunctionComponent, ReactElement } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Roman Bytes - Full Stack Developer" />
        <div className="mb-20 lg:mb-0 xl:w-full lg:w-3/4 text-md leading-8 font-sans p-8 text-white lg:border border-white bg-romanBlack">
            <h1 className="font-mono text-2xl mb-3">Hi! I'm Jacob Roman</h1>
            <p>
                I am full-stack developer that has a strong background with the
                front-end and is improving my back-end knowledge every day. I
                was born in 1988 and grew up in Michigan. Once I graduated High
                School I knew that I wanted to do something with computers. I
                ended up taking a Graphic Design class and loved it, so I went
                to Spring Arbor University and got a Bachelor of Fine Arts with
                a focus on Graphic Design. During my time in college I fell in
                love with coding and realized that stuff I designed, I could
                also build in code. Thus began my journey to learn everything I
                I know about coding to this day.
            </p>
            <p>
                I have written code for Steel Fish Design, Traffic Digital
                Agency, Deque. I also help out maintain a few open source
                projects when I have the free time.
            </p>
            <p>
                I currently work at Nexient as a Developer II and learning about
                different back-end architectures.
            </p>
            <p>
                I meet my wife while I was attending SAU. We live in a small
                town of Michigan with our son, another one on the way (Feb 14),
                dog, and grandma.
            </p>
        </div>
    </Layout>
);

export default AboutPage;
