import React from 'react'
import Header from './components/Header'
import Grid from './components/grid'
import Footer from './components/Footer'
import FormWithValidation from './components/FormWithValidation'



const App = () => {
  return (
    <>
    <div>
 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8z4+2e5j7x1l5Z5l5Z5l5Z5l5Z5l5Z5l5Z5" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8z4+2e5j7x1l5Z5l5Z5l5Z5l5Z5l5Z5l5Z5" crossOrigin="anonymous" />
    <Header />
      <Grid />
      <FormWithValidation />
      <Footer />
   

    </div>
    </>
  )
}

export default App