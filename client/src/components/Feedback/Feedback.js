import './Feedback.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Feedback = ({setAdminMode}) => {
    const [feedbacks,setFeedbacks] = useState([])

    setAdminMode(true)

    useEffect(() => {
        const getFeedbacks = async() => {

           try {
               const res = await axios.get("/feedback")
               console.log(res.data)
               setFeedbacks(res.data)
        }

        catch (error) {
    } 
            
            



        }
        getFeedbacks()
    },[])

    
  return (

    <>
<header className='f-header'>
    <div className='f-title-wrap'>
        <h3>Feedbacks</h3>
    </div>
</header>
<main className='feedback-main'>
    {
        feedbacks.map((feedback) => (



    <div className='feedback-wrap'>
        <h4>username : {feedback.username}</h4>
        <p>{feedback.desc}</p>
    </div>
        ))

    }

</main>
    </>
  )
}

export default Feedback