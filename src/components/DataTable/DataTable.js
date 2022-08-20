import React, { useMemo } from "react"
import { Table, List, Label } from "semantic-ui-react"
import { groupByKey, sum } from "../../utils/ArrayUtil"
import { formatDate } from "../../utils/DateUtils.ts";
import Price from "../Price";

import { getRandomColorName } from "../../utils/ColorUtils";

const DateCell = ({ children, price = 0 }) => (
    <>
        <Label ribbon size="large" color={getRandomColorName()}>
            <Price euro>{price}</Price>
        </Label>
        <h2>{formatDate(children)}</h2>
    </>
);

const OperationsCell = ({ children }) => (
    <List as='ul'>
        {
            children.map(op => (<List.Item as='li' key={op.name}>{op.name}</List.Item>))
        }
    </List>
);

const PriceCell = ({ children }) => (
    <Price euro>
        {children}
    </Price>
)

const DataTable = ({ data }) => {

    const getTotalIncomePerADay = (entriesPerADay) => {
        return sum(entriesPerADay.map(it => sum(it.operations.map(op => op.priceAfterTaxes))))
    }

    const groupedData = useMemo(() => groupByKey(data, 'date'), [data]);

    const getTableBody = (tableData) => {
        return Object.entries(tableData).map(([key, values]) => {
            return values.map(({ id, date, operations }, i) => (
                <Table.Row key={id} verticalAlign='top'>
                    {
                        i === 0 ? (
                            <Table.Cell rowSpan={values.length} i={i} >
                                <DateCell
                                    date={date}
                                    price={getTotalIncomePerADay(values)}
                                >
                                    {date}
                                </DateCell>
                            </Table.Cell>
                        ) : ''
                    }
                    <Table.Cell i={i}>
                        <OperationsCell>
                            {operations}
                        </OperationsCell>
                    </Table.Cell>
                    <Table.Cell i={i}>
                        <PriceCell euro>
                            {sum(operations.map(op => op.originalPrice))}
                        </PriceCell>
                    </Table.Cell>
                    <Table.Cell i={i}>
                        <strong>
                            <PriceCell euro>
                                {sum(operations.map(op => op.priceAfterTaxes))}
                            </PriceCell>
                        </strong>
                    </Table.Cell>
                </Table.Row>
            ))
        })
    }

    return (
        <Table striped celled structured>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Дата</Table.HeaderCell>
                    <Table.HeaderCell>Название набора услуг</Table.HeaderCell>
                    <Table.HeaderCell collapsing>Стоимость услуги</Table.HeaderCell>
                    <Table.HeaderCell collapsing>Заработок мастера</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {getTableBody(groupedData)}
            </Table.Body>
        </Table>
    );
}

export default DataTable;