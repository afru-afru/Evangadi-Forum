import { useContext } from "react"
import { AppState } from "../App"


function Home() {
 const {user}= useContext(AppState)

  return (
    <div>
     <p>welcome  :  {user.username}</p>
    </div>
  )
}

export default Home
