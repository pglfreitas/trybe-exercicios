import { READ, UNREAD } from '../constant'

const List = ({ messages, setMessageStatus }) => {
  return (
    <ul className="messages-list">
      {messages.map((message) => {
        const messageClass = message.status === READ
          ? 'message-read'
          : 'message-unread';

        return (
          <li key={ message.id }>
            <p
              className={ `message-title ${messageClass}` }
            >
              {message.title}
            </p>
            <div>
              <button
                type="button"
                title="Marcar como lida"
                onClick={ () => setMessageStatus(message.id, READ) }
              >
                <img src="" alt="1" />
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={ () => setMessageStatus(message.id, UNREAD) }
              >
                <img src="" alt="2" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
	}


export default List;