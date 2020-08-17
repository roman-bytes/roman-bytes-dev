import React, { FunctionComponent, ReactElement } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface RepoData {
    id: string;
    isPrivate: boolean;
    name: string;
    url: string;
}

export const query = graphql`
    {
        allGithubData {
            nodes {
                data {
                    user {
                        repositories {
                            edges {
                                node {
                                    id
                                    isPrivate
                                    name
                                    url
                                    repositoryTopics {
                                        edges {
                                            node {
                                                topic {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const IndexPage: FunctionComponent = ({ data }): ReactElement => {
    const { nodes } = data.allGithubData;
    const user = nodes[0].data.user;
    const { repositories } = user;

    const portfolioRepos = repositories.edges.filter(
        (repo) => {
            if (repo.node.repositoryTopics.edges.length === 0) { return; }
            console.log('2');
            return repo.node.repositoryTopics.edges[0].node.topic.name === 'portfolio';
        }
    );
    console.log('portfolioRepos', portfolioRepos);

    const repoTiles = portfolioRepos.map((repo) => {
        return (
            <Link
                to={repo.node.url}
                key={repo.node.id}
                target="_blank"
                className="w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3"
            >
                <div className="border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow">
                    <div>{repo.node.name}</div>
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
                </div>
            </Link>
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
