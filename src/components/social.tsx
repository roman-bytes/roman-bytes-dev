import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Social: FunctionComponent = (): ReactElement => (
    <ul className="social">
        <li>
            <Link
                target="_blank"
                to="https://twitter.com/romanbytes"
                className="hover:text-white relative"
            >
                Twitter
            </Link>
        </li>
        <li>
            <Link
                target="_blank"
                to="https://github.com/roman-bytes"
                className="hover:text-white relative"
            >
                Github
            </Link>
        </li>
        <li>
            <Link
                target="_blank"
                to="https://codepen.io/romanbytes"
                className="hover:text-white relative"
            >
                CodePen
            </Link>
        </li>
        <li>
            <Link
                target="_blank"
                to="https://dev.to/romanbytes"
                className="hover:text-white relative"
            >
                Dev.to
            </Link>
        </li>
    </ul>
);

export default Social;
