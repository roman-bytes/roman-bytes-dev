import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: FunctionComponent = (): ReactElement => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/users/roman-bytes/repos').then((res) =>
            res.json()
        )
    );

    if (isLoading) return 'Loading...';

    if (error) return "An error has occurred: " + error.message;
    console.log('data', data);
    const repoTiles = data.map(repo => {
        console.log('repo', repo);
        return (
            <div
                key={repo.id}
                className="w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3"
            >
                <div className="border border-white bg-romanBlack p-4 flex justify-between items-center">
                    <div>{repo.name}</div>
                    <Link to={repo.html_url}>
                        <svg
                            width={8}
                            height={12}
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z"
                                fill="white"
                                fillOpacity="0.54"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <Layout>
            <SEO title="Projects" />
            <div className="flex flex-col">
                <h1 className="text-4xl text-white">Projects</h1>
                <div className="flex flex-wrap xl:-mx-2 overflow-hidden mt-4 text-white">
                    {repoTiles}
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
