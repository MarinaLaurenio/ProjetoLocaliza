//botao toggle navbar
const toggleButton = document.getElementById('toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav-links');
});



//Animação do scroll
const scrollAnima = document.querySelector('[data-anima="scroll"]');
const halfWindow = window.innerHeight * 2.5;

function animaScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top; //distancia ate o topo
    const itemVisible = (topoItem - halfWindow) < 0;
    const isAtTop = window.pageYOffset === 0;
    if (itemVisible && !isAtTop) {
        scrollAnima.classList.add('show-button');
    } else {
        scrollAnima.classList.remove('show-button');
    }
};

window.addEventListener('scroll', animaScroll);


//Scroll suave
const linkInterno = document.querySelector('[data-scroll="smooth"] a[href^="#"]');
function scrollTop(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const topo = document.querySelector(href);
    topo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

linkInterno.addEventListener('click', scrollTop);



// Modal Login
const btnLogin = document.getElementById('btn-login');
const myModalLogin = document.getElementById('my-modal-login');
const fecharModalLogin = document.getElementById('close-login');

btnLogin.onclick = function () {
    myModalLogin.style.display = 'block';
}

fecharModalLogin.onclick = function () {
    myModalLogin.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == myModalLogin) {
        myModalLogin.style.display = 'none';
    } else if (event.target == myModalRegister) {
        myModalRegister.style.display = 'none';
    }
}

//Modal Cadastro
const btn1Article = document.getElementById('btn1-article');
const btn2Article = document.getElementById('btn2-article');
const btn3Article = document.getElementById('btn3-article');
const btn4Article = document.getElementById('btn4-article');
const btn5Article = document.getElementById('btn5-article');
const btn6Article = document.getElementById('btn6-article');
const btn7Article = document.getElementById('btn7-article');
const btn8Article = document.getElementById('btn8-article');
const myModalRegister = document.getElementById('my-modal-register');
const fecharModalRegister = document.getElementById('close-register');

btn1Article.onclick = function () {
    myModalRegister.style.display = 'block';
}

btn2Article.onclick = function () {
    myModalRegister.style.display = 'block';
}
btn3Article.onclick = function () {
    myModalRegister.style.display = 'block';
}

btn4Article.onclick = function () {
    myModalRegister.style.display = 'block';
}
btn5Article.onclick = function () {
    myModalRegister.style.display = 'block';
}
btn6Article.onclick = function () {
    myModalRegister.style.display = 'block';
}
btn7Article.onclick = function () {
    myModalRegister.style.display = 'block';
}
btn8Article.onclick = function () {
    myModalRegister.style.display = 'block';
}

fecharModalRegister.onclick = function () {
    myModalRegister.style.display = 'none';
}

//botao cadastro leva a pagina de reserva

/*const btnRegister = document.querySelector('#btn-register');
btnRegister.addEventListener('click',function(){
    const formFields = document.querySelectorAll('input');
    let allFieldsFilled = true;

    formFields.forEach(function(field){
        if (field.value === ''){
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        window.location.href = 'paginaReserva.html';
    } else {
        alert ('Por favor, preencha todos os campos!')
    }
});*/