import './welcome.css';
export function Welcome({ name }) {
    return (
        <div>
            {name ? <h2>Welcome {name} to the world of React......</h2> : <h2>Name not provided.</h2>}
        </div>
    );
}
export function Footer() {
    return <h3>This is a footer..</h3>

};

export function HeaderCss(){
    return <h1 className="welcome-h1"> This is a header..</h1>
}
export function Header(){
    return <h1 > This is a header..</h1>
}
export default Welcome;