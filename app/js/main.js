window.addEventListener('load', () => {

  const body = document.querySelector('body');
  const burger_btn = document.querySelector('#burger');
  const navigation = document.querySelector('#navigation');

  burger_btn.addEventListener('click', e => {
    body.classList.toggle('overlay');
    navigation.classList.toggle('opened');
    burger_btn.classList.toggle('active');
  });

});
