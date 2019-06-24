# React Hooks Examples

A few examples using React hooks.

## How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run, clone the project, navigate to the project directory, and run:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Examples

### Example #1: Login Form with `useState`

![Login Form](https://raw.githubusercontent.com/leahjlou/react-hooks-examples/master/login-form.gif)

[The `LoginForm` component is found in `src/login-form`](https://github.com/leahjlou/react-hooks-examples/blob/master/src/login-form/LoginForm.js).

This component shows a basic way to use the `useState` hook to manage local state for simple username and password inputs.

For comparison, there is also a `LoginFormClass` component, which shows the same login form written as a Class component.

### Example #2: Timer with `useEffect`

![Timer](https://raw.githubusercontent.com/leahjlou/react-hooks-examples/master/timer.gif)

[The `Timer` component is found in `src/timer`](https://github.com/leahjlou/react-hooks-examples/blob/master/src/timer/Timer.js).

It's a timer that counts up in milliseconds. When the mouse is pressed, the timer pauses.

This component shows how to use `useEffect` to set up and clean up a timer. It also uses a custom hook to subscribe to the pressed state of the mouse. The custom hook, `useMousePressed`, is located in `custom-hooks/mouse-pressed.js`.

### Example #3: Article with `useContext`

![Article](https://raw.githubusercontent.com/leahjlou/react-hooks-examples/master/article.gif)

[The `ArticleWrapper` component is found in `src/article`](https://github.com/leahjlou/react-hooks-examples/blob/master/src/article/ArticleWrapper).

It contains some content with a colorscheme determined by a theme, which you can choose from a dropdown above.

The theme lives in a React Context. At the top level `ArticleWrapper` component, there's a Provider which sets and stores the current theme and provides a function to update it. The `ThemeSwitcher` and `Article` components are rendered within the Provider, which both use the `useContext` Hook to easily reference the current theme from the nearest Provider.
