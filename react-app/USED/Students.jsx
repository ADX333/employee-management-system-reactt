import PropTypes from 'prop-types'

export default function Student({ name="Guest", age=0}){
  return(
    <div className="student">
      <p>Name: {name}, Age is {age} years old </p>
      <hr></hr>
    </div>
  )
}
Student.propTypes={
  name: PropTypes.string,
  age: PropTypes.number
}

