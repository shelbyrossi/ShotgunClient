import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookByCurrentUser} from "./ScrapbookManager"
import {useParams} from "react-router-dom"
import {getUserById} from "./ScrapbookManager"



export const MyScrapbook = () => {


	const [currentUser, setCurrentUser] = useState({})
	const [scrapbook, setBook] = useState([])



	useEffect(() => {
		// Query string parameter
        
		getScrapbookByCurrentUser(parseInt(localStorage["userId"])).then((scrapbook) => {
          
			setBook(scrapbook)
        })
	}, [currentUser])
	

  
     


 return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>

            <div className="Tags"></div>
            {
                scrapbook.map(
                    (book) => {

                        return <center>

                            <div className="card equal-height has-text-centered"><div key={`book.id-${book.id}`}>
                              
                               <Link to={`/scrapbook/${book.id}`}> {book.name}</Link> 
                               
                            </div>
                            </div>
                        </center>



                    }
                )


            }


        </>
    )
}



