import React, { useEffect, useState } from "react"
import { getScrapbookById } from "./ScrapbookManager"
import { deleteScrapbook } from "./ScrapbookManager"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"

export const ShowScrapbookDetails = () => {

    const [scrapbookDetails, showDetails] = useState([])
    const { scrapbookId } = useParams()

    const history = useHistory()

    useEffect(
        () => {
            getScrapbookById(scrapbookId)
                // setting scrapbookDetails state
                .then(showDetails)
        },
        [scrapbookId] // Above function runs when the value of scrapbookId changes
    )
  

    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <div className="ScrapbookDetails"></div>
            {

                <div className="card equal-height has-text-centered"><div key={`details.id-${scrapbookDetails.id}`}>

                    <div>{scrapbookDetails?.name} </div>
                    <div>{scrapbookDetails?.description} </div>
                    <div>{scrapbookDetails?.state} </div>
                    <div>{scrapbookDetails?.date} </div>
                    <div>{scrapbookDetails?.destination} </div>
                    <div>{scrapbookDetails?.favorite_foodstop} </div>
                    <div>{scrapbookDetails?.soundtrack} </div>
                    <div>{scrapbookDetails?.favorite_experience} </div>
                    <div>{scrapbookDetails?.other_info} </div>
                    <div>{scrapbookDetails?.tags?.label} </div>
                   
                    <div> <Link className="button is-link is-dark" to={`/scrapbook/${scrapbookDetails.id}/update`}>
                        Edit Scrapbook</Link></div>

                    <div>
                        <button className="button" onClick={() => {

                            deleteScrapbook(scrapbookDetails.id)
                                .then(() => history.push("/MyBooks"))
                               
                        }}>Delete</button>
                    </div>

                </div>

                </div>

            }

        </>
    )
}
