import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
          <div className='question-container'>
            <h1>What is the purpose of React Router?</h1>
            <p className='answer'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
        
                React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
            </p>

          </div>
          <div className='question-container'>
            <h1>How does context api works?</h1>
            <p className='answer'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </p>
          </div>
          <div className='question-container'>
            <h1>Purpose of UseRef Hook</h1>
            <p className='answer'>
            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </p>
          </div>
        </div>
    );
};

export default Blog;