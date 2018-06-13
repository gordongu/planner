function setFullYear(elementId) {
  var date = new Date();
  document.getElementById(elementId).innerHTML = date.getFullYear();
}

function setMonth(elementId) {
  var date = new Date();
  document.getElementById(elementId).innerHTML = date.getMonth() + 1;
}

function setMonthString(elementId) {
  var date = new Date();
  switch (date.getMonth()) {
    case 0:
      document.getElementById(elementId).innerHTML = "January";
      break;
    case 1:
      document.getElementById(elementId).innerHTML = "February";
      break;
    case 2:
      document.getElementById(elementId).innerHTML = "March";
      break;
    case 3:
      document.getElementById(elementId).innerHTML = "April";
      break;
    case 4:
      document.getElementById(elementId).innerHTML = "May";
      break;
    case 5:
      document.getElementById(elementId).innerHTML = "June";
      break;
    case 6:
      document.getElementById(elementId).innerHTML = "July";
      break;
    case 7:
      document.getElementById(elementId).innerHTML = "August";
      break;
    case 8:
      document.getElementById(elementId).innerHTML = "September";
      break;
    case 9:
      document.getElementById(elementId).innerHTML = "October";
      break;
    case 10:
      document.getElementById(elementId).innerHTML = "November";
      break;
    case 11:
      document.getElementById(elementId).innerHTML = "December";
      break;
  }
}

function setDate(elementId) {
  var date = new Date();
  document.getElementById(elementId).innerHTML = date.getDate();
}

function setDay(elementId) {
  var date = new Date();
  document.getElementById(elementId).innerHTML = date.getDay();
}

/*function delegateEvent(elementId, parent) {
  document.getElementById(parent).addEventListener("click", function(e) {
  	// e.target was the clicked element
    if (e.target && e.target.nodeName === elementId) {
      // return statement
  	}
  });
}*/

function toggleElement(elementId, elementToEdit) {
  var element = document.getElementById(elementToEdit);

  document.getElementById(elementId).addEventListener("click", function(e) {
    if (e.target.classList.contains("active")) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  });
}

/*function hideElementX(elementId, elementToHide) {
  var element = document.getElementById(elementToHide);

  document.getElementById(elementId).addEventListener("click", function(e) {
    if (element.style.display && element.style.display !== "none") {
      element.style.display = "none";
    }
    else {
      element.style.display = "block";
    }
  });
}

function hideElementY(elementId, elementToHide) {
  var element = document.getElementById(elementToHide);

  document.getElementById(elementId).addEventListener("click", function(e) {
    if (element.style.display && element.style.display === "none") {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  });
}*/

function fillDates(row) {
  var date = new Date();
  var rowContainer = document.getElementById(row);
  var iterator = 0;
  var temp = new Date(date.getFullYear(), date.getMonth(), 1);
  temp.setDate(temp.getDate() - temp.getDay());

  for (var i = 0; i < 6; i++) {
    rowContainer.innerHTML += `<div class="row date-row" id="date-row-${i}"></div>`;

    for (var j = 0; j < 7; j++) {
      var newElement = document.createElement("div");
      newElement.id = `date-col-${iterator}`;
      newElement.className = "col date-col";
      newElement.innerHTML = temp.getDate();
      document.getElementById(`date-row-${i}`).appendChild(newElement);
      //document.getElementById(`date-row-${i}`).innerHTML += `<div class="col date-col" id="date-col-${j}">${temp.getDate()}</div>`;
      temp.setDate(temp.getDate() + 1);
      iterator++;
    }
  }
}

function getClickedElement(parent) {
  document.getElementById(parent).addEventListener("click", function(e) {
  	// e.target was the clicked element
    return e.target.id;
  });
}

function highlightClickedElement(parent) {
  document.getElementById(parent).addEventListener("click", function(e) {
    var elementArray = document.getElementsByClassName(e.target.className);

    for (var i = 0; i < elementArray.length; i++) {
      var element = elementArray[i];

      if (e.target.id != element.id) {
        element.classList.remove("active");
      }
    }

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    }
    else {
      e.target.className += " active";
    }
  });
}

function addEvent() {
  var activeElements = document.getElementsByClassName("active");
  var string = document.getElementById("input").value;

  var newRow = document.createElement("div");
  newRow.className = "row event-row";
  var newCol = document.createElement("div");
  newCol.className = "col event-col";
  newCol.innerHTML = string;

  newRow.appendChild(newCol);

  for (var i = 0; i < activeElements.length; i++) {
    activeElements[i].appendChild(newRow);
  }

  document.getElementById("input").value = "";
}

function openMenu(elementId, x, y) {

}

function closeMenu(elementId, x, y) {

}
