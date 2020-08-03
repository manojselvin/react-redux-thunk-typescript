## React Redux and Redux Thunk (Fetching data Async) setup written in Typescript (React + Redux + Redux Thunk + Typescript)

---

### Project Directory Structure

<pre>
react-redux-thunk-typescript
    ├── scripts                         # Standalone scripts for dev uses
    └── src                             # Project source dir
        │── components                  # Contains all the reusable components
        │ 
        │── lib                         # Contains wrapper class files of npm lib 
        │   └── redux                   # Redux code (All logic lies here)
        │       │── reducers            
        │       │   └── globals.ts      # Globals reducer
        │       └── store.ts            # Root store file (Which is used as param for provider)
        │
        │── App.tsx                     # Contains app component
        │── App.css
        │── index.tsx                   # App component is wrapped with Provider from react redux in this file
        └── index.css
</pre>

### Project Tools Summary

1. Create React App (Out of the box setup for quickstart)
2. Typescript (For static typechecking)
3. Redux Thunk (For async calls)

### Project Description (Explaination)

1. This project contains two jsx components Header and Footer to demonstrate accessing/connecting redux store to two independent components.
2. Header component has two buttons which is conditionally rendered based on the Redux globals reducer store value `isLoggedIn` and has on click listener method `login` and `logout` two reducer Methods which on click dispatches the similar named reducer methods in reducer that changes redux store state for globals reducer variable `isLoggedIn` to `true` if `login` called else `false` if `logout` called.
