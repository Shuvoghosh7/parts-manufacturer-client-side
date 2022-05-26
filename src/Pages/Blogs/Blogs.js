import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-16'>
            <article>
                <p className='text-2xl font-bold'>1. How will you improve the performance of a React Application?</p>
                <p className='text-justify my-2'>
                    To optimize React rendering, we need to make sure that components receive only necessary props.Keeping component state local where necessary.Memoizing React components to prevent unnecessary re-renders.Code-splitting in React using dynamic import().use Lazy loading images in React. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.
                </p>
            </article>
            <article>
                <p className='text-2xl font-bold'>2. What are the different ways to manage a state in a React application?</p>
                <p className='text-xl'>There are four main types of state you need to properly manage in your React apps:</p>
                <ul>
                    <li className='my-2'>
                        <span className='font-bold'>1. Local state:</span> Local state is data we manage in one or another component.
                    </li>
                    <li className='my-2'>
                        <span className='font-bold'>2. Global (UI) state:</span> Global state is data we manage across multiple components.
                    </li>
                    <li className='my-2'>
                        <span className='font-bold'>3. Server state:</span> Data that comes from an external server that must be integrated with our UI state..
                    </li>
                    <li className='my-2'>
                        <span className='font-bold'>4. URL state:</span>Data that exists on our URLs, including the pathname and query parameters.
                    </li>
                </ul>
            </article>
            <article>
                <p className='text-2xl font-bold'>3. How does prototypical inheritance work?</p>
                <p className='text-justify'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.For example defines a person object and person object has a property and a method.name is a property that stores the person’s name.greet is a method that returns a greeting as a string.so the JavaScript engine provides you with a built-in Object() function and an anonymous object that can be referenced by the Object.prototype.The person object has a link to the anonymous object referenced by the Object() function. The [[Prototype]] represents the linkage.It means that the person object can call any methods defined in the anonymous object referenced by the Object.prototype likes this. For example, the following shows how to call the toString() method via the person object:
                </p>
            </article>
            <article>
                <p className='text-2xl font-bold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                <p className='text-2xl font-bold text-success'>code: code inside the find.js file</p>
                
            </article>
            <article>
                <p className='text-2xl font-bold'>6. What is a unit test? Why should write unit tests?</p>
                <p>
                    <p className='font-bold'>What is a unit test?</p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    <p className='font-bold'>Why should write unit tests?</p>
                    <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>

                </p>
            </article>
        </div>
    );
};

export default Blogs;