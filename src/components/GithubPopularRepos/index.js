import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    selectedLanguage: 'ALL',
    repos: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getFetch()
  }

  componentDidUpdate(prevProps, prevState) {
    const {selectedLanguage} = this.state
    if (prevState.selectedLanguage !== selectedLanguage) {
      this.getFetch()
    }
  }

  getFetch = async () => {
    this.setState({isLoading: true})
    const {selectedLanguage} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.popular_repos)
    this.setState({repos: data.popular_repos, isLoading: false})
  }

  updateLanguage = id => {
    this.setState({selectedLanguage: id})
  }

  render() {
    const {repos, selectedLanguage, isLoading} = this.state

    return (
      <div className="full-bg">
        <h1 className="head1">Popular</h1>
        <LanguageFilterItem
          languageFiltersData={languageFiltersData}
          updateLanguage={this.updateLanguage}
          selectedLanguage={selectedLanguage}
        />
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repos-list">
            {repos.map(repo => (
              <RepositoryItem key={repo.id} repo={repo} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
