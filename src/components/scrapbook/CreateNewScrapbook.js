import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { createScrapbook, getScrapbooks } from "./ScrapbookManager"
import { fetchTags, deleteTags } from "../tags/TagManager"
import { TagForm} from "../tags/TagForm"
import "./createBook.css"
import "../tags/tagForm.css"





// 'user', 'category', 'title', 'image_url', 'content', 'tags'


export const ScrapbookForm = () => {

    const [tags, setTags] = useState([])
    const [images, setImages] = useState([])
    const history = useHistory()


    const getAllTags = () => fetchTags().then(data => setTags(data))

    useEffect(() => {
        getAllTags()
    }, [])



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

        fetchTags().then((data) => setTags(data))
    }, [])




    const changeScrapbookState = (event) => {
        const copy = { ...scrapbook }
        copy[event.target.name] = event.target.value
        setScrapbook(copy)
    }



    return (

        <body class="container welcome">
        <center>
        <form className="CreateNewScrapbook">
            <h2 className="CreateNewScrapbook__title"></h2>
            
                
            <fieldset> 
                <div className="date">
                    <label htmlFor="content"> </label>
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
                    <label htmlFor="title"> </label>
                     <textarea rows="5" cols="50"
                        required autoFocus
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="give your scrapbook a name.."
                        value={scrapbook.name}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content"></label>
                    <textarea rows="12" cols="50"
                        required autoFocus
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="describe what this scrapbook is about.."
                        value={scrapbook.description}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state"> </label>
                    <textarea rows="5" cols="50"
                        required autoFocus
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="what state are you in?.."
                        value={scrapbook.state}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content"></label>
                    <textarea rows="6" cols="50"
                        required autoFocus
                        type="text"
                        name="destination"
                        className="form-control"
                        placeholder="where is your final destination?.."
                        value={scrapbook.destination}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="favorite_foodstop"> </label>
                    <textarea rows="12" cols="50"
                        required autoFocus
                        type="text"
                        name="favorite_foodstop"
                        className="form-control"
                        placeholder="what was your favorite place to eat?.."
                        value={scrapbook.favorite_foodstop}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="soundtrack"></label>
                    <textarea rows="9" cols="50"
                        required autoFocus
                        type="text"
                        name="soundtrack"
                        className="form-control"
                        placeholder="what have you been listening to on this drive?.."
                        value={scrapbook.soundtrack}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="favorite_experience"></label>
                    <textarea rows="12" cols="50"
                        required autoFocus
                        type="text"
                        name="favorite_experience"
                        className="form-control"
                        placeholder="what was the best so far?.."
                        value={scrapbook.favorite_experience}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="other_info"></label>
                    <textarea rows="12" cols="50"
                        required autoFocus
                        type="text"
                        name="other_info"
                        size="20"
                        className="form-control"
                        placeholder="anything else you'd like to add?.."
                        value={scrapbook.other_info}
                        onChange={changeScrapbookState}
                    />
                </div>
                
            </fieldset>
           




                <TagForm getAllTags={getAllTags} />

            <div className="tagChecks">
                <label className="label"> TAG YOUR STATE </label>
                {
                    tags.map(
                        (tag) => {
                            return <div className="tagcheckbox">
                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        className="tagBox"
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
                        <button className="buttonCreateBook" onClick={() => {
                                    deleteTags(tag.id).then(getAllTags);
                                }}>x</button>
                               
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
                        other_info: scrapbook.other_info,
                        date: scrapbook.date,
                        tags: Array.from(scrapbook.tags)
                    }

                    createScrapbook(newScrapbook)
                        .then(() => history.push("/MyBooks"))
                        .then(getScrapbooks)
                }}
                className="buttonCreate">create your scrapbook</button>
        </form>
        </center>
        </body>


    )
}





