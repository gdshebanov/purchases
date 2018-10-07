import React from 'react'
import PropTypes from 'prop-types'
import { SearchField } from 'react-desktop/macOs'

class Search extends React.Component {

    handleChange = e => console.log(e.target.value)

    render () {
        const { placeholder } = this.props
        return (
            <div>
                <SearchField
                    placeholder={placeholder}
                    defaultValue=""
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

Search.propTypes = {
    placeholder: PropTypes.string
}

export default Search