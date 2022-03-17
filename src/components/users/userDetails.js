import React, { useEffect, useState } from "react"
import { getUserById } from "./UserManager"
import { useParams } from "react-router-dom"



export const UserDetails = () => {

    const [userDetails, showUser] = useState([])
    const { usersId } = useParams()

    
    useEffect(() => {
        getUserById(usersId).then(userData => showUser(userData))
    }, [usersId])


    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <div className="userDetails"></div>
            {




                <div className="card equal-height has-text-centered"><div key={`details.id-${userDetails.id}`}>

                    <div>{userDetails?.user?.username} </div>
                    <div>{userDetails?.user?.first_name} {""}
                         {userDetails?.user?.last_name} </div>
                         {userDetails?.user?.email} </div>
                    <div>{userDetails?.bio} </div>


                </div>


            }


        </>
    )
}
