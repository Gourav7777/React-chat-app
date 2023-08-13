import React from 'react'
import Message from './Message';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const ChatApp = () => {

     const [messages, setMessages] = useState([]);
     const [text,Settext] = useState('')
    
     const [confirmuser, setConfirmUser] = useState('')
     const messageListRef = useRef(null);

     const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
  const handleMessageSend = (message) => {
    let randomUser = user_list[Math.floor(Math.random() * user_list.length)];
       
       if(randomUser==confirmuser){

        randomUser = user_list[Math.floor(Math.random() * user_list.length)];
          
        setConfirmUser(randomUser)
       }


    const newMessage = {
      user: randomUser,
      text: message,
      likes: 0
    };
    setMessages([...messages, newMessage]);
    Settext('')
  };

  useEffect(() => {
    
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages]);
  return (





    
<div className="chat-app">
      <div className="message-list"  ref={messageListRef}> 
        {messages.map((message, index) => (
          <Message key={index} message={message} setMessages ={setMessages}  messages={messages}/>
        ))}
      </div>
      <div className="message-input">
        <input type="text" placeholder="Type your message..." onChange={(e)=>Settext(e.target.value)} value={text} />
        <button onClick={() => text&& handleMessageSend(text)}>Send</button>
      </div>
    </div>
  )
}

export default ChatApp