// This function defines a React component named 'Content'.
function Content() {
    return (
        //everything inside div is visual part of component
        <div>
            <h2>Hello World</h2>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
// Export the 'Content' component as the default export of this module.
export default Content;
