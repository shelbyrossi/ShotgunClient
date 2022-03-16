import React from "react"
import { Route } from "react-router-dom"
import {ScrapbookForm} from "./scrapbook/CreateNewScrapbook"
import { ImageForm } from "./images/CreateNewImage"
import {MyScrapbook} from "./scrapbook/MyScrapbooks"
import {ImageList} from "./images/ImageList"
import {UserDetails} from "./users/userDetails"
import {ShowScrapbookDetails} from "./scrapbook/SingleScrapbook"
import {UpdateScrapbook} from "./scrapbook/UpdateScrapbook"
import {FeedScrapbooks} from "./feed/AllScrapbooks"
import {ImageFound} from "./images/FeedImages"

import {TagForm} from "./tags/TagForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path='/CreateScrapbook'>
                {/* child */}
                <ScrapbookForm />
            </Route>
            <Route exact path='/uploadImages'>
                {/* child */}
                <ImageForm />
            </Route>
            <Route exact path='/MyBooks'>
                {/* child */}
                <MyScrapbook />
            </Route>
       
            <Route exact path='/scrapbooktags/:scrapbooktagsId(\d+)'>
                {/* child */}
                <ShowScrapbookDetails/>
            </Route>
            <Route exact path='/scrapbooktags/:scrapbooktagsId(\d+)'>
                {/* child */}
                <ImageList/>
            </Route>
            <Route exact path="/scrapbooktags/:scrapbooktagsId(\d+)/update">
                < UpdateScrapbook/>
            </Route>
            <Route exact path="/users/:usersId(\d+)">
                < UserDetails/>
            </Route>
            <Route exact path="/scrapbookFeed">
                < FeedScrapbooks/>
            </Route>
            <Route exact path="/ImageFound">
                < ImageFound/>
            </Route>
          
          
           
           
           
           


        </>
    )
}