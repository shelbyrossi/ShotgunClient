import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookByCurrentUser } from "./ScrapbookManager"
import { deleteScrapbook } from "./ScrapbookManager"
import { useHistory } from 'react-router-dom'

import "./myScrapbook.css"

export const MyScrapbook = () => {


    const [currentUser, setCurrentUser] = useState({})
    const [scrapbook, setBook] = useState([])
    const history = useHistory()




    const getAllScrapbooks = () => getScrapbookByCurrentUser(parseInt(localStorage["userId"])).then((scrapbook =>setBook(scrapbook)))

        

    useEffect(() => {
        getAllScrapbooks()
    }, [])
    



    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>
        
                <div className="Books"></div>
                {
                    scrapbook.map(
                        (book) => {

                            return <center>

                                <div className="myBooks"><div key={`book.id-${book.id}`}>

                                    <Link to={`/scrapbook/${book.id}`}> {book.name}</Link>

                                    <div> <Link className="buttonBooks" to={`/scrapbook/${book.id}/update`}>
                                        Edit Scrapbook</Link></div>

                                    <div>
                                        <button className="buttonBooks" onClick={() => {

                                            deleteScrapbook(book.id).then(getAllScrapbooks);
                                        }}>Delete</button>

                                    
                                    </div>

                                </div>
                                </div>
                            </center>



                        }
                    )


                }
        


        </>
    )
}



