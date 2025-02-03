class ListItem {
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
    this.deleteButton = document.createElement('button');
  }
}

let holder = document.getElementById('rowHolder');

function createRow() {
  let row = new ListItem(item.value, quant.value);
  let newDiv = document.createElement('div');
  let itemHolder = document.createElement('span');
  let quantHolder = document.createElement('span');
  let deleteButton = row.deleteButton;
  newDiv.className = 'row';
  itemHolder.className = 'itemHolder';
  quantHolder.className = 'quantHolder';
  deleteButton.className = 'deleteButton';
  deleteButton.textContent = 'Delete Me';
  itemHolder.textContent = row.item;
  quantHolder.textContent = row.quantity;
  newDiv.append(itemHolder);
  newDiv.append(quantHolder);
  newDiv.append(deleteButton);
  holder.appendChild(newDiv);
  deleteButton.addEventListener('click', () => {
    newDiv.remove();
  });
  console.log(holder);
}
