// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => {
  console.log('configured')
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        const onChangeContentChecked = () => {
          onToggleShowContent()
        }

        const onCheckedLeftNavbar = () => {
          onToggleShowLeftNavbar()
        }

        const onCheckedRightNavbar = () => {
          onToggleShowRightNavbar()
        }

        return (
          <nav className="nav-cont">
            <ul className="nav-layout-cont">
              <h1>Layout</h1>
              <li>
                <input
                  onClick={onChangeContentChecked}
                  id="content-check"
                  type="checkbox"
                />
                <label htmlFor="content-check">Content</label>
              </li>
              <li>
                <input
                  onClick={onCheckedLeftNavbar}
                  id="left-nav-check"
                  type="checkbox"
                />
                <label htmlFor="left-nav-check">Left Navbar</label>
              </li>
              <li>
                <input
                  onClick={onCheckedRightNavbar}
                  id="right-nav-check"
                  type="checkbox"
                />
                <label htmlFor="right-nav-check">Right Navbar</label>
              </li>
            </ul>
          </nav>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
