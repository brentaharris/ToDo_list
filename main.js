"use strict";

//dom cache
const list = document.querySelector(".list");
const addBtn = document.querySelector(".btn--add");
const listInput = document.querySelector(".list-input");

//event listeners
document.addEventListener("DOMContentLoaded", getList);
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
    listItem.textContent = listValue;
    listItem.classList.add("list-item");
    list.appendChild(listItem);
    saveList(listValue);
    // console.log(listValue);
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
  itemDelete.classList.add("item-delete"); //adds animation before delete
  deleteList(itemDelete.firstChild.textContent);
  itemDelete.addEventListener("transitionend", function () {
    itemDelete.remove();
  });
}

function saveList(item) {
  let listArray;
  if (localStorage.getItem("listStorage") === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(localStorage.getItem("listStorage"));
  }
  listArray.push(item);
  localStorage.setItem("listStorage", JSON.stringify(listArray));
}

function getList() {
  let listArray;
  if (localStorage.getItem("listStorage") === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(localStorage.getItem("listStorage"));
  }
  listArray.forEach(function (item) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    list.appendChild(listItem);
    listItem.textContent = item;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.innerText = "X";
    listItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteItem);
    listInput.value = "";
  });
}

function deleteList(listItem) {
  let listArray;
  if (localStorage.getItem("listStorage") === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(localStorage.getItem("listStorage"));
  }
  listArray.splice(listArray.indexOf(listItem), 1);
  localStorage.setItem("listStorage", JSON.stringify(listArray));
}
