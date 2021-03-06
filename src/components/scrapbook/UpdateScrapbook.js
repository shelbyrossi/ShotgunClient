import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { getScrapbookById,  updateScrapbook} from "./ScrapbookManager"
import { fetchTags, deleteTags } from "../tags/TagManager"
import "./updateScrapbook.css"

export const UpdateScrapbook= () => {
    const history = useHistory()
    const [tags, setTags] = useState([])
    const { scrapbookId } = useParams()
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

    const getAllTags = () => fetchTags().then(data => setTags(data))

    useEffect(() => {
        getAllTags()
    }, [])


    useEffect(() => {
        getScrapbookById(scrapbookId).then(data => setScrapbook({
            user: data.user,
            description: data.description,
            name: data.name,
            state: data.state,
            destination: data.destination,
            favorite_foodstop: data.favorite_foodstop,
            soundtrack: data.soundtrack,
            favorite_experience: data.favorite_experience,
            other_info: data.other_info,
            date: data.date,
            tags: Array.from(data.tags)

        }))
    }, [])

    

    const changeScrapbookState = (domEvent) => {
        const copy = { ...scrapbook }
        copy[domEvent.target.name] = domEvent.target.value
        setScrapbook(copy)

    } //changing state of currentScrapbooks based on changes to dom 

    return (

<center>

<body class="update">



        <form className="updateForm">
            <h2 className="CreateNewScrapbook__title"></h2>

             <fieldset>
                <div className="form-group">
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
                    <label htmlFor="title">Name:   </label>
                    <input
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
                    <label htmlFor="content">Description: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="describe this scrapbook.."
                        value={scrapbook.description}
                        onChange={changeScrapbookState}
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
                        value={scrapbook.state}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="destination">Destination State: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="destination"
                        className="form-control"
                        placeholder="where is your final destination?"
                        value={scrapbook.destination}
                        onChange={changeScrapbookState}
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
                        value={scrapbook.favorite_foodstop}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="soundtrack">Soundtrack: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="soundtrack"
                        className="form-control"
                        placeholder="what have you been listening to?"
                        value={scrapbook.soundtrack}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="favorite_experience">Favorite Experience: </label>

                    <input
                        required autoFocus
                        type="text"
                        name="favorite_experience"
                        className="form-control"
                        placeholder="what was the best so far?"
                        value={scrapbook.favorite_experience}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="other_info">Anything Else: </label>
                    <input
                        required autoFocus
                        type="text"
                        name="other_info"
                        className="form-control"
                        placeholder="anything else you'd like to add?"
                        value={scrapbook.other_info}
                        onChange={changeScrapbookState}
                    />
                </div>
            </fieldset>


   


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    
                    
                    updateScrapbook(scrapbookId, scrapbook)
                    .then(() => history.push("/MyBooks"))
                    
                }}
                className="updateScrapbook">update scrapbook</button>
        </form>

              
                </body>
                </center>



    )

    


}