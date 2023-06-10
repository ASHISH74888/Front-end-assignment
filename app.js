const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
container1.addEventListener('dragstart', handleDragStart);
container2.addEventListener('dragover', handleDragOver);
container2.addEventListener('drop', handleDrop);
container2.addEventListener('dragenter', handleDragEnter);
container2.addEventListener('dragleave', handleDragLeave);


const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', handleReset);
let draggedItem = null;

function handleDragStart(event) {
  draggedItem = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
  this.classList.add('dragging');
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  if (draggedItem !== this) {
    this.innerHTML = event.dataTransfer.getData('text/html');
    draggedItem.innerHTML = '';
    container2.innerHTML = `
      <div class="item" draggable="true" style="background-color:lightgreen";>Image</div>
      <div class="item" draggable="true" style="background-color:lightgreen">Frontend project</div>
      <div class="item" draggable="true" style="background-color:lightgreen">Mail📧</div>
      <div class="item" draggable="true" style="background-color:lightgreen">The day is sunny.</div>
    `;
    document.getElementById('message').textContent = 'Your Item dropped successfully!';
  }
  this.classList.remove('drag-enter');
}

function handleDragEnter(event) {
  if (draggedItem !== this) {
    this.classList.add('drag-enter');
    // container2.innerHTML = `
    //   <div class="item" draggable="true" style="background-color:lightgreen";>Image</div>
    //   <div class="item" draggable="true">Frontend project</div>
    //   <div class="item" draggable="true">Mail📧</div>
    //   <div class="item" draggable="true">The day is sunny.</div>
    // `;
  }
  // container1.innerHTML = '';

}

function handleDragLeave(event) {
  this.classList.remove('drag-enter');
}

function handleReset() {
  container1.innerHTML = `
    <div class="item" draggable="true">Image</div>
    <div class="item" draggable="true">Frontend project</div>
    <div class="item" draggable="true">Mail📧</div>
    <div class="item" draggable="true">The day is sunny.</div>
  `;
  container2.innerHTML = '';
  document.getElementById('message').textContent = '';
}