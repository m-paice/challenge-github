import styled from "styled-components";

export const AvatarIcon = styled.img`
    flex-shrink: 0;

    border-radius: 50%;

    &.lg {
        width: 200px;
        height: 200px;
    }

    &.sm {
        width: 50px;
        height: 50px;

        @media (max-width: 576px) {
            width: 70px;
            height: 70px;

            margin-bottom: 20px;
        }
    }
`;
