import {Component} from 'react'

const status = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  fails: 'fails',
}

class Courses extends Component {
  state = {course: {}, loading: status.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({loading: status.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const method = {
      method: 'GET',
    }
    const res = await fetch(url, method)
    if (res.ok === true) {
      const data = await res.json()
      const updateCourse = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({course: updateCourse, loading: status.success})
    } else {
      this.setState({loading: status.fails})
    }
  }

  render() {
    const {course} = this.state
    const {id, name, imageUrl, description} = course
    return (
      <div>
        <img src={imageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    )
  }
}
export default Courses
