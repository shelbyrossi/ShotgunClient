import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookTags } from "./FeedManager"
import { ImageList } from "../images/ImageList"
import { getScrapbookTagsByTag } from "../scrapbook/ScrapbookManager"
import { getImages } from "../images/ImageManager"
import {deleteScrapbookTag} from "../scrapbook/ScrapbookManager"
import {useHistory} from "react-router-dom"




export const FeedScrapbooks = () => {

    // declaring "scrapbooks that defines state
    // declaring "showBooks" that defines function that will modify state/set value of works
    // useState passes a value as argument and returns ARRAY WHEN INVOKED

    const [scrapbooks, showBooks] = useState([])
    const [filterTag, showFilteredTags] = useState(0)
    const [tagChoice, setTagChoice] = useState([])
    const [image, setImage] = useState([])
    const [foundImage, setFoundImage] = useState([])
    const history = useHistory()


    //   getting all scrapbooks and tags / setting 

    useEffect(() => {
        getScrapbookTags().then((data) => showBooks(data))
    }, [])


//    getting all the images and setting images 
    useEffect(() => {
        getImages().then((data) => setImage(data))


    }, [])


    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <div className='container'>
                <div className='column'>
                    <div className='title'>Posts</div>


                    {/* TAG DROPDOWN FOR FILTERING */}

                    <fieldset>
                        <label htmlFor='tagy-select'>
                            {" "}
                            Choose a tag:
                        </label>
                        <select
                            className='select'
                            id='tag-select'
                            onChange={(evt) => {
                                setTagChoice(evt.target.value)
                            }}>
                            <option value=''>
                                --Please choose a tag-
                            </option>
                            {scrapbooks.map((tag) => (
                                <option key={tag.tag.id} value={tag.tag.id}>
                                    {tag.tag.label}
                                </option>
                            ))}
                        </select>
                    </fieldset>
                </div></div>



            <div className="Tags"></div>
            {
                scrapbooks.map(
                    (book) => {

                        // is user signed in staff? - if true, render all books and authorized delete button

                        return book?.scrapbook?.user?.staff === true ?

                            <div className="card equal-height has-text-centered"><div key={`book.id-${book.id}`}>

                                <Link to={`/scrapbook/${book.id}`}> {book.scrapbook.name}</Link>
                                <div>{book.scrapbook.description}</div>
                                <div><Link to={`/users/${book?.scrapbook?.user?.id}`}> {book?.scrapbook?.user?.user?.username}</Link></div>
                                <div> tag: {book.tag.label}</div>


                                    <button className="button" onClick={() => {

                                        deleteScrapbookTag(book.id)
                                            .then(() => history.push("/scrapbookFeed"))
                                            .then(getScrapbookTags);

                                    }}>Authorized User Delete</button>

                            </div>

                            </div>
                            // if not staff, only render all books, no authorized delete button
                            : <div><div key={`book.id-${book.id}`}></div>

                            <Link to={`/scrapbook/${book.id}`}> {book.scrapbook.name}</Link>
                            <div>{book.scrapbook.description}</div>
                            <div><Link to={`/users/${book?.scrapbook?.user?.id}`}> {book?.scrapbook?.user?.user?.username}</Link></div>
                            <div> tag: {book.tag.label}</div>

                             </div>

                    }
                )


            }


        </>
    )
}


