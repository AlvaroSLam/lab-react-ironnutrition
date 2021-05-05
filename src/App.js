import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import Search from './components/Search'
// import FoodList from './components/FoodList'

class App extends React.Component {

  state = {
    foods: foods,
    filteredFoods: foods,
    showForm: false
  }

  handleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  handleAdd = (event) => {
    event.preventDefault();
    let foodName = event.target.foodName.value
    let foodCalories = event.target.foodCalories.value
    let foodImage = event.target.foodImage.value

    const newFood = {name: foodName, calories: foodCalories, image: foodImage}
    
    this.setState({
      foods: [newFood, ...this.state.foods],
      showForm: false
    })

  }

  handleSearch = (event) =>{
    let searchText = event.target.value.toLowerCase()

    let filteredList = this.state.foods.filter((elem) =>{
      return elem.name.toLowerCase().includes(searchText)
    })

    this.setState({
      filteredFoods: filteredList
    })
  }
 
  render(){
    const {foods, filteredFoods, showForm} =this.state
    return (
      <div>
        <h1>IronNutrition</h1>
        
        <Search onSearch={this.handleSearch}/>
        <button onClick={this.handleForm}>Show Form</button>
        {
          showForm ? 
          <AddFood onAdd={this.handleAdd} />
          :
          null
        
        }
        {
          filteredFoods.map((elem, index) => {
            return <FoodBox key={index} foods={elem}/>
          })
        }
        
      </div>
    )
  }
}


export default App;
