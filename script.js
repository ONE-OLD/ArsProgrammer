// script.js
document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const openChatButton = document.getElementById('open-chat');
    const closeChatButton = document.getElementById('close-chat');
    const sendMessageButton = document.getElementById('send-message');
    const messageInput = document.getElementById('message');
    const chatMessages = document.getElementById('chat-messages');

    openChatButton.addEventListener('click', function () {
        chatBox.style.display = 'block';
        openChatButton.style.display = 'none';
    });

    closeChatButton.addEventListener('click', function () {
        chatBox.style.display = 'none';
        openChatButton.style.display = 'block';
    });

    sendMessageButton.addEventListener('click', function () {
        handleMessage();
    });

    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleMessage();
        }
    });

    function handleMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            // Add user message to chat
            const userMessageElement = document.createElement('div');
            userMessageElement.textContent = `-You: ${messageText}`;
            userMessageElement.classList.add('user-message');
            chatMessages.appendChild(userMessageElement);

            // Add simulated response from "support" or "system"
            const responseElement = document.createElement('div');
            responseElement.textContent = `-Support: Thank you for your message. We will get back to you soon.`;
            responseElement.classList.add('support-message');
            chatMessages.appendChild(responseElement);

            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
        }
    }
});
