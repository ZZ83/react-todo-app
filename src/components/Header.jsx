import styled from "styled-components";
import Logo from "./Logo";
import ThemeIcon from "./ThemeIcon";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;

    @media (min-width: 588px) {
        margin-top: 70px;
    }
`;

function Header({ theme, changeTheme }) {
    return (
        <StyledHeader>
            <Logo />
            <ThemeIcon theme={theme} changeTheme={changeTheme}></ThemeIcon>
        </StyledHeader>
    );
}

export default Header;
