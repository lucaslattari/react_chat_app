//passo 1. instalar https://www.npmjs.com/package/react-chat-engine
import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import Feed from './components/Feed';

import './App.css';

const App = () => {
  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName='admin'
        userSecret={process.env.REACT_APP_USER_SECRET}
        renderChatFeed={(chatProps) => <Feed { ... chatProps} />}
      />
      {
      //passo 2. criar conta em https://chatengine.io/
      //passo 3. env file: https://www.section.io/engineering-education/creating-a-simple-chat-app-in-react-using-the-chat-engine-api/
      //passo 4. opções de como renderizar: https://chatengine.io/docs/customize_ui/render_functions
        //https://www.freecodecamp.org/news/react-props-cheatsheet/#:~:text=7.%20React%20props%20can%20be%20spread%20in%20individually
      }
    </div>
  );
}

export default App;
