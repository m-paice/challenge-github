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

    > div > div > h1 {
        color: var(--text-info);
        cursor: pointer;

        transition: 0.2s;
    }

    > div > div > h1:hover {
        text-decoration: underline;
    }

    > div > div > span {
        color: var(--text-secondary);
        font-size: 14px;
        margin-left: 10px;
    }

    > div > span {
        color: var(--text-secondary);
        font-size: 14px;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Avatar = styled.div`
    width: 50px;
    height: 50px;

    flex-shrink: 0;

    border-radius: 50%;

    background-color: var(--primary);

    @media (max-width: 576px) {
        width: 70px;
        height: 70px;

        margin-bottom: 20px;
    }
`;
export const Info = styled.div`
    margin-left: 7px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

    span > {
        margin-left: 70px;
        color: var(--text-warning);
    }

    h1 > {
        font-size: 20px;
        color: var(--text-info);

        cursor: pointer;
    }
`;

export const Description = styled.div`
    margin: 20px 0;
`;
