import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { columns } from './columns'

const createRows = (numberOfRows) => {
    let rows = []
    for (let i = 1; i < numberOfRows; i++) {
        rows.push({
            id: i,
            title: 'Title ' + i,
            icon: 'Icon' + i
        })
    }

    return rows
}

const rows = createRows(20)

const rowGetter = (i) => {
    return rows[i]
}

class Orders extends React.Component {
    render () {
        return (
            <div>
                <h4>Заказы</h4>
                <ReactDataGrid
                    columns={columns}
                    rows={rows}
                    rowsCount={rows.length}
                    rowGetter={rowGetter}
                    minHeight={600}
                />
            </div>
        )
    }
}

export default Orders