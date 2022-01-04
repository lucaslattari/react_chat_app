import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [text, setText] = useState('');
  const [isTyping, setTyping] = useState(false);
  const { chatId, creds } = props;
  console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault(); //https://www.w3schools.com/jsref/event_preventdefault.asp

    //const text_msg = text.trim();

    //console.log(text_msg, text);

    if (text.length > 0){
      sendMessage(creds, chatId, { text });
      setText('');
    }
    setTyping(false);
  }

  const handleChange = (event) => {
    const text_msg = event.target.value;
    //console.log(chatId);
    setText(text_msg);
    //isTyping(props, chatId);

    if (text_msg.length > 0)
      setTyping(true);
    else
      setTyping(false);
  }

  return(
    <div>
      {isTyping ? <div style={{float: 'left'}}>{props.userName} está digitando...</div> : <div/>}
      <br/>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="message-input"
          placeholder="Envie uma mensagem..."
          value={text}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default MessageForm;
