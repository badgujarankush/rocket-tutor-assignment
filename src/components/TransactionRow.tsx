import React, { useState } from "react";
import { Transaction } from "../interfaces/interface";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dialog, IconButton, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";
import DeletePopUp from "./DeletePopUp";

const TransactionRow = ({
  data,
  onDelete,
}: {
  data: Transaction;
  onDelete: (transaction_id: string) => void;
}) => {
  const [openDeleteWarning, setOpenDeleteWarning] = useState(false);

  return (
    <TableRow>
      <TableCell>{data?.transaction_id}</TableCell>
      <TableCell>{data?.amount}</TableCell>
      <TableCell>{data?.description}</TableCell>
      <TableCell>{dayjs(data?.date).format("MMM DD, YYYY HH:mm")}</TableCell>
      <TableCell>{data?.currency}</TableCell>
      <TableCell>
        <IconButton
          size="small"
          sx={{ color: "red" }}
          onClick={() => setOpenDeleteWarning(true)}
        >
          <DeleteIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </TableCell>

      <Dialog
        open={openDeleteWarning}
        onClose={() => setOpenDeleteWarning(false)}
      >
        <DeletePopUp
          onProceed={() => onDelete(data?.transaction_id)}
          onClose={() => setOpenDeleteWarning(false)}
        />
      </Dialog>
    </TableRow>
  );
};

export default TransactionRow;
