let inputDOM = document.querySelector('#task');
let listDOM = document.querySelector('#list');
let id = 0;

function newElement() {
  if (!inputDOM.value.trim()) {
    console.log('Bos deger giremezsiniz ! ');
    $('.error').toast('show');
  } else {
    let innerSpan = document.createElement('span');
    innerSpan.classList.add('close');
    innerSpan.innerHTML = 'x';

    let liDOM = document.createElement('li');
    liDOM.innerHTML = inputDOM.value;
    liDOM.appendChild(innerSpan);
    listDOM.appendChild(liDOM);

    liDOM.addEventListener('click', () => {
      liDOM.classList.toggle('checked');
    });

    innerSpan.addEventListener('click', (e) => {
      e.stopPropagation();
      liDOM.remove();
    });

    // success durumunda toast goster
    let $successToast = document.getElementsByClassName('success')[0];
    const delayTime = $successToast.getAttribute('data-delay');
    setTimeout(() => {
      $successToast.classList.add('hide');
      $successToast.classList.remove('show');
    }, delayTime);
    $successToast.classList.remove('hide');
    $successToast.classList.add('show');
    id++;
    inputDOM.value = ''; // inputun icini bosalt
  }
}