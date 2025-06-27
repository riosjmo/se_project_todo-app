# Simple Todo App

This is a simple and dynamic Todo List web application. Users can add, check off, and delete todos. The app has a real-time counter that tracks how many tasks are completed out of the total.

## Functionality

Users can add new todos through a popup form that accepts a task name and optional due date. Todos are shown as interactive list items, each with a checkbox to mark the task as complete and a delete button to remove it. The app includes a dynamic counter that displays how many tasks are completed out of the total. When a todo is added, deleted, or toggled complete/incomplete, the counter adjusts accordingly. The logic is fully client-side and updates the DOM without reloading the page.

## Technology

Todo: Handles creation, deletion, and checkbox state for individual tasks.

TodoCounter: Tracks and updates the completed and total task counts.

PopupWithForm: Manages the popup form for adding new todos.

Section: Renders and inserts todos into the DOM.

FormValidator: Validates user input in the add-todo form.

## Deployment

This project is deployed on GitHub Pages:

- https://riosjmo.github.io/se_project_todo-app/

