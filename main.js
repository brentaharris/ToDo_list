"use strict";

//dom cache
const list = document.querySelector(".list");
const addBtn = document.querySelector(".btn--add");
const listInput = document.querySelector(".list-input");

//event listeners
addBtn.addEventListener("click", addListItem);
listInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addBtn.click();
  }
});

//functions

function addListItem() {
  const listValue = listInput.value;
  if (listValue == "") {
    alert("Enter text first before adding to list");
  } else {
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
}

function deleteItem(e) {
  const itemDelete = e.target.parentElement;
  itemDelete.classList.add("item-delete"); //adds animation but will need to do before delete
  itemDelete.addEventListener("transitionend", function () {
    itemDelete.remove();
  });
}
