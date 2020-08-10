import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path = "/login">
                    <LoginPage/>
                </Route>
                <Route exact path = "/sign-up">
                    <SignupPage/>
                </Route>
                <Route exact path = "/address">
                    <AddressPage/>
                </Route>
                <Route exact path = "/restaurant">
                    <RestaurantPage/>
                </Route>
                <Route exact path = "/restaurant/details">
                    <RestaurantDetailPage/>
                </Route>
                <Route exact path = "/profile-page">
                    <ProfilePage/>
                </Route>
                <Route exact path = "/profile-page/edit/user">
                    <ProfileEditPage/>
                </Route>
                <Route exact path = "/profile-page/edit/address">
                    <ProfileAddressPage/>
                </Route>
                <Route exact path = "/car">
                    <CarPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router 