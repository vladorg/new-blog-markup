window.addEventListener('load', () => {

  const body = document.querySelector('body');
  const burger_btn = document.querySelector('#burger');
  const navigation = document.querySelector('#navigation');

  const contents_opener = document.querySelector('#contents_open');
  const contents = document.querySelector('#contents');
  const contents_closer = document.querySelector('#contents_close');

  const content_wrap = document.querySelector('.content');
  const content_elements = content_wrap.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const content_headers_store = document.querySelector('#contents ul');

  let content_headers_offsets = [];

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


  document.addEventListener('scroll', globalScroll);


















  function globalScroll() {
    const currentScroll = window.scrollY;
    const content_headers_anchors = document.querySelectorAll('#contents ul li');
    const content_end_offset = content_wrap.getBoundingClientRect().bottom;
    let currentStep = null;

    content_headers_offsets.forEach((el, i) => {
      if (el.offset) {
        if ((currentScroll + 50) > el.offset) {
          currentStep = i;
        }
      }
    });


    content_headers_anchors && content_headers_anchors.forEach((el, i) => {
      if (i == currentStep && content_end_offset > 100) {
        el.classList.add('active');      
      } else {
        el.classList.remove('active');
      }
    });

  }



  function getContentHeaders() {
    content_elements && content_elements.forEach((el, i) => {
      const screenOffsetByDocument = (el.getBoundingClientRect().top + window.scrollY) ;
      const el_id = 'content_header-' + (i + 1);

      content_headers_offsets.push({
        offset: screenOffsetByDocument,
        title: el.innerHTML,
        id: el_id
      });

      el.id = el_id;

      content_headers_store.innerHTML += `<li><a href="#${el.id}" class="content-anchor">${el.innerHTML}</a></li>`;
    });
  }

});
