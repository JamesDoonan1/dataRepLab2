function Content() {
    return (
        //everything inside div is visual part of component
        <div>
            <h2>Hello World</h2>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
export default Content;