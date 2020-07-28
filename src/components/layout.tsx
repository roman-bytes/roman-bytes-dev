/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { TerminalContextProvider } from "react-terminal";

import Header from './header';
import Footer from './footer';
import Social from './social';
import Nav from './nav';
import Logo from './logo';
import './main.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
    children,
}: LayoutProps): ReactElement => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <TerminalContextProvider>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Logo />
            <div className="container mx-auto flex items-center justify-center h-full w-full">
                <main className="w-full h-full flex items-center justify-center">{children}</main>
            </div>
            <div className="w-full fixed text-romanText p-20 flex justify-between items-end bottom-0 left-0 right-0">
                <Social />
                <Nav />
            </div>
            <Footer />
        </TerminalContextProvider>
    );
};

export default Layout;
