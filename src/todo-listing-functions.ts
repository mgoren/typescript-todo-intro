/// <reference path="todo-classes-interfaces.ts" />
module TodoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Array<Task>): Array<string> {
    var descriptions: Array<string> = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
