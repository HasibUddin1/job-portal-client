import QandAImage from '../../../assets/images/q&a-section-image.jpg'

const Blog = () => {
    return (
        <div className="w-9/12 mx-auto mt-20">
            <div className="mb-10">
                <h1 className="text-4xl text-center font-bold">Blog <span className="text-blue-600">Q&A</span></h1>
            </div>
            <div className='lg:flex flex-row-reverse gap-5 items-center'>
                <div className='lg:w-1/2'>
                    <img className='rounded-xl' src={QandAImage} alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            1. Question: What is the MERN stack, and how does it work?
                        </div>
                        <div className="collapse-content">
                            <p>MERN Stack is a collection of technologies used to develop modern full stack application using MongoDB, Express.js, React.js and Node.js. MongoDB is used for storing data as it is a database. Express.js acts as backend framework for handling routing and server-side logics. React helps us to build to user friendly UI. Node.js serves as the runtime library for executing JavaScript code on the server side.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            2. Question: What is the role of Redux in a MERN stack application?
                        </div>
                        <div className="collapse-content">
                            <p>Redux is a state management library for managing state globally so that we can use that information in our components by avoiding prop drilling. Managing state globally helps us to get that information from Redux to any of our components</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            3. Question: How does Express.js handle middleware functions?
                        </div>
                        <div className="collapse-content">
                            <p>In Express.js, middleware functions are functions that have access to the request and response objects req, res in the application's request-response cycle. Middleware functions can perform tasks like logging, authentication, validation, etc., before passing control to the next middleware or the final route handler. They are invoked sequentially, and we can use the "app.use" or router.use methods to apply middleware to specific routes or the entire application.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            4. Question: Explain the concept of RESTful API and how it is implemented in a MERN stack application?
                        </div>
                        <div className="collapse-content">
                            <p>RESTful API which is also known as Representational State Transfer is an architectural style for designing networked applications. It uses HTTP methods to perform CRUD operations which are also known as Create Read Update and Delete operations. We can implement RESTful API in a MERN stack application with the use of Node.js with Express framework by creating CRUD requests and responses and then connecting server with backend. For backend, we will be using MongoDB. And then we can use fetch to API to make HTTP requests from frontend to the backend</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;