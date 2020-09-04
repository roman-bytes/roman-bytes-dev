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

const ProjectsPage: FunctionComponent = ({ data }): ReactElement => {
    const { nodes } = data.allGithubData;
    const user = nodes[0].data.user;
    const { repositories } = user;

    const portfolioRepos = repositories.edges.filter((repo) => {
        if (repo.node.repositoryTopics.edges.length === 0) {
            return;
        }

        return (
            repo.node.repositoryTopics.edges[0].node.topic.name === 'portfolio'
        );
    });

    const repoTiles = portfolioRepos.map((repo) => {
        return (
            <Link
                to={repo.node.isPrivate ? '' : repo.node.url}
                key={repo.node.id}
                target="_blank"
                className="w-full overflow-hidden my-2 px-2 xl:w-1/3"
            >
                <div className="border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow">
                    <div>{repo.node.name}</div>
                    {repo.node.isPrivate ? (
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.90002 22.5 4 21.6 4 20.5V10.5C4 9.4 4.90002 8.5 6 8.5H7V6.5C7 3.74 9.23999 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
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
                            />
                        </svg>
                    )}
                </div>
            </Link>
        );
    });

    return (
        <Layout>
            <SEO title="Projects" />
            <div className="container flex flex-col">
                <h1 className="text-4xl text-white p-4 border-b border-white">Projects</h1>
                <div className="flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white">
                    {repoTiles}
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsPage;
