import React,{useContext} from 'react'
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from '../App';

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext)
  const history = useNavigate()
  const renderlist = () =>{
    if(state){
      return[
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">CreatePost</Link></li>,
        <li>
          <button className="btn #c62828 red darken-3" onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history('/signin')
          }} >Logout
            
            </button>
        </li>
      ]

    }else{
      return[
        <li><Link to="/signin">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]

    }
  }
  return (
    <div>
    <nav>
     <div className="nav-wrapper white">
      <Link to={state?"/":"/signin"}className="brand-logo left">Social</Link>
      <ul id="nav-mobile" className="right">
        {renderlist()}
        {/* <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">CreatePost</Link></li> */}
      </ul>
     </div>
   </nav>
    </div>
  )
}

export default Navbar
