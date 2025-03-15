
class Todo {
  counter = 1;
  tasks = [];

  // CREATE
  create({ name, description }) {
    this.tasks.push({ id: this.counter++, name: name, description: description });
  }

  // READ
  find(id) {
    return this.tasks.find((task) => task.id === id);
  }
  findAll() {
    return this.tasks;
  }

  // UPDATE
  update(id, { name, description }) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], name, description };
    }
  }

  // DELETE
  delete(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}

const test = new Todo();
// CREATE
// ID: 1
test.create({
  name: "Test",
  description: "Hello World"
});
// ID: 2
test.create({
  name: "Test2",
  description: "Hello Lord!"
});
// READ
console.log("READ: \n", test.findAll());
// UDPATE
test.update(2, { name: "Elon Test", description: "Hello Mars!" });
console.log("UPDATE: \n", test.findAll());
// DELETE
test.delete(1);
console.log("DELETE: \n", test.findAll());