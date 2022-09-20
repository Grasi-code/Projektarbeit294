# projektarbeit294

## Enviroment
Backend V4

## Project

Todo list, wich is able to Create, Delete, Update and List elements. It has a implemented login wich is based on Cookies. 

Login Data:
```
Email: 'example@example.ch'

Password: 'm294'
```

## Andere Dateien

Das gitlog findet man im root Verzeichnis als gitlog.txt

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
```
See [Configuration Reference](https://cli.vuejs.org/config/).
```

### Open Website
```
http://localhost:8080/
```

## TestProtokoll
| **Testname**                            | **Procedure**                                                                                    | **expected Result**                                                                              | **acctual Result**                                                                               | **WorkingAsExpected** | **Testing Date** |
|-------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------|--------------|
| Login with false Password           | 1. Fill Email with: example@example.com <br>2. Fill Password with: test123 <br> 3. Press login button | alert('Wrong Password') and login fails                                                      | Login fails but no error Message                                                             | false             | 20.09.2022   |
| Create Task with only spaces        | 1. Fill Create Task input field with '    ' <br> 2. Press create button                           | alert('Invalid Task Name')                                                                   | alert('Invalid Task Name')                                                                   | true              | 20.09.2022   |
| Update Task with only spaces        | 1. Press Pen icon to edit task <br> 2. Fill appeared input field with '    ' <br> 3. Press Save icon   | alert('Invalid Task Name')                                                                   | alert('Invalid Task Name')                                                                   | true              | 20.09.2022   |
| Delete Task                         | 1. Press trash icon on any task                                                              | alert('Task with title: "{Task.Title}" successfully deleted!'), task deleted and page reload | alert('Task with title: "{Task.Title}" successfully deleted!'), task deleted and page reload | true              | 20.09.2022   |
| Logout                              | 1. Press logout button                                                                       | User logged out and login page is displayed                                                  | User logged out and login page is displayed                                                  | true              | 20.09.2022   |
| Login with false Password (1)       | 1. Fill Email with: example@example.com <br> 2. Fill Password with: test123 3. Press login button | alert('Wrong Password') and login fails                                                      | alert('Wrong Password') and login fails                                                      | true              | 20.09.2022   |
| Create Task                         | 1. Type some txt in create task input field <br> 2. Press Create button                           | creates Task and alert('Successfully created Task')                                          | creates Task but no suceed message                                                           | false             | 20.09.2022   |
| Create Task (1)                     | 1. Type some txt in create task input field <br> 2. Press Create button                           | creates Task and alert('Successfully created Task')                                          | creates Task and alert('Successfully created Task')                                          | true              | 20.09.2022   |
| Update task with empty input        | 1. Press pen icon to edit task <br> 2. Press save icon without changing the input field           | cancels Updating process and doesn't change title of task                                    | cancels Updating process and doesn't change title of task                                    | true              | 20.09.2022   |
| Type not valid email in email field | 1. Fill Email with: test <br> 2. Fill Password with: m294 <br> 3. Press login button                   | Warning: Please enter valid e-mail                                                           | Warning: Please enter valid e-mail                                                           | true              | 20.09.2022   |
