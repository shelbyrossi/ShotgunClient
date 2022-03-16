import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookByCurrentUser} from "./ScrapbookManager"



export const MyScrapbook = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returns ARRAY WHEN INVOKED

	const [currentUser, setCurrentUser] = useState({})
	const [scrapbook, setBook] = useState([])

	

	useEffect(() => {
		// Query string parameter
		const userId = currentUser.id
		getScrapbookByCurrentUser(userId).then((userScrapbook) => {
			setBook(userScrapbook)
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



