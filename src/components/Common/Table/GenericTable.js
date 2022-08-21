import React, { useCallback } from "react";
import { Table, Icon } from "semantic-ui-react";

import { DateCell, OperationsCell, PriceCell } from "./Cell";
import { getTotalIncomePerADay } from "../../../utils/MoneyUtils.ts";

const GenericTable = ({ tableData = [[]] }) => {
    const renderTableBody = useCallback(() => tableData.map((values) => {
        return values.map(({ id, date, operations, totalPriceBeforeTaxes, totalPriceAfterTaxes }, i) => (
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
                        {totalPriceBeforeTaxes}
                    </PriceCell>
                </Table.Cell>
                <Table.Cell i={i}>
                    <strong>
                        <PriceCell euro>
                            {totalPriceAfterTaxes}
                        </PriceCell>
                    </strong>
                </Table.Cell>
            </Table.Row>
        ))
    }), [tableData]);

    const shouldRenderTableBody = useCallback(() => {
        return Array.isArray(tableData) && tableData.flat().length > 0;
    }, [tableData]);

    const getNoContentElement = () => (
        <Table.Row>
            <Table.Cell colSpan="4">
                <Icon name="info circle" />
                <>Нет данных</>
            </Table.Cell>
        </Table.Row>
    );

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
                {shouldRenderTableBody() ? renderTableBody() : getNoContentElement()}
            </Table.Body>
        </Table>
    );
};

export default GenericTable;