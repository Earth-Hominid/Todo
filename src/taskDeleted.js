const taskListHolder = document.createElement('div');
const projectTaskList = document.createElement('ul');
const projectTaskListLine = document.createElement('li');
const projectTaskAddButtonLine = document.createElement('li');
const taskListItemBody = document.createElement('div');
const taskCheckBox = document.createElement('input');

const taskListItemContent = document.createElement('div');
const taskListItemContentWrapper = document.createElement('div');
const taskContentTitle = document.createElement('label');
const taskContentDescription = document.createElement('div');

taskListItemContent.classList = 'task_list_item_content';
taskListItemContentWrapper.classList = 'task_list_item_wrapper';
taskContentTitle.classList = 'task_content_title';
taskContentDescription.classList = 'task_content_description';

const addTaskButton = document.createElement('button');

taskListHolder.classList = 'task_list_holder';
projectTaskList.classList = 'task_items';
// projectTaskList.setAttribute('data-tasks', '');

projectTaskListLine.classList = 'items';
projectTaskListLine.setAttribute('data-task-item', '');

taskListItemBody.classList = 'task_list_item_body';
taskListItemBody.setAttribute('role', 'button');
taskListItemBody.setAttribute('tabindex', '0');

taskCheckBox.setAttribute('type', 'checkbox');
taskCheckBox.setAttribute('aria-label', 'Mark task complete');
taskCheckBox.classList = 'task_checkbox_button';
taskCheckBox.setAttribute('tabindex', '0');
projectTaskAddButtonLine.classList = 'task_actions';
projectTaskAddButtonLine.id = 'task_actions';
projectTaskAddButtonLine.setAttribute('data-task-action', '');
addTaskButton.setAttribute('type', 'button');
addTaskButton.classList = 'task_add_button';
addTaskButton.textContent = 'Add task';
addTaskButton.setAttribute('data-task-target', '');

taskSectionElement.appendChild(taskListHolder);
taskListHolder.appendChild(projectTaskList);
projectTaskList.append(projectTaskListLine);
taskSectionElement.appendChild(projectTaskAddButtonLine);
projectTaskListLine.appendChild(taskListItemBody);
taskListItemBody.appendChild(taskCheckBox); // can add cirlce to append here
taskListItemBody.appendChild(taskListItemContent);
taskListItemContent.appendChild(taskListItemContentWrapper);
taskListItemContentWrapper.appendChild(taskContentTitle);
taskListItemContentWrapper.appendChild(taskContentDescription);
