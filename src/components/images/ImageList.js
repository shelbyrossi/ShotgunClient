import React, { useEffect, useState } from "react"
import { getImages } from "../images/ImageManager"
import { getScrapbookById } from "../scrapbook/ScrapbookManager"
import { useParams } from "react-router-dom"
import "./images.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const ImageList = () => {

    const [images, setImages] = useState([])
    const { scrapbookId } = useParams()
    const [scrapbooks, setScrapbooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [foundImage, setFoundImage] = useState([])
    const history = useHistory()


    // getting all images and setting state
    // const getAllImages = () => getImages().then(data => setImages(data))

    useEffect(() => {
        setIsLoading(true)
        getImages().then(data => {

            setImages(data)
            setIsLoading(false)
            setFoundImage(data.filter(i => i.scrapbook["id"] === parseInt(scrapbookId)))
        })
        // getAllImages()
    }, [])


    useEffect(
        () => {
            getScrapbookById(scrapbookId)
                // setting scrapbook state
                .then(setScrapbooks)
        },
        [scrapbookId] // Above function runs when the value of scrapbookId changes
    )



    if (isLoading) return <>Loading data </>

    // filtering images for scrapbook id on images that matches scrapbookId


    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>



            <div className="ScrapbookImages"></div>
            {
                foundImage.map(
                    (imageList) => {


                        return foundImage ? <div><img className="scrapbookImages" src={imageList?.image_url} alt="" />

                


                        </div>



                            //   returning none if id & userId do not match
                            : <div>"none"</div>


                    }

                )
            }

        </>

    )
}