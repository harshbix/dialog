const dialog = document.querySelector('dialog');
const openBtn  = document.querySelector('#openBtn');
const closeBtn  = document.querySelector('#closeBtn');


openBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());