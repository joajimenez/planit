export const createNavbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const navContent = `<div class="bottom-nav-icons-container">
          <i class="ti ti-home-2"></i>
          <p>Home</p>
        </div>

        <div class="bottom-nav-icons-container">
          <i class="ti ti-layout-kanban"></i>
          <p>Projects</p>
        </div>

        <div class="bottom-nav-icons-container">
          <i class="ti ti-list-check"></i>
          <p>Tasks</p>
        </div>

        <div class="bottom-nav-icons-container">
          <i class="ti ti-user-circle"></i>
          <p>Profile</p>
        </div>`

    nav.innerHTML = navContent;
    return nav;
}