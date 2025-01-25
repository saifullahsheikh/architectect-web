   
   let iconham = document.querySelector('.iconham');
   let menus = document.querySelector('.menu');
   let hammenu = document.querySelector('.hammenu');

   iconham.addEventListener('click', () => {
       if (menus.style.visibility === 'visible') {
           menus.style.visibility = 'hidden';
           hammenu.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png';

       } else {
        hammenu.src = 'https://img.icons8.com/ios_filled/512/delete-sign--v2.png';
           menus.style.visibility = 'visible';
       }
   });


