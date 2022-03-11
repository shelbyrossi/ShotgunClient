import React, { useEffect, useState } from "react"
import {getScrapbookById} from "./ScrapbookManager"
import {deleteScrapbook} from "./ScrapbookManager"
import {useParams} from "react-router-dom"
import {get_post_tags} from "./ScrapbookManager"
import {getImages} from "../images/ImageManager"
import { Link } from "react-router-dom"

export const ShowScrapbookDetails = () => {

    const [scrapbookDetails, showDetails] = useState([])
    const [tags, showTags] = useState([])
    const {scrapbookId} = useParams()
   
    const {tagsId} = useParams()

    useEffect(
		() => {
			getScrapbookById(scrapbookId)
				// setting booking state
				.then(showDetails)
		},
		[scrapbookId] // Above function runs when the value of bookingId changes
	)


    useEffect(
		() => {
			get_post_tags(tagsId)
				// setting booking state
				.then(showTags)
		},
		[tagsId] // Above function runs when the value of bookingId changes
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

                               
                                
                                
                             
                                

                                
                                {/* <Link className="button is-link is-dark" to={`/tags/${finishedTags.id}/update`}>Edit Tag</Link> */}


                            </div>

                         </div>
                     



                    }
                


            


        </>
    )
}
