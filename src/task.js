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
  setMyName(myName) {
    this.myName = myName;
    return this;
  },
});
console.log(createUser({ myName: 'Chris', avatar: 'chris.png' }));

const renderProjects = () => {
  projects.forEach((project) => {
    createLineforProjectList();
    spanTitleHolder.dataset.projectId = project.id;
    spanTitleHolder.innerText = project.name;
    if (project.id === selectedProjectId)
      spanTitlHolder.classList.add('active-project');
    projectList.appendChild(listElement);
  });
};
