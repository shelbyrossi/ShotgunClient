import React, { useEffect, useState } from "react"
import { getScrapbookTagById } from "../scrapbook/ScrapbookManager"
import { deleteScrapbook } from "../scrapbook/ScrapbookManager"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import "./scrapbookfeeddetails.css"



export const ShowScrapbookFeedDetails = () => {

    const [scrapbookDetails, showDetails] = useState([])
    const { scrapbooktagsId } = useParams()

    const history = useHistory()

    useEffect(
        () => {
            getScrapbookTagById(scrapbooktagsId)
                // setting scrapbookDetails state
                .then(showDetails)
        },
        [scrapbooktagsId] // Above function runs when the value of scrapbookId changes
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
                            <div>Currently in:</div><div className="state">{scrapbookDetails?.scrapbook?.state} </div>
                            <div>Traveling to:</div><div className="traveling"> {scrapbookDetails?.scrapbook?.destination} </div>
                            <div>Favorite food along the way:</div><div className="food">{scrapbookDetails?.scrapbook?.favorite_foodstop} </div>
                            <div>Listening to:</div><div className="soundtrack">{scrapbookDetails?.scrapbook?.soundtrack} </div>
                            <div>The best experience was:</div><div className="experience"> {scrapbookDetails?.favorite_experience} </div>
                            <div>I'd like to add: </div><div className="other">{scrapbookDetails?.scrapbook?.other_info} </div>

                            <div>{scrapbookDetails?.scrapbook?.date} </div>




                        </div>
                    </div>

                    </div>

                }

            </center>

        </>
    )
}

