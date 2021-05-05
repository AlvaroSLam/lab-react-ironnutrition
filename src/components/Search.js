import React from 'react'

class Search extends React.Component {
    render(){
        return(
            <div>
                {/* El Search funciona solo con onChange */}
                <input onChange={this.props.onSearch} type='text'/>
            </div>
        )
    }
}

export default Search