import React from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h2>This is the {roomId} route</h2>
    </div>
  )
}

export default Chat
