const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
  logout();
});

function logout() {
  loginBox.style.display = 'block';
  profileBox.style.display = 'none';
}
