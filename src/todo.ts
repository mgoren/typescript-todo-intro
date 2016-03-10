/// <reference path="todo-classes-interfaces.ts" />
/// <reference path="todo-people.ts" />
/// <reference path="todo-listing-functions.ts" />

var tasks = [];

var people = TodoList.people;

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);


tasks.push(new TodoList.HomeTask("Do the dishes.", "High"));
tasks.push(new TodoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new TodoList.HomeTask("Wash the laundry.", "High", people.diane));
tasks.push(new TodoList.HobbyTask("Practice origami."));
tasks.push(new TodoList.HobbyTask("Bake a pie."));
tasks.push(new TodoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new TodoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new TodoList.WorkTask(tomorrow, "Clean ceiling.", "Low", people.loki));

console.log(tasks);

var dianeTasks = TodoList.describeTasksForPerson(people.diane, tasks);
console.log("Here are Diane's tasks: ");
for(var task of dianeTasks){
  console.log(task);
}
