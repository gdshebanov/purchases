import React from 'react'
import PropTypes from 'prop-types'
import { Button} from 'react-desktop/macOs'
import * as icons from '../icons/'
import { BUTTON_COLOR, ICON_FILL_COLOR } from "../constants/styling"


const getIcon = (iconName) => {
    switch (iconName) {
        case ('airplane'): return icons.airplane(ICON_FILL_COLOR)
        case ('cog'): return icons.cog(ICON_FILL_COLOR)
        default: return null
    }
}

class ButtonWrapped extends React.Component {

    render () {
        const { onClick, label, iconName } = this.props

        const icon = getIcon(iconName)

        return (
            <Button
                onClick={onClick}
                color={BUTTON_COLOR}
                size={16}
                padding={5}
            >
                {icon}
                {label}
            </Button>
        )
    }
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    onClick: () => {}
}

export default ButtonWrapped