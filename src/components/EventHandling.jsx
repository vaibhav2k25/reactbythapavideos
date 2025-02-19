export const EventHandling=()=>{
    /* function handleButtonClick(){
        alert("Hello React World!!!");
    } */
    const handleButtonClick = (event)=>{
        console.log(event);
        console.log('target'+event.target);
        console.log('type'+event.type);
        alert("Hello React World!!!");
    }
    const handleWelcome=(name)=>{
        console.log(`Welcome ${name} to react world.`);
    }
    return(
        <>
            <button onClick={handleButtonClick}>Click Me</button>
            <button onClick={(event)=>handleButtonClick(event)}>Click Me 2</button>
            <button onClick={()=>handleWelcome("Vaibhav")}>ClickToWelcome</button>
        </>
    );
};