//grab elements
let allButtonSpans = document.querySelectorAll(".buttons span"),
    resultSpan = document.querySelector(".results > span"),
    input = document.getElementById("main-input"),
    inputValue = input.value;

    allButtonSpans.forEach(span => {
      span.addEventListener('click', (e) => {

        if(e.target.classList.contains('check-item')) {
          checkItem();
        }

        if(e.target.classList.contains('add-item')) {
          addItem();
        }

        if(e.target.classList.contains('delete-item')) {
          deleteItem();
        }

        if(e.target.classList.contains('show-item')) {
          showItem();
        }

      });
    });

function checkInputField() {
  resultSpan.innerHTML = "input field can't be empty";
}

function checkItem() {
  if(input.value !== '') {
    if(localStorage.getItem(input.value)) {
      resultSpan.innerHTML = `Item <span>${input.value}</span> found in local storage`;
    } else {
      resultSpan.innerHTML = `Item <span>${input.value}</span> not found in local storage`;
    }
  } else {
    checkInputField();
  }
}

function addItem() {
  if(input.value !== '') {
    localStorage.setItem(input.value, "test");
    resultSpan.innerHTML = `Item <span>${input.value}</span> has been succssfully added to local storage`;
    input.value = '';
  } else {
    checkInputField();
  }
}

function deleteItem() {
  if(input.value !== '') {
    if(localStorage.getItem(input.value)) {
      localStorage.removeItem(input.value);
      resultSpan.innerHTML = `Item <span>${input.value}</span> found in local storage is deleted`;
    } else {
      resultSpan.innerHTML = `Item <span>${input.value}</span> not found in local storage`;
    }
  } else {
    checkInputField();
  }
}

function showItem() {
  if(localStorage.length) {
    console.log(`found ${localStorage.length} elements`);
    resultSpan.innerHTML = '';
    for(let [key, value] of Object.entries(localStorage)) {
      resultSpan.innerHTML += `<span class="keys">${key}</span> `;
    }
  } else {
    resultSpan.innerHTML = "local storage is empty";
  }
}
