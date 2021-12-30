import React, { useState } from 'react'
import Chat from './Components/Chat'

function App4() {

    const [message1 ,setmessage1]=useState("")
    const [message2 ,setmessage2]=useState()
    //  this.state = {
    //     message1: '',
    //     message2: ''
    // };
    const sendMessage =(msg)=>{
        setmessage1(msg)
    }
    return (
        <div style={{display:"flex" , justifyContent:"space-around"}}>
            <Chat 
            user="Mohamed" 
            SendMsg={sendMessage} // this.setState({ message1: msg });
            ChatMessage={message2}
            ></Chat>
            <Chat 
            user="Amine"
            SendMsg={msg => setmessage2(msg)} // this.setState({ message2: msg });
            ChatMessage={message1}
            ></Chat>
        </div>
    )
}

export default App4
