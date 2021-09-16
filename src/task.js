/* const task = {
  title: '',
  description: '',
  dueDate: '',
  priority: '',
} */



const createTask = ({ title, description, dueDate, priority }) => ({
  title,
  description,
  dueDate,
  priority,
  setMyName (myName) {
    this.myName = myName;
    return this;
  }
});
console.log(createUser({ myName: 'Chris', avatar: 'chris.png' }));
