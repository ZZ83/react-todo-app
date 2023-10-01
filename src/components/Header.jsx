import styled from "styled-components";
import { Logo } from "./Logo";
import SunIcon from "./SunIcon";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;

    @media (min-width: 588px) {
        margin-top: 70px;
    }
`;

export const Header = ({ theme, changeTheme }) => {
    return (
        <StyledHeader>
            <Logo />
            <SunIcon theme={theme} changeTheme={changeTheme}></SunIcon>
        </StyledHeader>
    );
};
