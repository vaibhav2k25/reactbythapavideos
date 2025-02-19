export const EventProps=()=>{
    return(
        <>
            <WelcomeUser onClick={()=>HandleWelcomeUser("vaibhav")}></WelcomeUser>
        </>
    );
    
}
const HandleWelcomeUser = (name)=>{
    alert(`hello ${name}`);
}

const WelcomeUser = (props)=>{
    return(
        <>
        <button onClick={props.onClick}>Click</button>
        </>
    );
}