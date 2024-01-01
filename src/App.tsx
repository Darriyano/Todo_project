import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import './App.css';

const date1 = new Date(2024, 1, 1, 12, 0);
const date2 = new Date(2025, 1, 1, 21, 30)

const initialData = [{
    title: 'Learn React!',
    desc: 'Learn faster, you!',
    image: '',
    done: true,
    createdAt: date1.toLocaleString(),
    key: date1.getTime()
}]

class App extends Component {
    data: any;
    constructor(props: any) {
        super(props);
        this.data = initialData;
    }

    render() {
        // Todo create CSS for styles of NAV and each DIV
       return (
        <div>
            <nav className="">
                <div className="">
                    <span className="">
                        What to do now!
                    </span>
                </div>
            </nav>
            <main className="content px-6 mt-6">
                <TodoList list={this.data}></TodoList>
            </main>
        </div>
       );
    }
}

export default App;
