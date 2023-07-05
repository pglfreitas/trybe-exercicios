const Controls = ({ markAllAsRead, markAllAsUnread }) => {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        <img src="" alt="1" />
        Marcar todas como lida
      </button>

      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        <img src="" alt="2" />
        Marcar todas como não lida
      </button>
    </div>
  );
}

export default Controls;