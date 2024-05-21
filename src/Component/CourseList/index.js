import {Link} from 'react-router-dom'

const CourseList = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <Link to={`/course/${id}`} className="link-el">
      <li>
        <img src={logoUrl} alt={name} />
        <h1>{name}</h1>
      </li>
    </Link>
  )
}

export default CourseList
