import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 50px 10px;
`;

export const WrapperBox = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    :last-child {
        margin-top: 40px;
    }
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

    &.column {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    width: 100%;

    margin-left: 7px;

    background: transparent;

    font-size: 16px;

    color: var(--text-secondary);
`;

export const UserContent = styled.div`
    width: 100%;

    display: flex;

    padding: 10px;

    border: 3px solid var(--primary);
    border-radius: 7px;

    margin: 14px 0px;

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Avatar = styled.div`
    width: 60px;
    height: 60px;

    border-radius: 50%;

    flex-shrink: 0;

    background-color: var(--primary);

    @media (max-width: 576px) {
        margin-bottom: 20px;
    }
`;
export const Labels = styled.div`
    margin-left: 15px;
`;
export const Name = styled.div`
    color: var(--text-info);
    font-size: 20px;
    cursor: pointer;
`;
export const Description = styled.div`
    color: var(--text-primary);
    font-size: 16px;

    margin: 7px 0;
`;
export const Info = styled.div`
    display: flex;

    @media (max-width: 576px) {
        display: none;
    }
`;

export const InfoMobile = styled.div`
    display: none;

    @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
    }
`;

export const WrapperActions = styled.div`
    display: flex;

    margin: 7px 0;
`;

export const Stars = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        margin-right: 5px;
    }
`;

export const Language = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;

    @media (max-width: 576px) {
        margin: 0 0 0 15px;
    }
`;

export const IconLanguage = styled.div`
    width: 10px;
    height: 10px;

    background-color: var(--text-danger);

    border-radius: 50%;
    margin-right: 5px;
`;
export const LastUpdated = styled.div``;
