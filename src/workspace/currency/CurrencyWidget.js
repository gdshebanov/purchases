import React from 'react'
import convertCurrency from 'nodejs-currency-converter'

class CurrencyWidget extends React.Component {

    state = {
        dollar: null
    }

    componentDidMount () {
        const dollar = convertCurrency(1, 'USD', 'RUR')
            .then(response =>  {
                console.log(response)
                this.setState({ dollar: response})
            })
    }

    render () {
        return (
            <div>
                Стоимость 1 бакса на сегодня: {this.state.dollar}
            </div>
        )
    }
}

export default CurrencyWidget