const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');

function getRandomColor(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}


function createGrid(gridSize){
  container.innerHTML = '';
  let itemSize = `${100/gridSize}%`;

  for (let i = 0; i < gridSize*gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = itemSize;
    div.style.height = itemSize;
    container.appendChild(div);
  }

  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item =>{
    item.addEventListener('mouseover',()=>{
      item.style.backgroundColor = getRandomColor();
    })
  })

}



createGrid(16);

resetButton.addEventListener('click',()=>{
  const Size = prompt('Enter the grid size (max 100):',16);
  if(Size!= null){
    const newSize = parseInt(Size);
    if(newSize>0 && newSize<=100){
      createGrid(newSize);
    }else{
      alert('Please enter a valid size between 1 and 100.');
    }
  }
})










