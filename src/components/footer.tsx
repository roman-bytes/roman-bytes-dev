import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Footer: FunctionComponent = (): ReactElement => (
    <footer className="w-full fixed top-1/2 text-romanText">
        <div className="absolute left-5 text-sm origin-center transform -rotate-90 -translate-x-1/2">Made with love from Michigan.</div>
        <div className="absolute right-5 text-sm origin-center transform rotate-90 translate-x-1/2">Source Code</div>
    </footer>
);

export default Footer;
