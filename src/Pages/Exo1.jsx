
import { Component } from 'react'
import Chat from '../components/Chat'

class Exo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message1: '',
            message2: ''
        };
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", padding: "50px", border:"2px solid black", margin:"50px" }}>
                <Chat
                    user="Mohammed"
                    SendMsg={msg => this.setState({ message1: msg })}
                    ChatMessage={this.state.message2}
                ></Chat>
                <div style={{height:"300px",width:"2px",backgroundColor: "grey" }}></div>
                <Chat
                    user="Ali"
                    SendMsg={msg => this.setState({ message2: msg })}
                    ChatMessage={this.state.message1}
                ></Chat>
            </div>
        );
    }
}

export default Exo1;