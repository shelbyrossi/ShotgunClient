import React, { useEffect, useState } from "react"
import { getScrapbookTagById } from "./ScrapbookManager"
import { deleteScrapbookTag } from "./ScrapbookManager"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"

export const ShowScrapbookDetails = () => {

    const [scrapbookDetails, showDetails] = useState([])
    const { scrapbooktagsId } = useParams()

    const history = useHistory()

    useEffect(
        () => {
            getScrapbookTagById(scrapbooktagsId)
                // setting booking state
                .then(showDetails)
        },
        [scrapbooktagsId] // Above function runs when the value of bookingId changes
    )


    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <div className="ScrapbookDetails"></div>
            {




                <div className="card equal-height has-text-centered"><div key={`details.id-${scrapbookDetails.id}`}>

                    <div>{scrapbookDetails?.scrapbook?.name} </div>
                    <div>{scrapbookDetails?.scrapbook?.description} </div>
                    <div>{scrapbookDetails?.scrapbook?.state} </div>
                    <div>{scrapbookDetails?.scrapbook?.date} </div>
                    <div>{scrapbookDetails?.scrapbook?.destination} </div>
                    <div>{scrapbookDetails?.scrapbook?.favorite_foodstop} </div>
                    <div>{scrapbookDetails?.scrapbook?.soundtrack} </div>
                    <div>{scrapbookDetails?.scrapbook?.favorite_experience} </div>
                    <div>{scrapbookDetails?.scrapbook?.other_info} </div>
                    <div>{scrapbookDetails?.tag?.label} </div>










                    <div> <Link className="button is-link is-dark" to={`/scrapbooktags/${scrapbookDetails.id}/update`}>Edit Scrapbook</Link></div>

                    <div>

                        <button className="button" onClick={() => {



                            deleteScrapbookTag(scrapbookDetails.id)
                                .then(() => history.push("/MyBooks"))
                               




                        }}>Delete</button>
                    </div>



                </div>

                </div>




            }






        </>
    )
}
