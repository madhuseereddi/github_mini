import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  render() {
    const {languageFiltersData, updateLanguage, selectedLanguage} = this.props

    return (
      <div className="ul1">
        {languageFiltersData.map(each => (
          <button
            className="main-li"
            key={each.id}
            onClick={() => updateLanguage(each.id)}
          >
            <li className={selectedLanguage === each.id ? 'li1' : 'li2'}>
              {each.language}
            </li>
          </button>
        ))}
      </div>
    )
  }
}

export default LanguageFilterItem
