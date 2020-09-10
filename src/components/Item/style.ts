import styled from "styled-components";

export const Container = styled.div`
    border: 3px solid var(--primary);
    border-radius: 7px;

    padding: 10px;
    margin-bottom: 25px;

    :last-child {
        margin-bottom: 0;
    }

    &.d-flex {
        display: flex;

        @media (max-width: 576px) {
            flex-direction: column;
            align-items: center;
        }
    }
`;
