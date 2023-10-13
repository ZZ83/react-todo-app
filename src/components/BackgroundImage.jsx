import styled, { css } from "styled-components";

import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";
import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";

export const StyledBackgroundImage = styled.div(
    ({ theme }) => css`
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        max-width: 1440px;
        height: 200px;
        margin: 0 auto;
        background-image: url("${theme.bg === "light" ? bgMobileLight : bgMobileDark}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @media (width >= 588px) {
            height: 300px;
            background-image: url("${theme.bg === "light" ? bgDesktopLight : bgDesktopDark}");
        }
    `
);

function BackgroundImage() {
    return <StyledBackgroundImage />;
}

export default BackgroundImage;
