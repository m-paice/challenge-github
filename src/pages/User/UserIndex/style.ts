import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WrapperBox = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 40px;
`;

export const Box = styled.div`
    width: 100%;
    max-width: 900px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px;

    border-radius: 14px;

    background-color: var(--secondary);
`;

export const Input = styled.input`
    width: 100%;

    margin-left: 7px;

    background: transparent;

    font-size: 16px;

    color: var(--text-secondary);
`;

export const WrapperUsers = styled.div`
    width: 100%;
    max-width: 900px;

    margin: 40px 0;
    padding: 10px;

    border-radius: 7px;

    background-color: var(--secondary);
`;

export const User = styled.div`
    width: 100%;
    max-width: 900px;

    display: flex;

    padding: 10px;

    border: 3px solid var(--primary);
    border-radius: 7px;

    background-color: var(--secondary);

    margin-bottom: 25px;

    :last-child {
        margin-bottom: 0;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Info = styled.div`
    margin-left: 7px;

    div > span {
        color: var(--text-secondary);
        font-size: 14px;
        margin-left: 10px;

        text-decoration: none;
    }

    span {
        color: var(--text-secondary);
        font-size: 14px;
    }
`;

export const Title = styled.div`
    color: var(--text-info);

    font-size: 20px;

    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Description = styled.div`
    margin: 20px 0;
`;

export const TextNoResult = styled.p`
    text-align: center;
`;
