import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Nav: FunctionComponent = (): ReactElement => (
    <ul className="text-right">
        <li>
            <Link to="/" className="hover:text-white">
                Index
            </Link>
        </li>
        <li>
            <Link to="/projects" className="hover:text-white">
                Projects
            </Link>
        </li>
        <li>
            <Link to="/profile" className="hover:text-white">
                Profile
            </Link>
        </li>
        <li>
            <Link to="/blog" className="hover:text-white">
                Blog
            </Link>
        </li>
    </ul>
);

export default Nav;
