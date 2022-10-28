// Write your code here
import {Component} from 'react'

import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Footer from '../Footer'

const Content = () => (
  <div className="content-cont">
    <h1>Content</h1>
    <p>Lorem ipsum</p>
  </div>
)

const LeftNavBar = () => (
  <div className="left-nav-style">
    <h1>Left Navbar Menu</h1>
    <p>item 1</p>
    <p>item 2</p>
    <p>item 3</p>
    <p>item 4</p>
  </div>
)

const RightNav = () => (
  <div className="right-nav-style">
    <h1>Right Navbar</h1>
    <div>
      <p>Ad 1</p>
      <p>Ad 2</p>
    </div>
  </div>
)

class Layout extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="layout-cont">
              <Header />
              <div className="body-cont">
                {showLeftNavbar && <LeftNavBar />}
                {showContent && <Content />}
                {showRightNavbar && <RightNav />}
              </div>
              <Footer />
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Layout
