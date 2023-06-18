function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
  }
  
  function sendMessage() {
    const input = document.querySelector('.chat-input input');
    const message = input.value.trim();
  
    if (message !== '') {
      const chatMessages = document.querySelector('.chat-messages');
  
      // Create a new message container
      const newMessageContainer = document.createElement('div');
      newMessageContainer.classList.add('chat-message-container');
      newMessageContainer.classList.add('outgoing'); // Add the class for outgoing messages
  
      // Create a new message bubble
      const newMessageBubble = document.createElement('div');
      newMessageBubble.classList.add('chat-message-bubble');
      newMessageBubble.textContent = message;
  
      // Create a message info container
      const messageInfo = document.createElement('div');
      messageInfo.classList.add('message-info');
  
      // Create a span for message time
      const messageTime = document.createElement('span');
      messageTime.classList.add('message-time');
      messageTime.textContent = getCurrentTime();
  
      // Create a span for message status
      const messageStatus = document.createElement('span');
      messageStatus.classList.add('message-status');
      messageStatus.textContent = '✓';
      messageStatus.style.fontSize = '10px'; // Set the font size for the tick mark
  
      // Append the message time and status to the message info container
      messageInfo.appendChild(messageTime);
      messageInfo.appendChild(messageStatus);
  
      // Append the message bubble and info to the message container
      newMessageContainer.appendChild(newMessageBubble);
      newMessageContainer.appendChild(messageInfo);
  
      // Add the new message container to the chat messages
      chatMessages.insertBefore(newMessageContainer, chatMessages.firstChild);
  
      // Clear the input field
      input.value = '';
      input.focus();
  
      // Scroll to the bottom of the chat messages
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  const input = document.querySelector('.chat-input input');
  input.addEventListener('keydown', function(event) {
   
    if (event.key === 'Enter') {
      sendMessage();
    }
  });