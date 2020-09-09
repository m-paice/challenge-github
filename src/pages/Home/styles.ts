import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    background-color: var(--primary);
`;

export const WrapperContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        padding: 10px;
        overflow-y: auto;
    }
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: var(--text-primary);
`;

export const WrapperBox = styled.div`
    display: flex;

    margin-top: 40px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const Box = styled.div`
    width: 300px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--secondary);
    color: var(--text-primary);

    border-radius: 14px;
    cursor: pointer;

    transition: 0.2s;

    margin-left: 14px;

    :hover {
        background-color: var(--tertiary);
    }

    @media (max-width: 576px) {
        margin-left: 0;
        margin-bottom: 14px;
    }
`;
