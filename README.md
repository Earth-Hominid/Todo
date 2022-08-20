# Todo Web App | Vanilla JavaScript

![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

<img width="1112" alt="todo-4" src="https://user-images.githubusercontent.com/66766688/185726187-bf02d5ac-3e1d-42bb-92f9-76b23e6680fd.png">

An OOP todo APP using SOLID principles. This one page web application is dynamically rendered using Vanilla JavaScript and its assets are bundled with webpack. 

A live version can be found [here](https://earth-hominid.github.io/Todo/).

## Description

This one page web application was architected using both _Robert C. Martin's Single Responsibility Principle_ and _Modular Javascript Rules_. It consists of dynamic re-rendering without a framework and adds dynamic event listeners.

The code avoids 'tightly coupled' objects and is self contained. There are no global variables, no memory leaks, all events can be unbound, and event listeners can go away. LocalStorage is used to persist data, and advanced JavaScript array methods were used.

<img width="1111" alt="todo-2" src="https://user-images.githubusercontent.com/66766688/185726202-b4a274c1-d4e3-4e3d-af24-ffb108c47f85.png">

## Dependencies

- [Date-fns](https://github.com/date-fns/date-fns)
- Navigation Bar Gradient CSS taken from [Gradient Magic](https://www.gradientmagic.com/)

### JavaScript built-in objects

- [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)

### Web APIs

- [node.removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

- [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

- [Storage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)

- [Document.importNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode)

### Arrays

- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
