/// <reference path="todo-classes-interfaces.ts" />
var TodoList;
(function (TodoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    TodoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(TodoList || (TodoList = {}));
