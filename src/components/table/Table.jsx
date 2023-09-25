import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { statusBtnColor } from "../../statisData/orders";

const TableComponent = ({ columns, data, onClickOnRow }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "gray",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell align={column.align || "center"}>
                {column.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((rows, index) => (
            <StyledTableRow
              key={index}
              sx={{ cursor: "pointer" }}
              onClick={() => onClickOnRow(rows[0].value)}
            >
              {Object.keys(rows).map((rowName, indx) => (
                <StyledTableCell
                  key={indx}
                  component="th"
                  scope="row"
                  align={rows[rowName]?.align || "center"}
                >
                  {columns[indx]?.isButton ? (
                    <Button
                      variant="contained"
                      color={statusBtnColor[rows[rowName]?.value]}
                    >
                      {rows[rowName]?.value}
                    </Button>
                  ) : (
                    rows[rowName]?.value
                  )}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
