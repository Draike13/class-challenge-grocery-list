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
  //   let quantInput = document.createElement('select');
  //   quantInput.value = row.quantity;
  row.deleteButton.textContent = 'Delete Me';
  row.deleteButton.addEventListener('click', () => {
    newDiv.remove();
    row.deleteButton.remove();
  });
  console.log(row.deleteButton);
  newDiv.innerHTML = row.item;
  newDiv.append(row.quantity);
  newDiv.append(row.deleteButton);
  holder.appendChild(newDiv);
  console.log(holder);
}
