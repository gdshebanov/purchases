import React from 'react'
import { Window, TitleBar, Text, SegmentedControl, SegmentedControlItem } from 'react-desktop/macOs';
import * as styling from '../constants/styling'
import MainTab from './main/'
import Orders from './orders/'
import BrandForm from './brands/BrandForm'

class Workspace extends  React.Component {

    state={
        hidden: false,
        isFullScreen: true,
        resizedParams: { height: '300px', width: null },
        selected: 1
    }

    render () {
        return (
            <Window
                chrome
                color={styling.WINDOW_COLOR}
                padding={styling.WINDOW_PADDING}
                hidden={this.state.hidden}
                theme={styling.THEME}
            >
                <TitleBar
                    title="Покупочки"
                    controls
                    isFullscreen={this.state.isFullScreen}
                    onMaximizeClick={() => console.log('maximize')}
                    onMinimizeClick={() => console.log('minimize')}
                    onResizeClick={() => {
                        this.setState({ isFullScreen: this.state.isFullScreen })
                    }}
                    onCloseClick={() => console.log('close')}
                    transparent={false}
                />

                <SegmentedControl box>
                    {this.renderItems()}
                </SegmentedControl>
            </Window>
        )
    }

    renderItems() {
        return [
            this.renderItem(1, 'Главная', <MainTab />),
            this.renderItem(2, 'Заказы', <Orders />),
            this.renderItem(3, 'Вещи', <Text>Content 2</Text>),
            this.renderItem(4, 'Бренды', <BrandForm />)
        ];
    }

    renderItem(key, title, content) {
        return (
            <SegmentedControlItem
                key={key}
                title={title}
                selected={this.state.selected === key}
                onSelect={() => this.setState({selected: key})}
            >
                {content}
            </SegmentedControlItem>
        )
    }
}

export default Workspace