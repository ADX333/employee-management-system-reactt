import profile from './assets/Photograph.jpeg'

export default function Card(){
  return(
    <div className="card">
      <img src={profile}></img>
      <h2>Anshuman</h2>
      <p>I'm a student at Bennett University</p>
    </div>
  )
}