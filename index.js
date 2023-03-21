document.addEventListener('DOMContentLoaded', (event) => {


function handleDragStart(e) {
    this.style.opacity = '0.1';
    console.log("nice drag");
     let dude1= e.dataTransfer.setData("image/png", e.target.src);
        
     console.log(dude1)

    }
  
  function handleDragEnd(e) {
    this.style.opacity = '80';

    this.classList.remove('over')
    
  }


  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect= "move";
    return false;
  }
  
  function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('over')
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.preventDefault();
    console.log('drop')
    const id = e.dataTransfer.getData("image/png");
    console.log(id);
    const draggable = document.getElementById(id);


    e.target.appendChild(draggable);


   
  }

  let items = document.getElementsByClassName("img-responsive");
  console.log(items);
  for(let i = 0; i < items.length; i ++){
    items[i].addEventListener('dragstart', handleDragStart);
    items[i].addEventListener('dragend', handleDragEnd);
    items[i].addEventListener('drop', handleDrop);


  };

let dropArea = document.getElementById("box");
console.log(dropArea);

dropArea.addEventListener('dragOver', handleDragOver);
dropArea.addEventListener('dragenter', handleDragEnter);
dropArea.addEventListener('dragleave', handleDragLeave);
dropArea.addEventListener('drop', handleDrop);


});
