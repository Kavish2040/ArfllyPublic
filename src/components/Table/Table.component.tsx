import { Container, Flex, Group, Table as MantineTable, TableProps } from '@mantine/core';
import { IconArrowsSort, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Text } from '../Text';

type HProps = {
    header: string;
    sort?: boolean;
    alignment?: string;
};

const TableHeader = ({ alignment, header, sort }: HProps) => (
    <th>
        <Flex direction='row' align='center' justify={alignment && alignment === 'right' ? 'flex-end' : 'flex-start'}>
            <Text inline mr={10} fw={500}>
                {header}
            </Text>
            {sort ? <IconArrowsSort size={15} /> : <></>}
        </Flex>
    </th>
);

type RProps = {
    columns: any;
    row: any;
};

const TableRow = ({ columns, row }: RProps) => {
    return (
        <tr>
            {columns.map((column, index) => {
                let renderValue;
                if (column.value) {
                    const rowProperties = column.value.split('.');
                    renderValue =
                        rowProperties.length > 1 ? row[rowProperties[0]][rowProperties[1]] : row[column.value];
                }

                if (column.combineValue) {
                    renderValue += ` ${row[column.combineValue]}`;
                }
                return (
                    <td key={index}>
                        {column.component ? (
                            <Group
                                onClick={() => (column.componentHandler ? column.componentHandler(row) : {})}
                                position={column.alignment ? column.alignment : 'left'}
                            >
                                {column.component}
                            </Group>
                        ) : (
                            <Group position={column.alignment ? column.alignment : 'left'}>
                                <Text noMargin fw={300}>
                                    {renderValue}
                                </Text>
                            </Group>
                        )}
                    </td>
                );
            })}
        </tr>
    );
};

type PProps = {
    rows: any;
    itemsPerPage: number;
    currentPage: number;
    handleChangePage: (page) => void;
};

const TablePagination = ({ rows, itemsPerPage, currentPage, handleChangePage }: PProps) => {
    const maxPages = rows.length < itemsPerPage ? 1 : Math.ceil(rows.length / itemsPerPage);
    return (
        <Container size='lg' mt={20} p={0}>
            <Flex direction='row' align='center'>
                <Text fw={300} span mr={45}>
                    Page {currentPage} of {maxPages}
                </Text>
                <Group
                    className={currentPage === 1 ? '' : 'clickable'}
                    onClick={() => handleChangePage(currentPage === 1 ? currentPage : currentPage - 1)}
                >
                    <IconChevronLeft color={currentPage === 1 ? 'grey' : 'black'} />
                    <Text fw={300} span color={currentPage === 1 ? 'grey' : 'black'}>
                        Prev
                    </Text>
                </Group>
                <Group
                    ml={25}
                    className={currentPage === maxPages ? '' : 'clickable'}
                    onClick={() => handleChangePage(currentPage === maxPages ? currentPage : currentPage + 1)}
                >
                    <Text fw={300} span color={currentPage === maxPages ? 'grey' : 'black'}>
                        Next
                    </Text>
                    <IconChevronRight color={currentPage === maxPages ? 'grey' : 'black'} />
                </Group>
                <Text fw={300} span ml={45}>
                    Viewing {rows.length < itemsPerPage ? rows.length : itemsPerPage * currentPage} of {rows.length}
                </Text>
            </Flex>
        </Container>
    );
};

type CProps = {
    header: string;
    sort?: boolean;
    combineValue?: string;
    value?: string;
    alignment?: string;
    component?: React.ReactNode;
    componentHandler?: (row) => void;
}[];

type TProps = TableProps & {
    columns?: CProps;
    rows?: any;
    pagination?: boolean;
    itemsPerPage?: number;
};

const Table = (props: TProps) => {
    const { columns, rows, pagination, itemsPerPage = 10, ...rest } = props;
    const [renderedRows, setRenderedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const renderTable = useCallback(() => {
        if (itemsPerPage > rows?.length) {
            setRenderedRows(rows);
        } else {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = currentPage * itemsPerPage;

            const tempRows = rows.slice(startIndex, endIndex);
            setRenderedRows(tempRows);
        }
    }, [currentPage, itemsPerPage, rows]);

    useEffect(() => {
        renderTable();
    }, [currentPage, renderTable]);

    return (
        <>
            <MantineTable {...rest}>
                <thead>
                    <tr>
                        {columns &&
                            columns.map((column, index) => (
                                <TableHeader
                                    header={column.header}
                                    alignment={column.alignment}
                                    sort={column.sort}
                                    key={index}
                                />
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {renderedRows.map((row, index) => (
                        <TableRow row={row} columns={columns} key={index} />
                    ))}
                </tbody>
            </MantineTable>
            {pagination && (
                <TablePagination
                    rows={rows}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    handleChangePage={setCurrentPage}
                />
            )}
        </>
    );
};

export { Table };
