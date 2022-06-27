const generateCards = (() => {
  const cards = document.querySelectorAll('.extended>.card');
  // cards[0].setAttribute('data-icon', 'cloud-rain');
  cards.forEach((card) => {
    card.appendChild(document.createElement('div')).classList.add('day');
    card.appendChild(document.createElement('div')).classList.add('max-temp');
    card.appendChild(document.createElement('div')).classList.add('min-temp');
    const icon = card.appendChild(document.createElement('span'));
    icon.classList.add('iconify');
  });
})();

export default generateCards;
