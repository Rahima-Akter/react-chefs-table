import Navbar from "./components/Navbar"
import "../src/index.css"
import Banner from "./components/Banner"
import OurRecipies from "./components/OurRecipies"
import RecipieCards from "./components/RecipieCards"
import { useState } from "react"
import CookingTable from "./components/CookingTable"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cook, setCook] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalory, setTotalCalory] = useState(0)

  const handleWantToCook = (recipie) => {
    const existedRecipie = cook.find(item => item.id === recipie.id)

    if (!existedRecipie) {
      setCook([...cook, recipie])
      success(recipie.dish_name)
    } else {
      notifi()
    }
  };

  const handleCurrentlyCooking = id => {
    // find which recipie to remove
    const nowCooking = cook.find(recipie => recipie.id === id)
    // remove recipie
    const deleteRecipie = cook.filter(recipie => recipie.id !== id)
    setCook(deleteRecipie)
    setCurrentlyCooking([...currentlyCooking, nowCooking])
  }

  const handleTotalTimeCalory = (time, calory) => {
    setTotalTime(totalTime + time)
    setTotalCalory(totalCalory + calory)
  }

  // toast
  const notifi = () => {
    toast('❌ this item already exists', {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  // success toast
  const success = (name) => {
    toast.success(`${name} added to the cooking table`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipies></OurRecipies>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 gap-6 mx-auto my-5">
        <div className="lg:col-span-2">
          <RecipieCards handleWantToCook={handleWantToCook} cook={cook}></RecipieCards>
        </div>
        <CookingTable cook={cook} handleCurrentlyCooking={handleCurrentlyCooking} currentlyCooking={currentlyCooking} handleTotalTimeCalory={handleTotalTimeCalory} totalTime={totalTime} totalCalory={totalCalory}></CookingTable>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
