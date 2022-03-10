import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


import { createScrapbook,  getTags, getScrapbooks } from "./ScrapbookManager"




// 'user', 'category', 'title', 'image_url', 'content', 'tags'


export const ScrapbookForm = () => {

    const [tags, setTags] = useState([])
    const [images, setImages] = useState([])
    const history = useHistory()



    const [scrapbook, setScrapbook] = useState({ // Declaring State variable
        user: "",
        description: "",
        name: "",
        state: "",
        destination: "",
        date: "",
        favorite_foodstop: "",
        soundtrack: "",
        favorite_experience: "",
        other_info: "",
      
        tags: new Set()

    })



    useEffect(() => {
       
        getTags().then((data) => setTags(data))
    }, [])




    const changeScrapbookState = (event) => {
        const copy = { ...scrapbook }
        copy[event.target.name] = event.target.value
        setScrapbook(copy)
    }



    return (
        <form className="CreateNewScrapbook">
            <h2 className="CreateNewScrapbook__title">Add New Scrapbook</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Name Your Book:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Give Your Scrapbook A Name.."
                        value={scrapbook.name}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Description</label>
                    <input
                        required autoFocus
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Describe This Scrapbook.."
                        value={scrapbook.description}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="What State Are You In.."
                        value={scrapbook.state}
                        onChange={changeScrapbookState}
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
                        placeholder="Where Is Your Final Destination?.."
                        value={scrapbook.destination}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset> <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Date Posting:</label>
                    <input
                        required autoFocus
                        type="date"
                        name="date"
                        className="form-control"
                        placeholder="Please use format 0000-00-00"
                        value={scrapbook.date}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="favorite_foodstop">Favorite Food Stop:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="favorite_foodstop"
                        className="form-control"
                        placeholder="Favorite Food"
                        value={scrapbook.favorite_foodstop}
                        onChange={changeScrapbookState}
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
                        placeholder="What Was The Trip Soundtrack?"
                        value={scrapbook.soundtrack}
                        onChange={changeScrapbookState}
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
                        placeholder="Content"
                        value={scrapbook.favorite_experience}
                        onChange={changeScrapbookState}
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
                        placeholder="Other Info"
                        value={scrapbook.other_info}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>

        
         


            <div className="field my-5">
                <label className="label"> Tags </label>
                {
                    tags.map(
                        (tag) => {
                            return <div className="control my-2">
                                <label className="checkbox has-text-weight-medium">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        name="tag"
                                        value={tag.id}
                                        key={`tag--${tag.id}`}
                                        onChange={(evt) => {
                                            const copy = { ...scrapbook }
                                            copy.tags.has(parseInt(evt.target.value))
                                                ? copy.tags.delete(parseInt(evt.target.value))
                                                : copy.tags.add(parseInt(evt.target.value))
                                            setScrapbook(copy)
                                        }} />
                                    {tag.label}
                                </label>
                            </div>
                        }
                    )
                }
            </div>



            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const newScrapbook = {
                        user: scrapbook.user,
                        description: scrapbook.description,
                        name: scrapbook.name,
                        state: scrapbook.state,
                        destination: scrapbook.destination,
                        favorite_foodstop: scrapbook.favorite_foodstop,
                        soundtrack: scrapbook.soundtrack,
                        favorite_experience: scrapbook.favorite_experience,
                        other_info: "",
                        date: scrapbook.date,
                        tags: Array.from(scrapbook.tags)
                    }

                    createScrapbook(newScrapbook)
                        .then(() => history.push("/"))
                        .then(getScrapbooks)
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}

