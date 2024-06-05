document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menuItems.forEach(i => {
          i.classList.remove('active');
          i.classList.add('inactive');
        });
        item.classList.add('active');
        item.classList.remove('inactive');
      });
    });
  });
  