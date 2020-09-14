import React, { createContext, useState, useContext } from "react";

import api from "../service/api";

interface Repo {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    updated_at: Date | string;
}

interface ReposContextData {
    repos: Repo[];
    handleListRepos(username: string): void;
    currentRepo: Repo;
    handleGetRepo(owner: string, reponame: string): void;
    handleSortListRepos(order: string): void;
    handleSearchRepo(reponame: string): void;
    tempRepos: Repo[];
}

const ReposContext = createContext<ReposContextData>({} as ReposContextData);

export const ReposProvider: React.FC = ({ children }) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [currentRepo, setCurrentRepo] = useState<Repo>({} as Repo);
    const [tempRepos, setTempRepos] = useState<Repo[]>([]); // for searching

    // list all repos from user
    const handleListRepos = async (username: string) => {
        const response = await api.get(`/users/${username}/repos`);

        setRepos(response.data);
    };

    // list a repo from user
    const handleGetRepo = async (owner: string, reponame: string) => {
        const response = await api.get(`/repos/${owner}/${reponame}`);

        setCurrentRepo(response.data);
    };

    // searching repos from user
    const handleSearchRepo = (reponame: string) => {
        const filterdRepos = repos.filter((repo) => repo.name.toLowerCase().includes(reponame.toLowerCase()));

        setTempRepos(filterdRepos);
    };

    // filtering repos
    const handleSortListRepos = (order: string) => {
        // DESC or ASC

        if (order === "DESC") {
            const sortedDesRepos = repos
                .map((repo) => repo)
                .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1));

            setRepos(sortedDesRepos);
        }

        if (order === "ASC") {
            const sortedAscRepos = repos
                .map((repo) => repo)
                .sort((a, b) => (a.stargazers_count > b.stargazers_count ? 1 : -1));

            setRepos(sortedAscRepos);
        }
    };

    return (
        <ReposContext.Provider
            value={{
                repos,
                handleListRepos,
                currentRepo,
                handleGetRepo,
                handleSortListRepos,
                handleSearchRepo,
                tempRepos,
            }}
        >
            {children}
        </ReposContext.Provider>
    );
};

export const useRepos = () => {
    const context = useContext(ReposContext);

    return context;
};
