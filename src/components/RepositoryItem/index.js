// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repo} = props
  const {
    avatar_url: avatarUrl,
    forks_count: forksCount,
    issues_count: issuesCount,
    name,
    stars_count: starsCount,
  } = repo

  return (
    <li className="full-bg1">
      <img src={avatarUrl} alt={name} className="img2" />
      <h1 className="para10">{name}</h1>
      <div className="div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="img3"
        />
        <p className="para11">{starsCount} stars</p>
      </div>
      <div className="div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="img3"
        />
        <p className="para11">{forksCount} forks</p>
      </div>
      <div className="div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="img3"
        />
        <p className="para11">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
