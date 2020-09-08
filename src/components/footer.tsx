import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Footer: FunctionComponent = (): ReactElement => (
    <footer className="hidden lg:block w-full fixed top-1/2 text-romanText">
        <div className="absolute xl:left-5 lg:left-2.5 text-sm origin-center transform -rotate-90 -translate-x-1/2">
            Made with love from Michigan.
        </div>
        <div className="absolute xl:right-5 lg:right-2.5 text-sm origin-center transform rotate-90 translate-x-1/2">
            <Link to="https://github.com/roman-bytes/roman-bytes-dev">
                Source Code
            </Link>
        </div>
    </footer>
);

export default Footer;
