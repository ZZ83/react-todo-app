import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import BackgroundImage from "./components/BackgroundImage";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";
import TodoText from "./components/TodoText";
import Tracker from "./components/Tracker";

import { DynamicCheckBox } from "./components/Checkbox";
import RemoveTodoButton from "./components/RemoveTodoButton";

const themes = {
    lightTheme: {
        primaryBG: "#fafafa",
        secondaryBG: "#ffffff",
        primaryColor: "#494C6B",
        secondaryColor: "#9495A5",
        accentColor: "#E3E4F1",
        lineThroughColor: "#D1D2DA",
        hover: "#494C6B",
        bg: "light",
    },
    darkTheme: {
        primaryBG: "#171823",
        secondaryBG: "#25273D",
        primaryColor: "#C8CBE7",
        secondaryColor: "#767992",
        accentColor: "#393A4B",
        lineThroughColor: "#4D5067",
        hover: "#E3E4F1",
        bg: "dark",
    },
};

function App() {
    const [theme, setTheme] = useState(themes.lightTheme);
    const [original, setOriginal] = useState([]);
    const [todo, setTodo] = useState([]);
    const [sort, setSort] = useState({ all: true, active: false, completed: false });

    function toggleCompleted(index) {
        const item = [...todo];
        if (todo[index].completed === false) {
            item[index].completed = true;
            setTodo([...item]);
        } else {
            item[index].completed = false;
            setTodo([...item]);
        }
    }

    function changeTheme() {
        if (theme === themes.lightTheme) {
            setTheme(themes.darkTheme);
        } else {
            setTheme(themes.lightTheme);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BackgroundImage />
            <Wrapper>
                <Header theme={theme} changeTheme={changeTheme} />
                <CreateTodo original={original} setOriginal={setOriginal} todo={todo} setTodo={setTodo} />
                <ul>
                    {todo.map((obj, index) => (
                        <TodoItem key={obj.id}>
                            <DynamicCheckBox active={obj.completed} index={index} toggleCompleted={toggleCompleted} />

                            <TodoText completed={obj.completed}>{obj.text}</TodoText>

                            <RemoveTodoButton
                                id={obj.id}
                                sort={sort}
                                original={original}
                                setOriginal={setOriginal}
                                todo={todo}
                                setTodo={setTodo}
                            />
                        </TodoItem>
                    ))}
                </ul>
                <Tracker
                    sort={sort}
                    setSort={setSort}
                    original={original}
                    setOriginal={setOriginal}
                    setTodo={setTodo}
                />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
