import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createImage, getScrapbooks, getImages} from './ImageManager.js'
import { getScrapbookByCurrentUser} from "./ImageManager"


//Below using props which is importing the getAllCategories function to get category data
export const ImageForm = ({getAllImages}) => {
  const history = useHistory()
  const [scrapbooks, setScrapbook] = useState([])
  const [currentUser, setCurrentUser] = useState({})


// setting the state for images setting 
  const [currentImage, setImage] = useState({
    image_url: "",
    scrapbook: 1
  })

// getting all images and setting, getting all Scrapbooks and setting
    useEffect(() => {
        getImages().then((data) => setImage(data))
    }, [])

    useEffect(() => {
      // Query string parameter
          
      getScrapbookByCurrentUser(parseInt(localStorage["userId"])).then((scrapbook) => {
            
        setScrapbook(scrapbook)
          })
    }, [currentUser])
    
  



  const changeImageState = (domEvent) => {
    const copy = {...currentImage}
    copy[domEvent.target.name] = domEvent.target.value

    setImage(copy)
  }

  return (
    <form className="ImageForm">
      <h2 className="imageForm__title">Upload Some Images!</h2>

      {/* IMAGE URL INPUT FIELD */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="url">Url: </label>
          <input type="url" name="image_url" required autoFocus className="form-control"
            value={currentImage.url}
            onChange={changeImageState}
          />
        </div>
      </fieldset>
      <fieldset>
        {/* CHOOSE SCRAPBOOK DROP DOWN MENU */}
        <div>
          <label>Choose A Scrapbook</label>
          <select onChange={changeImageState} name="scrapbook" value={currentImage.scrapbook}>
            <option value="0">Select a book</option>
            {
              scrapbooks.map(scrapbookType => <option value={scrapbookType.id}>{scrapbookType.name}</option>)
            }
          </select>
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
         

          // New state for image 
          const image = {
            image_url:currentImage.image_url,
            scrapbook: currentImage.scrapbook
          }

          // passing image through createImage to POST and pushing to upload page with alert
          createImage(image)
            .then(() => history.push("/uploadImages"))
            window.alert("Image Uploaded")
         
            
        }}
        className="btn btn-primary">Create</button>
    </form>
  )
}