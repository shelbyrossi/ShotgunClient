import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'

import { getScrapbookTagById, updateScrapbook } from "./ScrapbookManager"


export const UpdateScrapbook = () => {
    const history = useHistory()
    const { scrapbooktagsId } = useParams()
    const [scrapbookTag, setScrapbookTagUpdate] = useState({ // Declaring State variable
            scrapbook_tag: "",
            


    })

 


    useEffect(() => {
        getScrapbookTagById(scrapbooktagsId).then(data => setScrapbookTagUpdate({
              
        


        }))
    }, [])

    //getting initial data to set on first render- this will change anytime scrapbookId changes 

    const changeScrapbookTagUpdate = (domEvent) => {
        const copy = { ...scrapbookTag }
        copy[domEvent.target.name] = domEvent.target.value
        setScrapbookTagUpdate(copy)

    } //changing state of currentCategory based on changes to dom 


    return (
        <form className="CreateNewScrapbook">
            <h2 className="CreateNewScrapbook__title">Update Scrapbook</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="give your scrapbook a name.."
                        value={scrapbookTag.name}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Description: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="describe this scrapbook.."
                        value={scrapbookTag.description}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="what state are you in?.."
                        value={scrapbookTag.state}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Destination State:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="destination"
                        className="form-control"
                        placeholder="where is your final destination?"
                        value={scrapbookTag.destination}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset> <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Date Posting: </label>
                    <input
                        required autoFocus
                        type="date"
                        name="date"
                        className="form-control"
                        placeholder="Please use format 0000-00-00"
                        value={scrapbookTag.date}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="favorite_foodstop">Favorite Food Stop: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="favorite_foodstop"
                        className="form-control"
                        placeholder="what was your favorite place to eat?"
                        value={scrapbookTag.favorite_foodstop}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="soundtrack">Soundtrack</label>
                    <input
                        required autoFocus
                        type="text"
                        name="soundtrack"
                        className="form-control"
                        placeholder="what have you been listening to?"
                        value={scrapbookTag.soundtrack}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="favorite_experience">Favorite Experience:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="favorite_experience"
                        className="form-control"
                        placeholder="what was the best so far?"
                        value={scrapbookTag.favorite_experience}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="other_info">Anything Else?:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="other_info"
                        className="form-control"
                        placeholder="anything else you'd like to add?"
                        value={scrapbookTag.other_info}
                        onChange={changeScrapbookTagUpdate}
                    />
                </div>
            </fieldset>








            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const newBook = {
                        scrapbook_tag: scrapbookTag.scrapbook_tag
                    }


                    updateScrapbook(newBook)
                        .then(() => history.push("/MyBooks"))
                        .then(getScrapbookTagById)

                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}