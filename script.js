class ListItem {
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
    this.deleteButton = document.createElement('button');
  }
}

function formSubmit() {
  console.log(item.value);
  console.log(quant.value);
}

let holder = document.getElementById('rowHolder');

function createRow() {
  let row = new ListItem(item.value, quant.value);
  let newDiv = document.createElement('div');
  row.deleteButton.textContent = 'Delete Me';
  row.deleteButton.addEventListener('click', () => {
    newDiv.remove();
    row.deleteButton.remove();
  });
  console.log(row.deleteButton);
  newDiv.innerHTML = row.item + row.quantity;
  newDiv.append(row.deleteButton);
  holder.appendChild(newDiv);
}
