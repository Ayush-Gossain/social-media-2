import React,{useEffect,useState,useContext} from 'react'
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'
const Profile = () => {
  const[UserProfile,setProfile] = useState(null)
  // const[showfollow,setshowfollow] = useState(true)
  const{state,dispatch} = useContext(UserContext)
  const {userid} = useParams()
  
  useEffect(()=>{
    fetch(`/user/${userid}`,{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
        // console.log(result);
        
        setProfile(result)
    })
  },[])


  // const followUser=()=>{
  //   fetch('/follow',{
  //     method:"put",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorization":"Bearer "+localStorage.getItem("jwt")

  //     },
  //     body:JSON.stringify({
  //       followId:userid
  //     })
  //   }).then(res=>res.json())
  //   .then(data=>{
      
  //     dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
  //     localStorage.setItem("user",JSON.stringify(data))
  //     setProfile((prevstate)=>{
  //       return{
  //         ...prevstate,
  //         user:{
  //           ...prevstate.user,
  //           followers:[...prevstate.user.followers,data._id]
  //         }
  //       }
  //     })
  //     setshowfollow(false)
  //   })
  // }
  // const unfollowUser=()=>{
  //   fetch('/unfollow',{
  //     method:"put",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorization":"Bearer "+localStorage.getItem("jwt")

  //     },
  //     body:JSON.stringify({
  //       unfollowId:userid
  //     })
  //   }).then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);

  //     dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
  //     localStorage.setItem("user",JSON.stringify(data))
      
  //     setProfile((prevstate)=>{
  //       const newFollower = prevstate.user.followers.filter(item=>item!==data._id)
  //       return{
  //         ...prevstate,
  //         user:{
  //           ...prevstate.user,
  //           followers:newFollower
  //         }
  //       }
  //     })
  //   })
  // }




  return (
    <>
    {UserProfile?
    <div style={{maxWidth:"900px", margin:"0px auto"}}>
    <div style={{display:"flex",
    justifyContent:"space-around",
    margin:"18px 0px",
    borderBottom:"1px solid grey"}}>
      <div >
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
        src={UserProfile.user.pic}
        alt='img' />
      </div>
      <div>
        <h4>{UserProfile.user.name}</h4>
        <h5>{UserProfile.user.email}</h5>
        <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}> 
          <h6>{UserProfile.posts.length} posts</h6>
          {/* <h6> {UserProfile.user.followers.length} followers</h6>
          <h6> {UserProfile.user.following.length} following</h6> */}
        </div>
        {/* {showfollow?
        <button style={{margin:"10px"}} className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={()=>followUser()} >follow
            
        </button>
        :
        <button style={{margin:"10px"}} className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={()=>unfollowUser()} >unfollow
            
        </button>
        } */}
        
        

      </div>
    </div>

    <div className='gallery'>
      {UserProfile.posts.map(item=>{
        return(<img key={item._id} className='item' src={item.photo} alt='img'/>)
      })}


    </div>
  </div>
    
    
    
    :<h2>loading...</h2>}
    
    </>
  )
  
}

export default Profile
