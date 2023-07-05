import { useState, useEffect } from 'react';
import list from './data/list';
import List from './components/List';
import { READ, UNREAD } from './constant';
import Controls from './components/controls'


function App() {
  const [messages, setMessages] = useState(list);

  useEffect(() => {
	const isAllMessagesRead = messages.every(({ status }) => status === READ);
  
	if (isAllMessagesRead) {
	  alert('Parabéns! Você leu todas suas mensagens!');
	}
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  };

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: READ }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: UNREAD }));
    setMessages(allAsRead);
  };

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

	  <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />

      <List messages={ messages }
	  setMessageStatus={ setMessageStatus}
	  />
    </div>
  );
}

export default App;
