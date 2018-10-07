export const currency = {
    id: '',
    name: 'Рубль',
    isoCode: 'RUR'
}

export const today = {
    date: new Date(),
    getDate: () => this.date
}

export const currencyCost = {
    id: '',
    currencyId: '',
    date: '', // foreignKey, дата, когда валюта столько стоит. Потом подтягивать к Вещам и Заказам
    value: ''
}

export const itemStatus = {
    notOnSale: 'Снято с продажи',
    onSale: 'Выставлено на продажу',
    sold: 'Продано'
}

export const order = {
    id: '',
    date: '',
    currencyCostId: ''

}

export const item = {
    id: 'number',
    orderId: '',
    brandId: '',
    name: '',
    description: '',
    purchaseDate: today.getDate(),
    purchaseCost: 'number',
    purchaseCurrency: '',
    purchaseCurrencyCost: '',
    status: itemStatus.notOnSale,
    sellCost: '',
    sellCurrency: '',
    sellCurrencyCost: '',
    sellDate: '',
    additionalExpences: '', // доп расходы - на почту и прочее

    getIncome: () => {},
    getExpences: () => {}, // TODO: расходы, берутся из расходов order и доп расходов
    getRealizationDays: () => {}
}