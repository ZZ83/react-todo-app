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
import { light, dark } from "./data/themes";

function App() {
    const [theme, setTheme] = useState(light);
    function changeTheme() {
        theme === light ? setTheme(dark) : setTheme(light);
    }

    const [unsortedList, setUnsortedList] = useState([]);
    const [displayedTodoItems, setDisplayedTodoItems] = useState([]);

    const [sort, setSort] = useState({ all: true, active: false, completed: false });

    function toggleCompleted(index) {
        const todoItems = [...displayedTodoItems];
        if (displayedTodoItems[index].isCompleted === false) {
            todoItems[index].isCompleted = true;
            setDisplayedTodoItems([...todoItems]);
        } else {
            todoItems[index].isCompleted = false;
            setDisplayedTodoItems([...todoItems]);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BackgroundImage />
            <Wrapper>
                <Header theme={theme} changeTheme={changeTheme} />
                <CreateTodo
                    unsortedList={unsortedList}
                    setUnsortedList={setUnsortedList}
                    displayedTodoItems={displayedTodoItems}
                    setDisplayedTodoItems={setDisplayedTodoItems}
                />
                <ul>
                    {displayedTodoItems.map((todoItem, index) => (
                        <TodoItem key={todoItem.id}>
                            <DynamicCheckBox
                                index={index}
                                active={todoItem.isCompleted}
                                toggleCompleted={toggleCompleted}
                            />
                            <TodoText completed={todoItem.isCompleted}>{todoItem.text}</TodoText>
                            <RemoveTodoButton
                                id={todoItem.id}
                                sort={sort}
                                unsortedList={unsortedList}
                                setUnsortedList={setUnsortedList}
                                displayedTodoItems={displayedTodoItems}
                                setDisplayedTodoItems={setDisplayedTodoItems}
                            />
                        </TodoItem>
                    ))}
                </ul>
                <Tracker
                    sort={sort}
                    setSort={setSort}
                    unsortedList={unsortedList}
                    setUnsortedList={setUnsortedList}
                    setDisplayedTodoItems={setDisplayedTodoItems}
                />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
