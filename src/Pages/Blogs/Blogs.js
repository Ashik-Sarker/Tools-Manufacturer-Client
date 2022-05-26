import React from 'react';

const Blogs = () => {
    return (
        <div className='px-8 my-12'>
            <h1 style={{letterSpacing:"5px"}} className='my-12 text-3xl text-primary font-bold'>POPULAR BLOGS</h1>
            <div className='grid grid-cols-1 2xl:grid-cols-2 gap-5'>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"># How will you improve the performance of a React Application?</h2>
                        <p>(1) Keeping component state local where necessary. <br />
                        (2) Memoizing React components to prevent unnecessary re-renders. <br />
                        (3) Code-splitting in React using dynamic import. <br />
                        (4) Windowing or list virtualization in React. <br />
                        (5) Lazy loading images in React. <br />
                        </p>
                        
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"># What are the different ways to manage a state in a React application?</h2>
                        <p>There are four main types of state you need to properly manage in your React apps:
                        (1) Local state.
                        (2) Global state.
                        (3) Server state.
                        (4) URL state.</p>
                        
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"># How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                        
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"># Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>One should never update the state directly because of the following reasons:<br />If you update it directly, calling the setState() afterward may just replace the update you made. <br />When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br />You will lose control of the state across all components.</p>
                        
                    </div>
                </div>
                {/* <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"># You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div> */}
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"># What is a unit test? Why should write unit tests?</h2>
                        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;