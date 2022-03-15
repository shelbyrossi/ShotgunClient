import React, { useEffect, useState } from "react"
import {getScrapbookTags} from "../scrapbook/ScrapbookManager"
import {getUsers} from "./UserManager"


export const FindUser = () => {


 const [user, showUser] = useState([])
 const [booksTags, showBooks] = useState([])
 const [foundUser, setFoundUser] = useState([])

 
 
 
 useEffect(() => {
     getScrapbookTags().then(books=> {
         showBooks(books)
         
        })
        
        
    }, [])
    
    
    
     useEffect(() => {
         getUsers().then(data=> {
             
             showUser(data)
           
             setFoundUser(data.find(u => u.id === booksTags?.scrapbook?.userId))
            })
            
            
        }, [])
    


       return (
        
        <>
        {/* calling foundUser in ternary, returning user.name if found */}
        {
          foundUser?.id ? <><div>Artist: {foundUser.username}</div></>
           
        //   returning none if id & userId do not match
          : <div>"none"</div>
                                
                               
        }

          
        </>
    )
}