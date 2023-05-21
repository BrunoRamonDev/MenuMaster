function addItem() {
    var input = document.getElementById("inputText");
    var itemText = input.value;
  
    if (itemText !== "") {
      var itemList = document.getElementById("itemList");
      var listItem = document.createElement("li");
      var quantity = prompt("Digite a quantidade desejada para '" + itemText + "':");
  
      if (quantity !== null && quantity !== "") {
        listItem.textContent = itemText + " (x" + quantity + ")";
        itemList.appendChild(listItem);
        input.value = "";
      }
    }
  }
  
function addItemOnEnter(event) {
    if (event.keyCode === 13) {
        addItem();
    }
}
  
function copyList() {
  var itemList = document.getElementById("itemList");
  var items = itemList.getElementsByTagName("li");

  var greeting = document.getElementById("greeting").textContent;
  var message = greeting + "\n\n";

  for (var i = 0; i < items.length; i++) {
    message += items[i].textContent + "\n";
  }

  var address = document.getElementById("addressInput").value;
  message += "\nEndereço: " + address;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message)
      .then(function() {
        alert("Lista copiada para a área de transferência!");
      })
      .catch(function() {
        alert("Não foi possível copiar a lista.");
      });
  } else {
    alert("Não é possível copiar a lista neste dispositivo.");
  }
}
  
  function deleteLastItem() {
    var itemList = document.getElementById("itemList");
    var items = itemList.getElementsByTagName("li");
    var lastItem = items[items.length - 1];
  
    if (lastItem) {
      itemList.removeChild(lastItem);
    }
  }
  
  function clearList() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
  }
  
  function getGreeting() {
    var date = new Date();
    var hour = date.getHours();
    var greeting;
  
    if (hour >= 6 && hour < 12) {
      greeting = "Bom dia, gostaria de pedir:";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Boa tarde, gostaria de pedir:";
    } else {
      greeting = "Boa noite, gostaria de pedir:";
    }
  
    document.getElementById("greeting").textContent = greeting;
  }
  
  getGreeting();
