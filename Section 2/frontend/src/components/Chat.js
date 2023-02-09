import React, { useState } from 'react'
import './chat.css'

const Chat = () => {

    const [messages, setMessages] = useState(
        [
            { text: 'Heyyyyy Sweetu😍😍.....', sent: true },
            { text: 'Heyyyyy Ashu.....', sent: false },
            { text: 'how are you?', sent: false },
        ]
    );

    const [inputText, setInputText] = useState("");




    // const messages = [
    //     { text: 'Heyyyyy Sweetu😍😍.....', sent: true },
    //     { text: 'Heyyyyy Ashu.....', sent: false },
    //     { text: 'how are you?', sent: false },
    // ];

    const displayMessages = () => {
        // return messages.map( () => ( <h1>Message</h1> ) );
        // return messages.map( (obj) => ( <h1>{obj.text}</h1> ) );
        return messages.map((obj) => (<div className={obj.sent ? 'sent-msg' : 'rec-msg'}>
            <p>{obj.text}</p>
        </div>));
    }

    const sendMessage = () => {
        if (!inputText) return;
        const msg = { text: inputText, sent: true };
        setMessages([...messages, msg]);
        setInputText("");
    }



    return (
        <div style={{ backgroundColor: 'lightblue', height: '92vh' }}>
            <div className="container pt-5">
                <div className="card">
                    <div className="card-header bg-danger">
                        <span className='text-white'>
                            <span className="h3"><i class="fas fa-user-circle"></i> Miss Sweet</span>
                            <span>&nbsp; Online</span>
                        </span>
                    </div>
                    <div className="card-body" style={{ height: '70vh', overflowY: 'auto' }}>
                        {displayMessages()}
                        {/* <div className='sent-msg'>
                        <p>Heyyyyy Sweetu😍😍.....</p>
                    </div>
                    <div className='rec-msg'>
                        <p>Heyyyyy Ashu.....</p>
                    </div> */}
                    </div>
                    <div className="card-footer">
                        <div className="input-group">
                            <input type="text" className='form-control' value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
                            <button className='btn btn-primary' onClick={sendMessage}><i class="fas fa-paper-plane"></i></button>                        {/* paper plan icon */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat