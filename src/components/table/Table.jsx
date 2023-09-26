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

  console.log("Data", data);

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
              <StyledTableCell
                key={column.name}
                align={column.align || "center"}
                width={column.width}
              >
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
              onClick={() => onClickOnRow && onClickOnRow(rows.orderId.value)}
            >
              {columns.map((column, indx) => (
                <StyledTableCell
                  key={indx}
                  component="th"
                  scope="row"
                  align={rows[column.value]?.align || "center"}
                  width={column.width}
                >
                  {columns[indx]?.isButton ? (
                    rows[column.value]?.btnComponent(rows[column.value]?.value)
                  ) : columns[indx]?.isImage ? (
                    <img
                      src={rows[column.value]?.value}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    rows[column.value]?.value
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
