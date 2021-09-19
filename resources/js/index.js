import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { StickyContainer } from "react-sticky";
import "../css/app.css";

//PAGES
import Homepage from "./pages/home";
import About from "./pages/about";
import Platform from "./pages/mymup-platform";
import Contact from "./pages/contact";
import Clients from "./components/clients";
import TermsConditions from "./pages/terms-conditions";
import PrivacyPolicy from "./pages/privacy-policy";
import Cookies from "./pages/cookies";

//COMPONENTS
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <div className="min-h-screen">
                    <Header />

                    <StickyContainer>
                        <Navbar />

                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/mymup-platform"
                                component={Platform}
                            />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/clients" component={Clients} />
                            <Route
                                exact
                                path="/terms-conditions"
                                component={TermsConditions}
                            />
                            <Route
                                exact
                                path="/privacy-policy"
                                component={PrivacyPolicy}
                            />
                            <Route exact path="/cookies" component={Cookies} />
                        </Switch>

                        <Footer />
                    </StickyContainer>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;
