import React from 'react';
import '../App.css'
class counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            time: 0,
            mount: 'did mount'
        };

        // This binding is necessary to make `this` work in the callback
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    // setState() is async, so we need to use a callback 
    // function to update the state

    increment() {
        this.setState({
            count: this.state.count + 1

        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    //     this.interval = setInterval(() => {
    //         this.setState({
    //             time: this.state.mount + 1
    //         })
    //     }, 1000)
    // }


    render() {
        return (
            <div className="App">
                <h1> {this.state.count}</h1>
                <button onClick={this.increment} >+1</button>
                <button onClick={this.decrement} >-1</button>


                <div>
                    <h1>did Mount</h1>
                   <p> {this.state.time}</p>
                </div>

                <div>
                    <h1>Did Upldate</h1>
                    <p>{this.state.mount} </p>
                </div>
            </div>
        )
    }
}

export default counter;