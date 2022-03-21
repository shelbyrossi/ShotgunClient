import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookTags } from "./FeedManager"
import { fetchTags } from "../tags/TagManager"
import { getImages } from "../images/ImageManager"
import { deleteScrapbookTag } from "../scrapbook/ScrapbookManager"
import { useHistory } from "react-router-dom"
import { getCurrentUser } from "../scrapbook/ScrapbookManager"
import { getScrapbookByTag } from "../tags/TagManager"
import "./feed.css"




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
            <body class = "container bodyFeed">
        <center>



            <div className="tagFilter">
                <select id="tag" onChange={(event) => {
                    bookFilter(event)
                }}
                    defaultValue=""
                    name="tag"
                    className="filterDropdown"
                >
                    <option key="tag--0" value={0}>filter by tag</option>
                 
                    {tag.map((tags) => 
                        <option key={tags?.id} value={tags?.id}>
                            {tags?.label}
                        </option>
                    )}

                </select>
            </div>
                    </center>






            <div className="Tags"></div>
            {
                scrapbooks.map(
                    (book) => {

                        // is user signed in staff? - if true, render all books and authorized delete button

                        return (
                                <center>
                            <div className="feed"><div key={`book.id-${book.id}`}>

                               

                                <Link className="name" to={`/scrapbook/${book.id}`}> {book.scrapbook.name}</Link>
                                <div className="description">"{book.scrapbook.description}"</div>
                                <div><Link className="userLink" to={`/users/${book?.scrapbook?.user?.id}`}> {book?.scrapbook?.user?.user?.username}</Link></div>
                                <div className="tagLabel"> tag: {book.tag.label}</div>




                                {currentUser.staff === true ?


                                    <button className="buttonauth" onClick={() => {
                                        deleteScrapbookTag(book.id).then(getAllTags);
                                    }}>authorized user delete.</button>

                                    : <div></div>}



                            </div>


                            </div>
                            </center>
                        )
                        
                    }
                    )
                    
                    
                }
                </body>


        </>
    )
}


