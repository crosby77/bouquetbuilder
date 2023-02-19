const vase = document.querySelector('.vaseImage');

vase.addEventListener('dragstart', dragStart);

function dragStart(e) {
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('hide');
 }

