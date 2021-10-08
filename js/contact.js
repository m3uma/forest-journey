document.querySelector('.form__button').onclick = (event) => {
    const userName = document.querySelector('.name-js').value;
    const userEmail = document.querySelector('.mail-js').value;
    const userMessage = document.querySelector('.message-js').value;

    event.preventDefault();
    console.log(`User: ${userName}, E-mail: ${userEmail}, Message: ${userMessage}`);
    document.querySelector('.form').reset();

    sendEmail(userName, userEmail, userMessage);
}

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "dev.test.mail669@gmail.com",
        Password: "DevTestMail669",
        To: 'dev.test.mail669@gmail.com',
        From: `${email}`,
        Subject: `${name} send you a message`,
        Body: `Name: ${name} <br /> Email: ${email} <br /> Message: ${message}`,
    }).then(() => alert("Message sent successfully!"));
}
