import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])


    return (
      <main> 
         {
        loading ? ( <div style={{ alignItems: "center", backgroundColor : "#ffffff", display : "flex", justifyContent: "center", width: "100%", height: "100vh" }} >
          <ClimbingBoxLoader color={"#7b3f5c"} loading={loading} size={30}/>
          </div>
        
        ) : (
          <><Header /><Outlet /></>
        )}
      </main>
    )
  }

export default Home