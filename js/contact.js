document.querySelector('.form__button').onclick = (event) => {
    const userName = document.querySelector('.name-js').value;
    const userEmail = document.querySelector('.mail-js').value;
    const userMessage = document.querySelector('.message-js').value;

    event.preventDefault();
    console.log(`User: ${userName}, E-mail: ${userEmail}, Message: ${userMessage}`);
    document.querySelector('.form').reset();

    if(userName && userEmail && userMessage)
        sendEmail(userName, userEmail, userMessage);
    else
        alert("Fill in the missing data");
}

function sendEmail(name, email, message) {
    Email.send({
        SecureToken: "f836f703-2fed-4bfc-83ae-4efca20ba4e5",
        To: 'dev.test.mail669@gmail.com',
        From: `${email}`,
        Subject: `${name} send you a message`,
        Body: `Name: ${name} <br /> Email: ${email} <br /> Message: ${message}`,
    }).then(() => alert("Message sent successfully!"));
}
