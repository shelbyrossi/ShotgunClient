import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookTags } from "./FeedManager"
import { fetchTags } from "../tags/TagManager"
import { getImages } from "../images/ImageManager"
import { deleteScrapbookTag } from "../scrapbook/ScrapbookManager"
import { useHistory } from "react-router-dom"
import { getCurrentUser } from "../scrapbook/ScrapbookManager"
import { getScrapbookByTag } from "../tags/TagManager"




export const FeedScrapbooks = () => {

    // declaring "scrapbooks that defines state
    // declaring "showBooks" that defines function that will modify state/set value of works
    // useState passes a value as argument and returns ARRAY WHEN INVOKED

    const [scrapbooks, showBooks] = useState([])
    const [tag, setTag] = useState([])
    const [showImage, setImage] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const history = useHistory()



    //   getting all scrapbooks and tags / setting 

  

    const getAllTags = () => getScrapbookTags().then(data => showBooks(data))




    useEffect(() => {
        getAllTags()
    }, [])

    useEffect(() => {
        getScrapbookTags()
    }, [])


    //    getting all the images and setting images 
    useEffect(() => {
        getImages().then((data) => setImage(data))


    }, [])


    useEffect(() => {
        getCurrentUser().then((data) => setCurrentUser(data))
    }, [])


    useEffect(() => {
        fetchTags()
            .then(setTag)
    }, [])

    const bookFilter = (event) => {
        if (event.target.value === "0") {
            getScrapbookTags()
                .then((data) => {
                    showBooks(data)
                })
        }
        else {
            getScrapbookByTag(event.target.value)
                .then((data) => {
                    showBooks(data)
                })
        }
    }








    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <div className="tagFilter">
                <select id="tag" onChange={(event) => {
                    bookFilter(event)
                }}
                    defaultValue=""
                    name="tag"
                    className="filterDropdown"
                >
                    <option key="tag--0" value={0}>Pick a Tagged State</option>
                 
                    {tag.map((tags) => 
                        <option key={tags?.id} value={tags?.id}>
                            {tags?.label}
                        </option>
                    )}

                    
                </select>
            </div>






            <div className="Tags"></div>
            {
                scrapbooks.map(
                    (book) => {

                        // is user signed in staff? - if true, render all books and authorized delete button

                        return (

                            <div className="card equal-height has-text-centered"><div key={`book.id-${book.id}`}>

                                <Link to={`/scrapbook/${book.id}`}> {book.scrapbook.name}</Link>
                                <div>{book.scrapbook.description}</div>
                                <div><Link to={`/users/${book?.scrapbook?.user?.id}`}> {book?.scrapbook?.user?.user?.username}</Link></div>
                                <div> tag: {book.tag.label}</div>




                                {currentUser.staff === true ?


                                    <button className="button" onClick={() => {
                                        deleteScrapbookTag(book.id).then(getAllTags);
                                    }}>Authorized User Delete</button>

                                    : <div></div>}



                            </div>


                            </div>
                        )

                    }
                )


            }


        </>
    )
}


