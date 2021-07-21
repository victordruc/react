import { Component } from "react";
import styles from "./Counter.module.css"

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            n:0
        }
    }

    increment() {
        this.setState({n:this.state.n+1})
    }

    decrement() {
        this.setState({n:this.state.n-1})
    }

    render() {
        return(
            <div className={styles.counter}>
                <button onClick={this.increment.bind(this)}>+</button>
                Count {this.state.n}
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }
}

export default Counter