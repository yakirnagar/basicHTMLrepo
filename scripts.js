const nameInput = document.body.querySelector('input[name=myname]');
const sendButton = document.body.querySelector('input[type=button]');

sendButton.addEventListener('click', () => {
    console.log('clicked', nameInput.value);
    const myDiv = document.body.querySelector('.myclass');
    myDiv.innerHTML = `<p>Welcome to the HTML jungle ${nameInput.value}</p>`;
    myDiv.style.color = 'red';
});
