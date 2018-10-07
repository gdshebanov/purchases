import React from 'react'
import { TextInput, Label, Text } from 'react-desktop/macOs'
import Button from '../../components/Button'
import { HuePicker } from 'react-color'

const charWidth = 8.7

class BrandForm extends React.Component {

    state = {
        textColor: {hex: 'black'},
        backgroundColor: {hex: 'white'},
        brandName: '',
        width: charWidth,
        height: 14,
        padding: 5
    }

    handleChangeText = (e) => {
        const name = e.target.value
        this.setState({
            brandName: name,
            width: name.length * charWidth
        })
    }

    handleChangeBackgroundColor = (color) => {
        this.setState({ backgroundColor: color })
    }

    handleChangeTextColor = (color) => {
        this.setState({ textColor: color })
    }

    render () {
        return (
            <div>
                <h4>Бренд:</h4>
                <TextInput
                    label="Название бренда:"
                    placeholder=""
                    defaultValue=""
                    onChange={ this.handleChangeText }
                    width={200}
                />

                <br/>
                <Label>Цвет фона:</Label>
                <HuePicker
                    name={'backgroundColorPicker'}
                    color={ this.state.backgroundColor }
                    onChange={ this.handleChangeBackgroundColor }
                />

                <br/>
                <Label>Цвет текста:</Label>
                <HuePicker
                    name={'textColorPicker'}
                    color={ this.state.textColor }
                    onChange={ this.handleChangeTextColor }
                />

                <br/>
                <Label>Результат:</Label>
                <Text
                    padding={this.state.padding}
                    height={this.state.height}
                    width={this.state.width}
                    size={16}
                    color={this.state.textColor.hex}
                    background={this.state.backgroundColor.hex}
                >
                    {this.state.brandName}
                </Text>

                <br/>
                <Button label={'Готово'}/>
            </div>
        )
    }
}

export default BrandForm