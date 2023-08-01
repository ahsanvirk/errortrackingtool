import React from "react"
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {userSignOut} from './components/AuthDetails'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const dispatch = useDispatch();

    function signOut(){
        dispatch(userSignOut());
    }
    return(
        <div className="sidebar">
            <Link className='nav-link' to="/"><h1 className='brand'>Dashboard</h1></Link>
            <ul>
                <li><Link to='/overview' className='nav-link'>Overview</Link></li>
                <li><Link to='/viewbugs' className='nav-link'>View Bugs</Link></li>
                <li><Link to='/createbug' className='nav-link'>Create Bug</Link></li>
            </ul>
            <button className="nav-link logout" onClick={userSignOut}>Logout</button>
        </div>
    )

}