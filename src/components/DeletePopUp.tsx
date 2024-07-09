import React from "react";
import { Button, Stack, Typography } from "@mui/material";

interface DeleteProps {
  text?: string;
  onClose: () => void;
  onProceed: () => void;
}

const DeletePopUp = ({
  text = "Are you sure you want to delete this transaction",
  onClose,
  onProceed,
}: DeleteProps) => {
  return (
    <Stack
      width={350}
      height="max-content"
      p={2}
      bgcolor="#ffffff"
      borderRadius={2}
      gap={2}
    >
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Typography textAlign="center">{text}</Typography>
        <Stack style={{ width: "100%" }} flexDirection="row" gap={1}>
          <Button fullWidth variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button fullWidth variant="contained" onClick={onProceed}>
            Proceed
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DeletePopUp;
