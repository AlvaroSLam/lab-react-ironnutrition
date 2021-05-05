import React from 'react'

class Search extends React.Component {
    render(){
        return(
            <div>
                <input onChange={this.props.onSearch} type='text'/>
            </div>
        )
    }
}

export default Search