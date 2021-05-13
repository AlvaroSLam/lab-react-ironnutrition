import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';

import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import FoodList from './components/FoodList'

const App = () => {
  const [OGfoods, setOGfoods] = useState(foodsJSON)
  const [foods, setFoods] = useState(foodsJSON)
  const [showForm, setShowForm] = useState(false)
  const [todayFoods, setTodayFoods] = useState([])

  const addFood = (event) => {
    event.preventDefault()
      const {name, calories, image} = event.target
      let newItem = {
        name: name.value,
        calories: calories.value,
        image: image.value
      }
    setFoods([newItem, ...foods])
    setShowForm(false)
  }

  const handleSearch = (event) =>{
    let word = event.target.value.toLowerCase()

    let filteredList =  OGfoods.filter((elem) =>{
      return elem.name.toLowerCase().includes(word)
    })
    setFoods(filteredList)
  }
  
  const handleToday = (food, quantity) => {
       
    let cloneFoods = JSON.parse(JSON.stringify(todayFoods))
      let isFoodPresent = false
      for (let i=0; i<cloneFoods.length; i++ ) {
          if (cloneFoods[i].name == food.name){
            cloneFoods[i].quantity = cloneFoods[i].quantity + quantity
              isFoodPresent = true
              break;
          }
      }

      if (isFoodPresent) {
        setTodayFoods(cloneFoods)
      }
      else {
        let newFood = {
          name: food.name,
          calories: food.calories,
          quantity: quantity,
        }
  
        setTodayFoods([...todayFoods, newFood])
      }  
  }

  return (
    <>
     <h1>IronNutrition</h1>
    <input onChange={handleSearch} type='text'/>
    <br />
    {
      showForm ? 
      <AddFood onAdd={addFood}/>
      :
      <button onClick={() => setShowForm(true)}>Form</button>
    }

    <div class="columns">
      <div class="column">
      {
        foods.map((elem, idx) =>{
          return <FoodBox 
            foods={elem}
            key={idx}
            onToday={handleToday}
          />
        })
      }
      </div>

      <div class="column">
        <FoodList todayFoods={todayFoods}/>
      </div>
      
    </div>
      
    </>
  )
}

export default App;
