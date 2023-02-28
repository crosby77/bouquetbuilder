function handleDragStart(_e) {
    this.style.opacity = '0.4';
    console.log("nice drage");
  }
  
  function handleDragEnd(_e) {
    this.style.opacity = '1';
  }
  
  let items = document.getElementsByClassName("img-responsive");
  console.log(items)

  for(let i = 0; i < items.length; i ++){
    items[i].addEventListener('dragstart', handleDragStart);
    items[i].addEventListener('dragend', handleDragEnd);
    
  };
