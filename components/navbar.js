export const createNavbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.textContent = 'Todo App';

    nav.appendChild(h1);
    return nav;
}