import React from 'react'
import { View, Box, Label } from 'react-desktop/macOs'
import Button from '../../components/Button'
import CurrencyWidget from '../currency/'
import * as styling from '../../constants/styling'
import Search from "../../components/Search";

class MainTab extends React.Component {

    componentDidMount () {
    }

    render () {
        return (
            <div>
                <View layout={'vertical'}>
                    <h4>Главная</h4>
                    {/*<Box label={'Быстрый поиск:'} width={'500px'}>*/}
                        {/*<Search placeholder={'Заказ'}/><br/>*/}
                        {/*<Search placeholder={'Вещь'}/>*/}
                    {/*</Box>*/}
                    <div>&nbsp;</div>
                    <Box label={'Добавить:'} width={'500px'}>
                        <Button label={'+Заказ'} />&nbsp;&nbsp;
                        <Button label={'+Вещь'} iconName={'unknown'} />&nbsp;&nbsp;
                        <Button label={'+Брэнд'} />&nbsp;&nbsp;
                    </Box>
                    <div>&nbsp;</div>
                    <CurrencyWidget />
                </View>
            </div>
        )
    }
}

export default MainTab