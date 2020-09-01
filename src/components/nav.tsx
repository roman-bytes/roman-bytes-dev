import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Nav: FunctionComponent = (): ReactElement => (
    <ul className="text-right nav">
        <li>
            <Link to="/" className="hover:text-white relative">
                Index
            </Link>
        </li>
        <li>
            <Link to="/projects" className="hover:text-white relative">
                Projects
            </Link>
        </li>
        <li>
            <Link to="/about" className="hover:text-white relative">
                About
            </Link>
        </li>
        <li>
            <Link to="/blog" className="hover:text-white relative">
                Blog
            </Link>
        </li>
    </ul>
);

export default Nav;
