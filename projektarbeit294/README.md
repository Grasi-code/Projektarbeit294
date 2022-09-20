# projektarbeit294

Todo list, wich is able to Create, Delete, Update and List elements. It has a implemented login wich is based on Cookies. 

Login Data:
```
Email: 'example@example.ch'

Password: 'm294'
```

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

| **Testname**                      | **expected Result**                                                                           | **acctual Result**                                                                               | **WorkingAsExpected** | **Testing Date** |
|-------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------|--------------|
| Login with false Password     | alert('Wrong Password') and login fails                                                      | Login fails but no error Message                                                             | false             | 20.09.2022   |
| Create Task with only spaces  | alert('Invalid Task Name')                                                                   | alert('Invalid Task Name')                                                                   | true              | 20.09.2022   |
| Update Task with only spaces  | alert('Invalid Task Name')                                                                   | alert('Invalid Task Name')                                                                   | true              | 20.09.2022   |
| Delete Task                   | alert('Task with title: "{Task.Title}" successfully deleted!'), task deleted and page reload | alert('Task with title: "{Task.Title}" successfully deleted!'), task deleted and page reload | true              | 20.09.2022   |
| Logout                        | User logged out and login page is displayed                                                  | User logged out and login page is displayed                                                  | true              | 20.09.2022   |
| Login with false Password (1) | alert('Wrong Password') and login fails                                                      | alert('Wrong Password') and login fails                                                      | true              | 20.09.2022   |
| Create Task                   | creates Task and alert('Successfully crealted Task')                                          | creates Task but no suceed message                                                           | false             | 20.09.2022   |
| Create Task (1)               | creates Task and alert('Successfully created Task')                                          | creates Task and alert('Successfully created Task')                                          | true              | 20.09.2022   |
| Update task with empty input  | cancels Updating process and doesn't change title of task                                    | cancels Updating process and doesn't change title of task                                    | true              | 20.09.2022   |