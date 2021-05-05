import React from 'react'

class FoodBox extends React.Component {
  state = {
    quantity: 1,
    name: '',
    
  }

  handleChange = (event) =>{
    this.setState({
      quantity: Number(event.target.value)
    })
  }

  render(){
    const{name, calories, image} = this.props.foods
    const{quantity} = this.state

    return (
      <div className="box">
        <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input onChange={this.handleChange} className="input" type="number" value={this.state.quantity}/>
            </div>
            <div className="control">
              <button onClick={() => this.props.onToday(this.props.foods, quantity)} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
      </div>
    )
  }
}

export default FoodBox