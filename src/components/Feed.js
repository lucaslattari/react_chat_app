import Message from './Message';
import MessageForm from './MessageForm';

const Feed = (props) => {
  //console.log(props);

  const { chats, activeChat, userName, messages } = props;

  //se existir chats
  if (chats != null){
    const currentChat = chats[activeChat]; //retorna o chat atual

    //console.log(messages); //https://youtu.be/jcOKU9f86XE?t=1250

    const renderMessages = () => {
      const keys = Object.keys(messages);

      return keys.map((key, index) => {
        const message = messages[key];
        //https://www.w3schools.com/react/react_css.asp
        //console.log(message);
        return(
          <div key={key} style={{ width: '100%' }}>
            <div className="message-block">
              <Message username={message.sender.username} text={message.text} />
            </div>
          </div>
        );
      });
    }

    //console.log(currentChat?.people);

    return(
        <div className="chat-feed">
          <div className="chat-title-container">
            <div className="chat-title">{currentChat?.title}</div>
            <div className="chat-subtitle">
              {
                currentChat?.people.map((p) => `${p.person.username}`)
              }
            </div>
            {renderMessages()}
            <div className="message-form-container">
              <MessageForm {... props} chatId={activeChat} />
            </div>
          </div>
        </div>
    );
  }else{
    return(
      <div>não há mensagens...</div>
    );
  }
}

export default Feed;
