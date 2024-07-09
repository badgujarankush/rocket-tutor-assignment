import React, { useState } from "react";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { CreateTransactionType } from "../interfaces/interface";

interface CreateTransactionProps {
  onProceed: (data: CreateTransactionType) => void;
  onClose: () => void;
}

const CreateTransaction = (props: CreateTransactionProps) => {
  const { onClose, onProceed } = props;

  const [payload, setPayload] = useState({
    amount: 0,
    category_id: undefined, // for this task this will always be undefined;
    description: "",
    transaction_date: "",
    transaction_type: "DEPOSIT",
    currency: "WON",
    receipt: undefined,
  });

  return (
    <Stack width="400px" p={1} gap={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>Create Transaction</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Stack gap={1}>
        <TextField
          label="Amount"
          name="amount"
          size="small"
          value={payload.amount}
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, amount: +e.target.value }))
          }
        />
        <TextField
          multiline
          label="Description"
          name="description"
          size="small"
          value={payload.description}
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={dayjs(payload?.transaction_date)}
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, deliverBy: e?.toISOString() }))
            }
            renderInput={(params) => (
              <TextField size="small" variant="outlined" {...params} />
            )}
            size="small"
            inputFormat="DD MMM, YYYY"
          />
        </LocalizationProvider>
        <Select
          label="Transaction Type"
          size="small"
          value={payload.transaction_type}
          onChange={(e) =>
            setPayload((prev) => ({
              ...prev,
              transaction_type: e.target.value,
            }))
          }
        >
          <MenuItem value="DEPOSIT">DEPOSIT</MenuItem>
          <MenuItem value="WITHDRAWAL">WITHDRAWAL</MenuItem>
        </Select>
        <Select
          label="Currency"
          size="small"
          value={payload.currency}
          onChange={(e) =>
            setPayload((prev) => ({
              ...prev,
              currency: e.target.value,
            }))
          }
        >
          {["EUR", "USD", "WON", "YEN"]?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Button
        size="small"
        variant="contained"
        onClick={() => onProceed(payload)}
      >
        Create
      </Button>
    </Stack>
  );
};

export default CreateTransaction;
