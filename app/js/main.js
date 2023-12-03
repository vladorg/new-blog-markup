window.addEventListener('load', () => {

  const body = document.querySelector('body');
  const burger_btn = document.querySelector('#burger');
  const navigation = document.querySelector('#navigation');

  const contents_opener = document.querySelector('#contents_open');
  const contents = document.querySelector('#contents');
  const contents_closer = document.querySelector('#contents_close');

  burger_btn.addEventListener('click', e => {
    body.classList.toggle('overlay');
    navigation.classList.toggle('opened');
    burger_btn.classList.toggle('active');
  });

  contents_opener.addEventListener('click', e => {
    contents_opener.classList.add('active');
    contents.classList.add('opened');
  });

  contents_closer.addEventListener('click', e => {
    contents_opener.classList.remove('active');
    contents.classList.remove('opened');
  });


  getContentHeaders();











  function getContentHeaders() {
    const wrap = document.querySelector('.content');
    const elements = wrap.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const store = document.querySelector('#contents ul');
    //let headers = [];

    //elements.forEach(el => headers.push(el.innerText))
    elements.forEach(el => {
      store.innerHTML += `<li>${el.innerText}</li>`;
    });
  }

});
