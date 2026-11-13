
// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const menuAberto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);

    menuToggle.innerHTML = menuAberto
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();

});

// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});

// ANO AUTOMÁTICO NO RODAPÉ

const anoAtual = new Date().getFullYear();

document.getElementById("year").textContent = anoAtual;

// CARREGAR ÍCONES

lucide.createIcons();
