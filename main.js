const toggleBtn = document.querySelector('.bar_toolbtn');
const menu = document.querySelector('.bar_menu')
const icon = document.querySelector('.bar_links')

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});
