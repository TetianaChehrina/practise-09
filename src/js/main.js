// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// недоступними для змін.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};
const STORAGEKEY = 'form-data';
const form = document.querySelector('#login-form');
const inputs = document.querySelectorAll('.login-input');
const button = document.querySelector('.login-btn');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  if (button.textContent === 'Logout') {
    localStorage.removeItem(STORAGEKEY);
    form.reset();
    inputs.forEach(input => input.removeAttribute('readonly'));
    button.textContent = 'Login';
    return;
  }

  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();
  if (emailValue === '' || passwordValue === '') {
    iziToast.warning({
      message: `Fill all fields`,
      position: 'topRight',
    });
    return;
  }

  if (emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
    iziToast.warning({ message: `Incorrect data`, position: 'topRight' });
    return;
  }

  localStorage.setItem(
    STORAGEKEY,
    JSON.stringify({ email: emailValue, password: passwordValue })
  );
  button.textContent = 'Logout';
  inputs.forEach(input => input.setAttribute('readonly', true));
}

const saveData = localStorage.getItem(STORAGEKEY);

if (saveData) {
  const parsedData = JSON.parse(saveData);

  inputs[0].value = parsedData.email || '';
  inputs[1].value = parsedData.password || '';

  button.textContent = 'Logout';
  inputs.forEach(input => input.setAttribute('readonly', true));
}
