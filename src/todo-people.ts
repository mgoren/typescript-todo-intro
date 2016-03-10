/// <reference path="todo-classes-interfaces.ts" />
module TodoList {
  var diane: TodoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: TodoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: TodoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com",
    phone: "555-666-7777"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki,
  };
}
