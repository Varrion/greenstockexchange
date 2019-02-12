import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {LocationProvider, Router} from "@reach/router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateProductPage from "./pages/CreateProductPage";
import Dashboard from "./pages/DashboardPage";

const content ={
    padding:'10',
    paddingBottom:'70px',
    height:'100%',

};

class App extends Component {
    render() {
        return (
            <div className="AppContainer">
                <Header/>
                <div style={content}>
                    <LocationProvider>
                        <Router>
                            <Dashboard path="/" />
                            <LoginPage path="/login" default/>
                            <RegisterPage path='/register'/>
                            <CreateProductPage path='/create/product'/>
                        </Router>
                    </LocationProvider>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
