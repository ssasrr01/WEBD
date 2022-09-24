const login_btn_form = document.querySelector('#login-btn');
const register_btn_form = document.querySelector('#register-btn');
const btn = document.querySelector('#btn');
const login_btn_nav = document.querySelector('.login_btn');

const form = document.querySelector('.form-box');
const login = document.querySelector('#login');
const register = document.querySelector('#register');

const change_text = document.querySelectorAll('.will-change');

function login_form() {
    login.style.left = '50px';
    register.style.left = '450px';
    btn.style.left = '0';
}

function register_form() {
    login.style.left = '-400px';
    register.style.left = '50px';
    btn.style.left = '110px';
}

function show_form() {
    form.classList.toggle('hidden');
    email_box.classList.add('hidden');
    form.style.transition = 'all .3s ease-in-out';
}

register_btn_form.onclick = function () {
    change_text.forEach(e => e.textContent = 'Register');
}

login_btn_form.onclick = function () {
    change_text.forEach(e => e.textContent = 'login');
}

// showing login/signup form -
login_btn_nav.addEventListener('click', show_form);

// document.onclick = function (e) {
//     if (e.target.closest !== 'pk' || e.target.closest !== 'form-box') {
//         form.classList.add('hidden');
//         form.style.transition = 'all .3s ease-in-out';
//     }
// }

document.addEventListener('click', function (e) {
    if (e.target != form && e.target.parentNode != form && e.target.parentNode.parentNode != form && e.target.parentNode.parentNode.parentNode != form && e.target.parentNode.parentNode.parentNode.parentNode != form && e.target != login_btn_nav) {
        form.classList.add('hidden');
        form.style.transition = 'all .3s ease-in-out';
    }
})

// Password show/hide - 

const password = document.querySelector('.password');
const password_reg = document.querySelector('.password_reg');
const toggle = document.querySelector('.toggle');
const toggle_reg = document.querySelector('.toggle_reg');

const fg_submit_btn = document.querySelector('.fg-submit');
const container = document.querySelector('.container');
const to_hide = document.querySelector('.to-hide');
const sent_box = document.querySelector('.sent-box');
const fg_input = document.getElementById('fg-input');
const fg_form = document.getElementById('fg-form');
// const fg_login = document.querySelector('.fg-login');

const email_box = document.querySelector('.email-box');
const forgot = document.querySelector('.forgot');


function hide() {
    fg_form.addEventListener('submit', (e) => {
        fg_input.value = fg_input.value.trim();

        if (fg_input.value === '' || fg_input.value === null) {
            e.preventDefault();
        }
        else {
            container.classList.add('short');
            to_hide.classList.add('hidden');
            sent_box.classList.remove('hidden');
            sent_box.style.transition = 'all .3s ease-in-out';
        }
    })
}

fg_submit_btn.addEventListener('submit', (e) => {
    e.preventDefault();
})

function login_hide() {
    to_hide.classList.remove('hidden');
    email_box.classList.remove('hidden');
    form.classList.add('hidden');
    email_box.style.transition = 'all .3s ease-in-out';
}


function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
        if (toggle_reg) {
            toggle_reg.classList.add('hide');
            password_reg.setAttribute('type', 'text');
        }
    }
    else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
        if (toggle_reg) {
            toggle_reg.classList.remove('hide');
            password_reg.setAttribute('type', 'password');
        }
    }
}

// toggle.forEach(e => {e.addEventListener('click', showHide) });
login_btn_form.addEventListener('click', login_form);
register_btn_form.addEventListener('click', register_form)
toggle.addEventListener('click', showHide);
toggle_reg.addEventListener('click', showHide);
fg_submit_btn.addEventListener('click', hide);
forgot.addEventListener('click', login_hide);
// fg_login.addEventListener('click', show_form);

