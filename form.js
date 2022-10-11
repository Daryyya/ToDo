// const popupBtn = document.createElement('button');
// popupBtn.className = 'popupBtn';
// popupBtn.textContent = 'Регистрация';
// document.body.prepend(popupBtn);

// const popupWindow = document.createElement('div');
// popupWindow.className = 'popupWindow';
// document.body.prepend(popupWindow);

// const modal = document.createElement('div');
// modal.className = 'modal';
// popupWindow.prepend(modal);

// const modalForm = document.createElement('form');
// modalForm.className = 'modalForm';

// modal.prepend(modalForm);

// const username = document.createElement('span');
// username.textContent = 'Username';

// const inputUsername = document.createElement('input');
// inputUsername.className = 'input';

// const password = document.createElement('span');
// password.textContent = 'Password';

// const inputPassword = document.createElement('input');
// inputPassword.className = 'input';

// const email = document.createElement('span');
// email.textContent = 'Email';

// const inputEmail = document.createElement('input');
// inputEmail.className = 'input';

// const formBtn = document.createElement('button');
// formBtn.className = 'modalBtn';
// formBtn.textContent = 'Зарегистрироваться';

// const modalBtn = document.createElement('button');
// modalBtn.className = 'modalBtn';
// modalBtn.textContent = 'Закрыть';

// modalForm.prepend(username, inputUsername, password, inputPassword, email, inputEmail, formBtn, modalBtn);


// popupBtn.addEventListener('click', showPopup);

// function showPopup () {
//     popupWindow.style.display = 'flex';
//     document.body.style.overflow = 'hidden';
// }

// modalBtn.addEventListener('click', hidePopup);

// popupWindow.addEventListener('click', hidePopup);

// modal.addEventListener('click', (event) => event.stopPropagation());

// function hidePopup () {
//     popupWindow.style.display = 'none';
//     document.body.style.overflow = '';
// }

// modalForm.addEventListener('submit', (event) => event.preventDefault());

// formBtn.addEventListener('click', () => {
//     console.log(inputUsername.value);
//     console.log(inputPassword.value);
//     console.log(inputEmail.value);
//     fetch('http://localhost:3000/user', {
//         method: "POST",
//         headers: {
//             "Content-type" : "application/json",
//         },
//         body: JSON.stringify( {
//             "username" : `${inputUsername.value}`,
//             "password_hash" : `${inputPassword.value}`,
//             "email" : `${inputEmail.value}`,
//         })
        
//     }).then(res => res.json()).then(data => console.log(data.message));
// })