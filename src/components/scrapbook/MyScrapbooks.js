import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getThisUser } from "../users/UserManager"
import { getScrapbookByCurrentUser } from "./ScrapbookManager"


export const MyScrapbook = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returns ARRAY WHEN INVOKED

	const [currentUser, setCurrentUser] = useState({})
	const [scrapbook, setScrapbook] = useState([])

	useEffect(() => {
		const token = localStorage.getItem("token")
		getThisUser(token).then((user) => {
			setCurrentUser(user)
		})
	}, [])

	useEffect(() => {
		// Query string parameter
		const userId = currentUser.id
		getScrapbookByCurrentUser(userId).then((userBook) => {
			setScrapbook(userBook)
		})
	}, [currentUser])


	
    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>

         

            <div className="Scrapbooks"></div>
            {
                scrapbook.map(
                    (finishedBooks) => {

                        return <center>

                            <div className="finishedBooksList"><div key={`finishedBooks.id-${finishedBooks.id}`}>

                             <Link to={`/scrapbooks/${finishedBooks.id}`}>{finishedBooks.name} {finishedBooks.date}</Link> 


                               

                               


                            </div>

                            </div>

                        </center>



                    }
                )


            }


        </>
    )
}



