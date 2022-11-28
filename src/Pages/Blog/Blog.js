import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?
                    </h2>
                    <p>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part. 1) We can use URL to store some data. 2) The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. 3) The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.4) The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. 5) The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        <br />
                        They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;