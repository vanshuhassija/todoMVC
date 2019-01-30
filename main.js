var todoItem = function(caption) {
  this.caption = caption;
  this.isCompleted = false;
  this.toShow = true;

  this.toggle = function() {
    console.log("toggle called");
    this.isCompleted = !this.isCompleted;
  };
};
var todoApp = new function() {
  this.todoCollection = [];
  this.render = function() {
    //alert("i am in render");
    document.getElementById("myUL").innerHTML = "";
    for (var i = 0; i < this.todoCollection.length; i++) {
      //alert("Entered in for loop");
      var li = document.createElement("li");
      var inputvalue = this.todoCollection[i].caption;
      var t = document.createTextNode(this.todoCollection[i].caption);
      //alert("" + inputvalue);
      li.appendChild(t);
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      var btn = document.createElement("button");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "chec";
      li.appendChild(checkbox);
      document.getElementById("myUL").appendChild(li);
      var close = document.getElementsByClassName("close");
      //textNOde(this.todoCollection[i].caption);
      if (this.todoCollection[i].isCompleted === true) {
        li.className = "checked";
      }
      if (this.todoCollection[i].toShow === false) {
        li.style.display = "none";
      }
      var checks = document.getElementsByClassName("chec");
      for (var k = 0; k < checks.length; k++) {
        checks[k].onclick = function(k) {
          todoApp.todoCollection[k].toggle();
          todoApp.render();
        }.bind(null, k);
      }

      for (j = 0; j < close.length; j++) {
        close[j].onclick = function(j) {
          console.log("Be awared i will delete index" + j);
          alert("j is" + j);

          //var div = this.parentElement;

          //div.style.display = "none";
          todoApp.todoCollection.splice(j, 1);
          console.log(todoApp.todoCollection);
          todoApp.render();
        }.bind(null, j);
      }
    }
  };
}();

// var appObj = new todoApp();

document.getElementById("addBtn").addEventListener("click", function() {
  //alert("Tohfa aaya");
  var newTask = document.getElementById("myInput").value;
  //alert("value of" + newTask);
  var todoItemObj = new todoItem(newTask);
  //todoItemObj.caption = newTask;
  todoApp.todoCollection.push(todoItemObj);
  todoApp.render();
});
document.getElementById("completes").addEventListener("click", function(i) {
  for (var i = 0; i < todoApp.todoCollection.length; i++) {
    todoApp.todoCollection[i].toShow = true;
  }
  for (var i = 0; i < todoApp.todoCollection.length; i++) {
    if (todoApp.todoCollection[i].isCompleted == false) {
      console.log("Me i=" + i + " Ke liye aaya hu");

      todoApp.todoCollection[i].toShow = false;
      console.log(todoApp.todoCollection);
    }
  }
  todoApp.render();
});
document.getElementById("actives").addEventListener("click", function(i) {
  for (var i = 0; i < todoApp.todoCollection.length; i++) {
    todoApp.todoCollection[i].toShow = true;
  }
  for (var i = 0; i < todoApp.todoCollection.length; i++) {
    if (todoApp.todoCollection[i].isCompleted == true) {
      console.log("Me i=" + i + " Ke liye aaya hu");

      todoApp.todoCollection[i].toShow = false;
      console.log(todoApp.todoCollection);
    }
  }

  todoApp.render();
});
document.getElementById("showsAll").addEventListener("click", function(i) {
  for (var i = 0; i < todoApp.todoCollection.length; i++) {
    todoApp.todoCollection[i].toShow = true;
  }

  todoApp.render();
});
