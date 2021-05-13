import React, {useState} from 'react'

const FoodList = ({todayFoods}) => {
    console.log(todayFoods)
    return (
        <>
        <h1>Today's Foods</h1>
        
        {
            todayFoods.map((elem) =>{
                return <p>{elem.quantity} {elem.name} = {elem.quantity * elem.calories}</p>
            })
        }
        </>
    )
}

 export default FoodList