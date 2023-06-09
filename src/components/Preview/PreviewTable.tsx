import { useState } from "react";
import {
    styled,
    Table as MuiTable,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { formatToCurrency } from "../../utils/Utils";
import { SALES_DESCRIPTION, SUBTOTAL, UNIT_AMOUNT, SALE_COST } from "../../utils/CONSTANTS";
import { LineItem, PortalTableProps } from "../../types/types";

const Table = styled(MuiTable)(() => ({
    tableLayout: "fixed",
}));

const CustomTypography = styled(Typography)(() => ({
    cursor: "pointer",
    ":hover": {
        color: "red",
    },
}));

const HeaderStyledRow = styled(TableRow)(() => ({
    backgroundColor: "rgba(239, 239, 240)",
    border: "1px solid white",
}));

const BodyStyledTableCell = styled(TableCell)(() => ({
    border: "none",
}));

const PreviewTable = ({
    materialTypeArrayProps,
    serviceTypeArrayProps,
    quote,
    filter,
}: PortalTableProps) => {
    const [materialTypeArray, setMaterialTypeArray] = useState(
        materialTypeArrayProps
    );
    const [serviceTypeArray, setServiceTypeArray] = useState(
        serviceTypeArrayProps
    );

    const handleSort = (
        key: "salesDescription" | "unitAmount" | "saleCost" | "subtotal"
    ) => {
        const sortCallback = (el1: LineItem, el2: LineItem) => {
            if (typeof el1[key] === "string") {
                return (el1[key] as string).localeCompare(el2[key] as string);
            } else if (typeof el1[key] === "number") {
                return (el1[key] as number) - (el2[key] as number);
            }

            return 1;
        };
        const newMaterialArray = [...materialTypeArray.sort(sortCallback)];
        const newServiceTypeArray = [...serviceTypeArray.sort(sortCallback)];

        setMaterialTypeArray(newMaterialArray);
        setServiceTypeArray(newServiceTypeArray);
    };
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <HeaderStyledRow>
                        <TableCell width="55%">
                            <CustomTypography
                                color="grey"
                                onClick={() => handleSort(SALES_DESCRIPTION)}
                            >
                                Description
                            </CustomTypography>
                        </TableCell>
                        <TableCell width="15%">
                            <CustomTypography
                                color="grey"
                                onClick={() => handleSort(UNIT_AMOUNT)}
                            >
                                Quantity
                            </CustomTypography>
                        </TableCell>
                        <TableCell width="15%">
                            <CustomTypography
                                color="grey"
                                onClick={() => handleSort(SALE_COST)}
                            >
                                Unit Price
                            </CustomTypography>
                        </TableCell>
                        <TableCell width="15%">
                            <CustomTypography
                                color="grey"
                                onClick={() => handleSort(SUBTOTAL)}
                            >
                                Amount
                            </CustomTypography>
                        </TableCell>
                    </HeaderStyledRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Services</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    {(filter === "noFilters" || filter === "services") &&
                        serviceTypeArray.map((row: LineItem) => (
                            <TableRow key={row.name}>
                                <BodyStyledTableCell component="th" scope="row">
                                    <Typography variant="body2" color="grey">
                                        {row.name}
                                    </Typography>
                                </BodyStyledTableCell>
                                <BodyStyledTableCell>
                                    {row.unitAmount}
                                </BodyStyledTableCell>
                                <BodyStyledTableCell>
                                    <Typography variant="body2">
                                        ${formatToCurrency(row.saleCost)}
                                    </Typography>
                                </BodyStyledTableCell>
                                <BodyStyledTableCell>
                                    <Typography variant="body2">
                                        ${formatToCurrency(row.subtotal)}
                                    </Typography>
                                </BodyStyledTableCell>
                            </TableRow>
                        ))}
                    <TableRow>
                        <TableCell>Materials</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    {(filter === "noFilters" || filter === "material") &&
                        materialTypeArray.map((row: LineItem) => {
                            console.log(materialTypeArray);
                            return (
                                <TableRow key={row.name}>
                                    <BodyStyledTableCell
                                        component="th"
                                        scope="row"
                                    >
                                        <Typography
                                            variant="body2"
                                            color="grey"
                                        >
                                            {row.name}
                                        </Typography>
                                    </BodyStyledTableCell>
                                    <BodyStyledTableCell>
                                        {row.unitAmount}
                                    </BodyStyledTableCell>
                                    <BodyStyledTableCell>
                                        <Typography variant="body2">
                                            ${formatToCurrency(row.saleCost)}
                                        </Typography>
                                    </BodyStyledTableCell>
                                    <BodyStyledTableCell>
                                        <Typography variant="body2">
                                            ${formatToCurrency(row.subtotal)}
                                        </Typography>
                                    </BodyStyledTableCell>
                                </TableRow>
                            );
                        })}
                    <TableRow>
                        <BodyStyledTableCell></BodyStyledTableCell>
                        <BodyStyledTableCell></BodyStyledTableCell>
                        <TableCell>Subtotal</TableCell>
                        <TableCell>
                            <Typography variant="body2">
                                ${formatToCurrency(quote.subtotal)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <BodyStyledTableCell></BodyStyledTableCell>
                        <BodyStyledTableCell></BodyStyledTableCell>
                        <TableCell>Taxes</TableCell>
                        <TableCell>
                            <Typography variant="body2">
                                ${formatToCurrency(quote.taxTotal)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <BodyStyledTableCell></BodyStyledTableCell>
                        <BodyStyledTableCell></BodyStyledTableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>
                            <Typography variant="body2">
                                ${formatToCurrency(quote.total)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PreviewTable;
