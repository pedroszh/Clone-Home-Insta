const languageSelect = document.getElementById('language-select');

const translations = {
  "pt-br": {
    "login": "Entrar",
    "register": "Cadastre-se",
    "forgot_password": "Esqueceu a senha?"
  },
  "en": {
    "login": "Login",
    "register": "Sign up",
    "forgot_password": "Forgot password?"
  },
  "es": {
    "login": "Iniciar sesión",
    "register": "Registrarse",
    "forgot_password": "¿Olvidó su contraseña?"
  }
};

languageSelect.addEventListener('change', () => {
  const selectedLanguage = languageSelect.value;
  const translation = translations[selectedLanguage];

  document.getElementById('login-button').value = translation.login;
  document.getElementById('register-link').textContent = translation.register;
  document.getElementById('forgot-password-link').textContent = translation.forgot_password;
});
