window.onload = function () {


  //Reaction pour l'input de recherche
  const specifiedElement = document.querySelector('.caplaser-header-menu-top-ul-liSearch')
  
  document.addEventListener('click', function (event) {
    const isClickInside = specifiedElement.contains(event.target)

    specifiedElement.classList.add('selected');
    specifiedElement.classList.remove('unselected');
    if (!isClickInside) {
      specifiedElement.classList.remove('selected');
      specifiedElement.classList.add('unselected');
 
    }
  })

  //Reaction pour le bouton "NOs compétences" afin qu'il reste hover quand on est sur le menu
  const menu = document.querySelector('.caplaser-header-menu-bottom-nav-ul-li-a-ul')
  const boutonMenu = document.querySelector('.caplaser-header-menu-bottom-nav-ul-li-competences')

  document.addEventListener('mouseover', function (event) {
    const isClickInside = menu.contains(event.target)

    boutonMenu.classList.add('selected');
    boutonMenu.classList.remove('unselected');
    if (!isClickInside) {
      boutonMenu.classList.remove('selected');
      boutonMenu.classList.add('unselected');
 
    }
  })
}
