import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
} from "../apis/userService";
import { CreateTransactionType, Transaction } from "../interfaces/interface";
import { UserContext } from "../context/UserContext";
import {
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CreateTransaction from "../components/CreateTransaction";
import TransactionRow from "../components/TransactionRow";
import { transactionList } from "../dummy";

const Details = () => {
  const { user } = useContext(UserContext);
  const [list, setList] = useState<Array<Transaction>>(transactionList || []);
  const [openCreateTransaction, setOpenCreateTransaction] =
    useState<boolean>(false);

  const _getTransactionsList = useCallback(async () => {
    const res = await getTransactions();
    setList(res?.data || []);
  }, []);

  const handleCreateTransaction = async (data: CreateTransactionType) => {
    try {
      const res = await createTransaction(data);
      setList((prev) => [...prev, res?.data]);
      setOpenCreateTransaction(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTransaction = async (transaction_id: string) => {
    try {
      await deleteTransaction(transaction_id);
      setList((prev) =>
        prev?.filter((item) => item?.transaction_id !== transaction_id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getTransactionsList();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h4>{user?.display_name || "Ankush Badgujar"}</h4>
        <button onClick={() => setOpenCreateTransaction(true)}>
          Create Transaction
        </button>
      </div>
      <TableContainer component={Paper} sx={{ bgcolor: "white" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction Id</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list?.map((item) => (
              <TransactionRow
                key={item?.transaction_id}
                data={item}
                onDelete={handleDeleteTransaction}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openCreateTransaction}
        onClose={() => setOpenCreateTransaction(false)}
      >
        <CreateTransaction
          onProceed={handleCreateTransaction}
          onClose={() => setOpenCreateTransaction(false)}
        />
      </Dialog>
    </div>
  );
};

export default Details;
