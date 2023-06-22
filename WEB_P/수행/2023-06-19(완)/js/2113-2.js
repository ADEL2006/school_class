document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.guest');
    const nameInput = document.querySelector('.name');
    const emailInput = document.querySelector('.email');
    const dateInput = document.querySelector('.date');
    const contentInput = document.querySelector('.content');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const date = dateInput.value;
        const content = contentInput.value;

        const message = 
            `이름: ${name}\n` +
            `이메일: ${email}\n` +
            `방문일: ${date}\n` +
            `내용: ${content}`;

        alert(message);

        form.reset();
    });
});
