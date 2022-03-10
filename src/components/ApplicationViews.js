import React from "react"
import { Route } from "react-router-dom"
import {ScrapbookForm} from "./scrapbook/CreateNewScrapbook"
import { ImageForm } from "./images/CreateNewImage"
import {MyScrapbook} from "./scrapbook/MyScrapbooks"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path='/CreateScrapbook'>
                {/* child */}
                <ScrapbookForm />
            </Route>
            <Route exact path='/CreateScrapbook'>
                {/* child */}
                <ImageForm />
            </Route>
            <Route exact path='/MyBooks'>
                {/* child */}
                <MyScrapbook />
            </Route>

        </>
    )
}