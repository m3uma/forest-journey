const userName = document.querySelector('.name-js');
const userEmail = document.querySelector('.mail-js');
const userMessage = document.querySelector('.message-js');
const sendButton = document.querySelector('.form__button');

sendButton.onclick = (event) => {
    event.preventDefault();
    console.log(`User: ${userName.value}, E-mail: ${userEmail.value}, Message: ${userMessage.value}`);
    document.querySelector('.form').reset();
}
