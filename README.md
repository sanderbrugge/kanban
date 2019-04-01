# Kanban

Implementation of a kanban board in React, using TypeScript, Redux and react-dnd.

# Explanation

## TypeScript

Using TS in a project this size is a bit of overkill, but I like to have the intellisense and type safety in place, it speeds up the development process for me personally.

## Redux

Using Redux in this application is definitely overkill. Fetching the data and setting it in the rootcontainer's state and using hooks for manipulating the state would suffice. I just did it because I could.

## React-DND

Using [React-DND](https://github.com/react-dnd/react-dnd) along with [rn-touch-dnd-backend](https://github.com/yahoo/react-dnd-touch-backend) was (kind of) necessary since it provides an easy to use implementation on top of the HTML 5 drag and drop functionality. 

# Running this app

just clone this repository, install the modules and start the application.

```
$ yarn
$ yarn start
```

