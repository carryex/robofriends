import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from '../components/ErrorBoubdry';

import { requestRobots, setSearchField } from "../actions";

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
})
const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
})

const App = ({ searchField, onSearchChange, onRequestRobots, robots, isPending, error }) => {

    useEffect(() => {
        onRequestRobots();
    }, [onRequestRobots])

    const filteredRobots = robots.filter(robot => robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    return <>
        {isPending && !error && <h1 className='tc'>Loading</h1>}
        {!isPending && !error && <div className='tc'>
            <h1 className='f1'>RobotFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry><CardList items={filteredRobots} /></ErrorBoundry>
            </Scroll>
        </div>}
        {!isPending && error && <h1 className='tc'>Faild to fetch robots</h1>}
    </>
}



export default connect(mapStateToProps, mapDispatchToProps)(App);