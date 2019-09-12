import React,{useState,useEffect} from 'react'

import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import {robots} from './data/robots'

export default function App(){
    const [robotos, setRobotos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=>response.json())
          .then(users=>setRobotos(users))        
    },[])
    const [searchfield, setSearchfield] = useState('');

    function handlerSearchChange(e){
        setSearchfield(e.target.value);  
    }
    
    const filterRobotos = robotos.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if(robotos.length===0){
        return <h1 className='tc f1'>Loading...</h1>
    }else
    {return (
        <div className='tc'>
            <h1 className='f1'>Roboto Friends</h1>
            <SearchBox searchChange={handlerSearchChange}/>
            <Scroll>
                <CardList robots={filterRobotos}/>
            </Scroll>            
        </div>
    )}
}