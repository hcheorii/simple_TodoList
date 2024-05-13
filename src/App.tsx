import "./App.css";
import TodoList from "./TodoList";
import Clock from "./Timer";
import MyWeather from "./MyWeather";
function App() {
    return (
        <div className="container">
            <TodoList />
            {/* <Clock /> */}
            <MyWeather weather="맑음">일기예보</MyWeather>
        </div>
    );
}

export default App;
