import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getScrapbookTags } from "./FeedManager"
import { ImageList } from "../images/ImageList"
import { getScrapbookTagsByTag } from "../scrapbook/ScrapbookManager"
import {getImages} from "../images/ImageManager"





export const FeedScrapbooks = () => {
    // declaring "works" that defines state
    // declaring "showWorks" that defines function that will modify state/set value of works
    // useState passes a value as argument and returns ARRAY WHEN INVOKED




    const [scrapbooks, showBooks] = useState([])
    const [filterTag, setFilteredTags] = useState(0)
    const [tagChoice, setTagChoice] = useState("")
    const [image, setImage] = useState([])
    const [foundImage, setFoundImage] = useState([])



    //   getting all scrapbooks and tags / setting 

    useEffect(() => {
        getScrapbookTags().then((data) => showBooks(data))
    }, [])


    useEffect(() => {
        if (tagChoice)
            getScrapbookTagsByTag(tagChoice).then((scrapbooks) => {
                setFilteredTags(scrapbooks)
            })
    }, [tagChoice])

    useEffect(() => {
        getImages().then((data) => setImage(data))
        

    }, [])





    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <div className='container'>
                <div className='column'>
                    <div className='title'>Posts</div>

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

                        return <center>

                            <div className="card equal-height has-text-centered"><div key={`book.id-${book.id}`}>




                                <Link to={`/scrapbooktags/${book.id}`}> {book.scrapbook.name}</Link>
                                <div>{book.scrapbook.description}</div>
                                <div><Link to={`/users/${book?.scrapbook?.user?.id}`}> {book?.scrapbook?.user?.user?.username}</Link></div>
                                   <div> tag: {book.tag.label}</div>
                                   



                            </div>

                            </div>

                        </center>



                    }
                )


            }


        </>
    )
}


