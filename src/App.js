import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
export default class App extends Component {
  pageSize = 12
  render() {
    return (
      <>

        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" title="General" />} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" title="Business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"title="Entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"title="Health" />} />
              <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general"title="General" />} />
              <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"title="Science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" title="Sports"/>} />
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"title="Technology" />} />
            </Routes>
          </div>
          <Footer title="TodaysNews"  />
        </Router>
      </>
    )
  }
}