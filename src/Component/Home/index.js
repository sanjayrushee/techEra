import {Component} from 'react'
import CourseList from '../CourseList'

const apistatus = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  fail: 'fail',
}

class Home extends Component {
  state = {
    api: apistatus.initial,
    courseList: [],
  }

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    this.setState({api: apistatus.loading})
    const url = 'https://apis.ccbp.in/te/courses'
    const option = {
      method: 'GET',
    }

    const response = await fetch(url, option)
    if (response) {
      const data = await response.json()
      const formatedata = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({courseList: formatedata, api: apistatus.success})
    } else {
      this.setState({api: apistatus.fail})
    }
  }

  render() {
    const {courseList} = this.state
    console.log(courseList)
    return (
      <>
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            className="nav-logo"
            alt="logo"
          />
        </nav>
        <div>
          <ul>
            {courseList.map(i => (
              <CourseList details={i} key={i.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
