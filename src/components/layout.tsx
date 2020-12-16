import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { TerminalContextProvider } from 'react-terminal';

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
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMenuOpen = () => {
        setMobileMenu(!mobileMenu);
    };

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const mobileMenuClass = classNames(
        'justify-between my-5',
        mobileMenu ? 'flex h-auto' : 'hidden h-0'
    );

    const footerMobileClass = classNames(
        'flex-no-wrap justify-center',
        mobileMenu ? 'flex' : 'hidden'
    );

    return (
        <TerminalContextProvider>
            <main className="h-full">
                <div className="hidden lg:block absolute xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5 h-">
                    <Logo />
                </div>
                <div className="flex items-center justify-center h-full w-full">
                    <main className="container lg:mx-32 h-full lg:flex items-center justify-center">
                        {children}
                    </main>
                </div>
                <div className="hidden lg:flex w-full fixed text-romanText xl:p-20 lg:p-10 justify-between items-end bottom-0 left-0 right-0">
                    <Social />
                    <Nav />
                </div>
                <div className="lg:hidden p-5 border-t border-white bg-romanBlack w-full fixed text-romanText lg:p-10 flex justify-between bottom-0 left-0 right-0 flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <div className="xl:top-5 xl:left-5 lg:top-2.5 lg:left-2.5">
                            <Logo />
                        </div>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:block lg:hidden xl:hidden cursor-pointer"
                            onClick={() => handleMenuOpen()}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div className={mobileMenuClass}>
                        <Social />
                        <Nav />
                    </div>
                    <footer className={footerMobileClass}>
                        <div className="text-sm">Made with love from Michigan.</div>
                        <div className="text-sm">
                            <Link to="https://github.com/roman-bytes/roman-bytes-dev">
                                Source Code{' '}
                            </Link>
                        </div>
                    </footer>
                </div>
                <Footer />
            </main>
        </TerminalContextProvider>
    );
};

export default Layout;
