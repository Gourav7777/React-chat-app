import { Avatar } from '@chakra-ui/react';
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

    <>
    
    <div className="message">

     <div style={{
      display:'flex',
      justifyContent:'center',
      gap:'15px',
      alignItems:'center'
     }}>

      <Avatar name={message.user} src='https://bit.ly/broken-link' />
      <h2  style={{
        fontSize:'24px'
      }}>{message.user}</h2>
     </div>


      <div className="message-likes">
        <button onClick={handleLike}  style={{
          fontSize:'25px'
        }}  >👍</button>
        <span style={{
          fontSize:'20px'
        }} >{message.likes} {message.likes<=1?' Like ':'Likes'}</span>
      </div>

      </div>

        <span className="message-text" style={{


display: 'block',
marginLeft: '80px',
marginRight: '80px',
fontSize: '18px',
wordWrap: 'break-word',  
whiteSpace: 'normal',    
textAlign: 'left',       


  marginTop:'-20px',
  border:'1px solid white',
borderTopRightRadius:'10px',
borderTopLeftRadius:'1px',
borderBottomLeftRadius:'10px',
borderBottomRightRadius:'10px',
borderWidth: '1px 1px 1px 1px',
color:'black',
backgroundColor:'white',
padding:'4px',
fontSize:'18px',


}}
  
  >
      
          
        <p>
               {message.text}
          </p>
          
        </span>

      </>
  )



}

export default Message