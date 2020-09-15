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

export const WrapperActions = styled.div`
    display: flex;

    margin: 15px 0px;
`;

export const Actions = styled.div`
    margin: 0 15px;

    text-align: center;
`;

export const EmailText = styled.div`
    max-width: 900px;

    text-align: center;
`;

export const Title = styled.h1`
    color: var(--text-info);
    font-size: 20px;
`;
export const Subtitle = styled.p`
    margin: 17px 0;
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

    margin-right: 15px;

    :first-child {
        margin-left: 0;
    }

    > img {
        margin-right: 5px;
    }

    &.sm {
        color: var(--text-secondary);
        font-size: 14px;
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

export const WrapperForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    > select {
        width: 200px;
        /* height: 42px; */

        margin-left: 20px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 5px;

        background-color: var(--secondary);

        border-radius: 3px;
        border: 1px solid;
        border-color: var(--primary);

        color: var(--gray);

        cursor: pointer;

        @media (max-width: 576px) {
            width: 100%;
            margin-top: 10px;
            margin-left: 0;
        }
    }

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
export const WrapperSearch = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > input {
        width: 100%;

        margin-left: 10px;

        background: transparent;
        border-bottom: 2px solid var(--primary);

        font-size: 16px;

        color: var(--text-secondary);
    }
`;

export const TextNoResult = styled.p`
    text-align: center;
`;
