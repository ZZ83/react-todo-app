import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

const log = () => {
    console.log("Clicked");
};

const Background = styled.div`
    background-color: #ffffff;
    height: 100vh;
`;

const Heading = styled.h1`
    color: red;
`;

const Button = styled.button`
    background-color: green;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <Background>
                <Heading>T O D O</Heading>
                <Button onClick={log}>Click Me</Button>
            </Background>
        </>
    );
}

export default App;
