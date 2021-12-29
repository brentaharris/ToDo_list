"use strict";

//dom selectors
const list = document.querySelector(".list");
const addBtn = document.querySelector(".btn--add");
const listInput = document.querySelector(".list-input");

//e listeners
addBtn.addEventListener("click", addListItem);
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
  e.target.parentElement.remove();
}
