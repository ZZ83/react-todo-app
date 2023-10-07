import styled from "styled-components";

import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";
import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";

export const StyledBackgroundImage = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: 200px;
    background-color: orange;
    position: absolute;
    z-index: -1;
    top: 0;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ theme }) => (theme.bg === "light" ? bgMobileLight : bgMobileDark)});
    @media (min-width: 588px) {
        background-image: url(${({ theme }) => (theme.bg === "light" ? bgDesktopLight : bgDesktopDark)});
        height: 300px;
    }
`;

function BackgroundImage() {
    return <StyledBackgroundImage />;
}

export default BackgroundImage;
