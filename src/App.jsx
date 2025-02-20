import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome, Footer, Header, HeaderCss } from './components/Welcome'
import familydata from './api/family.json'
import FamilyInfo from './components/FamilyInfo'
import { EventHandling } from './components/EventHandling'
import { EventProps } from './components/EventProps'
import { Incrementer, SiblingComp } from './components/hooks/Incrementer'
import { ToggleSwitch } from './components/projects/ToggleSwitch/ToggleSwitch'
import { Todo } from './components/projects/Todo/Todo'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    name: 'John Doe',
    age: 30,
    location: 'New York',
  };
  const familyData={
    name:'Vineeta',
    age: 40
  };

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Header></Header> */}
      {/* <HeaderCss></HeaderCss>
      <Welcome name="Vaibhav"></Welcome>
      <Welcome ></Welcome>
      <FamilyInfo data={familydata}></FamilyInfo>
      <Footer></Footer>
      <UserProfile {...user}></UserProfile>
      <FamilyProfile {...familyData}></FamilyProfile> */}
      {/* <EventHandling></EventHandling> */}
      {/* <EventProps></EventProps> */}
      {/* <Incrementer></Incrementer> */}
      {/* <ToggleSwitch/> */}
      <Todo/>
    </>
  )
}

const UserProfile=({name,age,location})=>{
  return(
    <div>
      <h2>User Profile::</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const FamilyProfile=({name,age})=>{
  return(
    <div>
      <h2>Family Profile::</h2>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  )
}

export default App
