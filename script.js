const MENU = document.getElementById('MENU');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// const button_borderd = document.getElementById('button_borderd');

// button_borderd.addEventListener('click', (event) => {
//     button.querySelectorAll('button').forEach(el => el.na.remove('active'));
//     event.target.classList.add('active');
// });
