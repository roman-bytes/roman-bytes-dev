import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Social: FunctionComponent = (): ReactElement => (
    <ul>
        <li>
            <Link
                to="https://twitter.com/romanbytes"
                className="hover:text-white"
            >
                Twitter
            </Link>
        </li>
        <li>
            <Link
                to="https://github.com/roman-bytes"
                className="hover:text-white"
            >
                Github
            </Link>
        </li>
        <li>
            <Link
                to="https://codepen.io/romanbytes"
                className="hover:text-white"
            >
                CodePen
            </Link>
        </li>
        <li>
            <Link
                to="https://dev.to/romanbytes"
                className="hover:text-white"
            >
                Dev.to
            </Link>
        </li>
    </ul>
);

export default Social;
