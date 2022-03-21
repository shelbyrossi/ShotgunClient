import React, { useEffect, useState } from "react"
import { getScrapbookById } from "./ScrapbookManager"
import { deleteScrapbook } from "./ScrapbookManager"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import "./singleScrapbook.css"

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
            <center>

                <div className="ScrapbookDetails"></div>
                {

                    <div className="details"><div key={`details.id-${scrapbookDetails.id}`}>
                        <div className="title">{scrapbookDetails?.name}</div>
                        <div className="description">"{scrapbookDetails?.description}"</div>

                        <div className="borderdeats">
                            <div>Currently in:</div><div className="state">{scrapbookDetails?.state} </div>
                            <div>Traveling to:</div><div className="traveling"> {scrapbookDetails?.destination} </div>
                            <div>Favorite food along the way:</div><div className="food">{scrapbookDetails?.favorite_foodstop} </div>
                            <div>Listening to:</div><div className="soundtrack">{scrapbookDetails?.soundtrack} </div>
                            <div>The best experience was:</div><div className="experience"> {scrapbookDetails?.favorite_experience} </div>
                            <div>I'd like to add: </div><div className="other">{scrapbookDetails?.other_info} </div>
                            <div>{scrapbookDetails?.tags?.label} </div>
                            <div>{scrapbookDetails?.date} </div>




                        </div>
                    </div>

                    </div>

                }

            </center>

        </>
    )
}
