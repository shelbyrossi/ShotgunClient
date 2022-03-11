import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createImage, getScrapbooks, getImages} from './ImageManager.js'



//Below using props which is importing the getAllCategories function to get category data
export const ImageForm = ({getAllImages}) => {
  const history = useHistory()
  const [scrapbooks, setScrapbook] = useState([])

  const [currentImage, setImage] = useState({
    image_url: "",
    scrapbookId: 1
  })




    useEffect(() => {
        getImages().then((data) => setImage(data))
        getScrapbooks().then((data) => setScrapbook(data))
    }, [])


  const changeImageState = (domEvent) => {
    const copy = {...currentImage}
    // const copy = Object.assign({}, currentCategory)
    copy[domEvent.target.name] = domEvent.target.value

    setImage(copy)
  }


 
  useEffect(() => {
    // TODO: Get the game types, then set the state
    getScrapbooks().then(scrapbooks=> setScrapbook(scrapbooks))
  }, [])


  

  return (
    <form className="ImageForm">
      <h2 className="imageForm__title">Upload Some Images!</h2>


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
        <div>
          <label>Choose A Scrapbook</label>
          <select onChange={changeImageState} name="scrapbookId" value={currentImage.scrapbookId}>
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
         

          const image = {
            image_url:currentImage.image_url,
            scrapbook: parseInt(currentImage.scrapbookId)
          }

          createImage(image)
            .then(() => history.push("/uploadImages"))
            //below we rerendering page with getAllCategories function
            .then(getAllImages)

          alert("Image uploaded!")

            
        }}
        className="btn btn-primary">Create</button>
    </form>
  )
}
