import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import './App.css';

const date1 = new Date(2024, 1, 1, 12, 0);
const date2 = new Date(2025, 1, 1, 21, 30)


//TEST DATA FOR SENDING TO AN ELEMENT
const initialData = [{
    title: 'Learn React!',
    desc: 'Learn faster, you!',
    image: '',
    done: false,
    createdAt: date1.toLocaleString(),
    key: date1.getTime()
}]

class App extends Component {
    data: any;
    constructor(props: any) {
        super(props);
        this.state = {data: initialData};
        this.setDone = this.setDone.bind(this);
    }

    setDone (key: String) : void {
        const deed: any = this.state.data.find((current: any) => current.key === key);
        if (deed) {
            deed.done = true;
        }
        this.setState((state) => ({}))
    }

    render() {
        // TODO: create CSS for styles of NAV and each DIV
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
                <TodoList list={this.state.data} setDone={this.setDone}></TodoList>
            </main>
        </div>
       );
    }
}

export default App;
