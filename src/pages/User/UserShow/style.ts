import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Nav = styled.div`
    width: 100%;
    max-width: 900px;

    margin-top: 50px;

    @media (max-width: 576px) {
        margin-top: 0;
    }
`;

export const BackButton = styled.button`
    background: transparent;

    cursor: pointer;

    border-radius: 50px;

    padding: 20px;

    transition: 0.2s;

    :hover {
        background-color: var(--secondary);
    }
`;

export const Avatar = styled.div`
    width: 200px;
    height: 200px;

    flex-shrink: 0;

    background-color: var(--secondary);

    border-radius: 50%;
`;

export const WrapperActions = styled.div`
    display: flex;

    margin: 15px 0px;
`;

export const Actions = styled.div`
    margin: 0 15px;

    text-align: center;
`;

export const EmailText = styled.div``;

export const WrapperRepos = styled.div`
    width: 100%;
    max-width: 900px;

    margin: 40px 0;
    padding: 10px;

    border-radius: 7px;

    background-color: var(--secondary);
`;

export const Repos = styled.div`
    border: 3px solid var(--primary);
    border-radius: 7px;

    padding: 10px;
    margin-bottom: 25px;

    :last-child {
        margin-bottom: 0;
    }

    > h1 {
        color: var(--text-info);
        font-size: 20px;
    }

    > p {
        margin: 7px 0;
    }
`;

export const WrapperDetails = styled.div`
    display: flex;

    @media (max-width: 576px) {
        display: none;
    }
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 15px;

    :first-child {
        margin-left: 0;
    }

    > img {
        margin-right: 5px;
    }

    @media (max-width: 576px) {
        :last-child {
            margin: 0;
        }
    }
`;

export const WrapperDetailsMobile = styled.div`
    display: none;

    @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const GroupDetails = styled.div`
    display: flex;
`;

export const ColorIcon = styled.div`
    width: 10px;
    height: 10px;

    border-radius: 50%;

    margin-right: 5px;

    background-color: var(--text-danger);
`;
