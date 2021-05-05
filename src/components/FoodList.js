import React from 'react'

class FoodList extends React.Component{
    render() {
        const {data} = this.props

        let total = data.reduce((acc, elem) =>{
            return acc + (elem.calories * elem.quantity)
        }, 0)
        
        return(
            <div>
                <h3><b>Today's Food</b></h3>
              {
                  data.map((elem) =>{
                      return <p>{elem.name} {elem.quantity} = {elem.quantity * elem.calories} calories</p>
                  })
              }
              <h1>TOTAL: {total} cal</h1>
            </div>
        )
    }
}
 export default FoodList