import { Component } from 'react'


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }
    inputChangeHandler = (e) => this.setState({ msg: e.target.value });
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.user} </h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.props.SendMsg(this.state.msg);
                            this.setState({ msg: "" });
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Ecrire un message"
                            onChange={this.inputChangeHandler}
                            value={this.state.msg}
                        ></input>
                        <input type="submit"></input>
                    </form>

                    <h4>Message</h4>
                    <h5> {this.props.ChatMessage} </h5>
                </div>
            </div>
        );
    }
}

export default Chat;