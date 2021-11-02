import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from '../components/ErrorBoubdry'

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()))
    return !robots.length ?
        <h1 className='tc'>Loading</h1> :
        <div className='tc'>
            <h1 className='f1'>RobotFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry><CardList items={filteredRobots} /></ErrorBoundry>
            </Scroll>
        </div>
}

export default App;