import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookTags} from "./FeedManager"
import {ImageList} from "../images/ImageList"





export const FeedScrapbooks = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returns ARRAY WHEN INVOKED



  
	const [scrapbooks, showBooks] = useState([])
    const [setFoundImages, showFoundImages] = useState([])
  

  

	

    const getAllScrapbookTags = () => getScrapbookTags().then(data => showBooks(data))

    useEffect(() => {
        getAllScrapbookTags()
    }, [])


   

 return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <div className="Tags"></div>
            {
                scrapbooks.map(
                    (book) => {

                        return <center>

                            <div className="card equal-height has-text-centered"><div key={`book.id-${book.id}`}>


                                

                               <Link to={`/scrapbooktags/${book.id}`}> {book.scrapbook.description}</Link>  by: {book.scrapbook.name} tag: {book.tag.label}


                            </div>

                            </div>

                        </center>



                    }
                )


            }


        </>
    )
}


