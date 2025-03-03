# To-Do Ease

A simple Todo List application built with React Native, featuring multiple themes and basic CRUD operations.

## Features

- **Theme Selection**: Users can choose from a variety of themes, each with its own background image and color scheme.
- **Task Management**: Users can add, delete, and mark tasks as completed.
- **Data Persistence**: Tasks are stored locally using a custom data storage utility.
- **Alerts**: The app displays alerts for empty tasks and duplicate task entries.

## Components

- **Todolistapp**: The main application component that integrates all features.
- **TodoTaskAdder**: Handles task input and addition.
- **Todolist**: Displays and manages the list of tasks.
- **Navigation**: Allows users to change themes.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the application using `npx react-native run-ios` or `npx react-native run-android`.

## Code Structure

- **App.js**: The entry point of the application, rendering the `Todolistapp` component.
- **Todolistapp.js**: Contains the main logic for task management and theme selection.
- **components**: Folder containing reusable components like `TodoTaskAdder`, `Todolist`, and `Navigation`.
- **utils**: Folder with utility functions for data storage.

## Technologies Used

- **React Native**: For building cross-platform mobile applications.
- **JavaScript**: As the primary programming language.
- **Async Storage**: For storing data locally (via a custom wrapper).

## Contributing

Contributions are welcome! Feel free to submit pull requests or report issues.
