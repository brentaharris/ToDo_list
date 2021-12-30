"use strict";

//dom selectors
const list = document.querySelector(".list");
const addBtn = document.querySelector(".btn--add");
const listInput = document.querySelector(".list-input");

//e listeners
addBtn.addEventListener("click", addListItem);
listInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addBtn.click();
  }
});
//fns

function addListItem() {
  const listValue = listInput.value;
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = listValue;
  list.appendChild(listItem);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.innerText = "X";
  listItem.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteItem);
  listInput.value = "";
}

function deleteItem(e) {
  const itemDelete = e.target.parentElement;
  itemDelete.classList.add("item-delete"); //adds animation but will need to do before delete
  itemDelete.addEventListener("transitionend", function () {
    itemDelete.remove();
  });
}
