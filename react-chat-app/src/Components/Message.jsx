import React from 'react'

const Message = ({message,messages,setMessages}) => {

    const handleLike = () => {
        

        const updatedMessages = messages.map(msg => {
            if (msg === message) {
              return { ...msg, likes: msg.likes + 1 };
            }
            return msg;
          });
        
          setMessages(updatedMessages);


      };
  return (
    <div className="message">
      <div className="message-text">
        <span>{message.user}: {message.text}</span>
      </div>
      <div className="message-likes">
        <button onClick={handleLike}>👍</button>
        <span>{message.likes} Likes</span>
      </div>
    </div>
  )
}

export default Message