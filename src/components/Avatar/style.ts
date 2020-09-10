import styled from "styled-components";

export const AvatarIcon = styled.div`
    flex-shrink: 0;

    background-color: var(--secondary);

    border-radius: 50%;

    &.lg {
        width: 200px;
        height: 200px;
    }

    &.sm {
        width: 50px;
        height: 50px;

        background-color: var(--primary);

        @media (max-width: 576px) {
            width: 70px;
            height: 70px;

            margin-bottom: 20px;
        }
    }
`;
