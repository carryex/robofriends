import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from '../components/ErrorBoubdry';

import { setSearchField } from "../actions";

const mapStateToProps = state => ({
    searchField: state.searchField
})
const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

const App = (props) => {
    const [robots, setRobots] = useState([]);
    const { searchField, onSearchChange } = props;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, [])

    const filteredRobots = robots.filter(robot => robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
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



export default connect(mapStateToProps, mapDispatchToProps)(App);