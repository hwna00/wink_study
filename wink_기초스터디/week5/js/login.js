const ID = 'ha07058';
const PASSWORD = 'ha';

const loginBtn = document.getElementById('sign-in');
const loginBox = document.querySelector('.login');
const profileBox = document.querySelector('.profile');

loginBtn.addEventListener('click', () => {
  login();
});

function login() {
  let id = document.getElementById('id').value;
  let pw = document.getElementById('pw').value;

  if (id == ID && pw == PASSWORD) {
    loginBox.style.display = 'none';
    profileBox.style.display = 'flex';
  } else {
    alert('아이디 또는 비밀번호가 틀렸습니다.');
  }
}
