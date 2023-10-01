import styled from "styled-components";

const StyledLogo = styled.h1`
    font-size: 20px;
    color: #fff;
    letter-spacing: 12px;
    line-height: 20px;
    @media (min-width: 588px) {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: 15px;
    }
`;

export const Logo = () => {
    return <StyledLogo>TODO</StyledLogo>;
};
