import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createImage, getScrapbookTags, getImages} from './ImageManager.js'



//Below using props which is importing the getAllCategories function to get category data
export const ImageForm = ({getAllImages}) => {
  const history = useHistory()
  const [scrapbooks, setScrapbook] = useState([])

  const [currentImage, setImage] = useState({
    image_url: "",
    scrapbook_tag: ""
  })




    useEffect(() => {
        getImages().then((data) => setImage(data))
        getScrapbookTags().then((data) => setScrapbook(data))
    }, [])


  const changeImageState = (domEvent) => {
    const copy = {...currentImage}
    // const copy = Object.assign({}, currentCategory)
    copy[domEvent.target.name] = domEvent.target.value

    setImage(copy)
  }


 
  useEffect(() => {
    // TODO: Get the game types, then set the state
    getScrapbookTags().then(scrapbooks=> setScrapbook(scrapbooks))
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
          <select onChange={changeImageState} name="scrapbook_tag" value={currentImage.scrapbook_tag}>
            <option value="0">Select a book</option>
            {
              scrapbooks.map(scrapbookType => <option value={scrapbookType.scrapbook.id}>{scrapbookType.scrapbook.name}</option>)
            }
          </select>
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
         

          const image = {
            image_url:currentImage.image_url,
            scrapbook_tag:{ 
              id: parseInt(currentImage.scrapbook_tag)
            }
          }

          createImage(image)
            .then(() => history.push("/uploadImages"))
            //below we rerendering page with getAllCategories function
            .then(getImages)

         

            
        }}
        className="btn btn-primary">Create</button>
    </form>
  )
}
