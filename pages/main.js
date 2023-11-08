let array = [];
const numRow = 10;
const numCol = 10;

// Initialize the array
for(let i = 1; i <= numRow; i++){
  let row = [];
  for(let j = 1; j <= numCol; j++){
    let distance = Math.abs(i - j);
    let red = distance * 30; //color gradient adjustment
    let green = 255 - red;
    row.push({n1: i, n2: j, red, green});
  }
  array.push(row);
}

// Function to adjust the colors based on user input
function adjustColors(n1, n2, highLow){
  array.forEach((row) => {
    row.forEach((item) => {
      if(item.n2 < n1 && item.n1 >= n2){
        item.red = highLow === 'high' ? 255 : 0;
        item.green = highLow === 'high' ? 0 : 255;
      }
    });
  });
}

// Function to create the boxes in the HTML
function createBoxes() {
  let container = document.getElementById('container');
  container.innerHTML = '';  // Clear the container

  array.forEach((row) => {
    let rowDiv = document.createElement('div');
    row.forEach((item) => {
      let box = document.createElement('div');
      box.className = 'box';
      box.textContent = `${item.n1} ${item.n2}`;
      box.style.setProperty('--red', item.red);
      box.style.setProperty('--green', item.green);
      rowDiv.appendChild(box);
    });
    container.appendChild(rowDiv);
  });
}

// Event handler for the input form
document.getElementById('inputForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let n1 = parseFloat(this.elements.n1.value);
  let n2 = parseFloat(this.elements.n2.value);
  let highLow = this.elements.highLow.value;

  adjustColors(n1, n2, highLow);
  createBoxes();
});

// Initial creation of boxes
createBoxes();
  