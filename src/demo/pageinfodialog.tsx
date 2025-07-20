import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/CopyAllOutlined";
import { PageInfo } from "./pageinfo";
import { Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function PageInfoDialogs({
  isOpen,
  pageInfo,
  resetOpenInfo,
}: {
  isOpen: boolean;
  pageInfo: any;
  resetOpenInfo: (open: boolean) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [copy, setCopy] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen, pageInfo]);

  const handleClose = () => {
    setOpen(false);
    resetOpenInfo(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      document.getElementById("pageinfo")?.innerText || ""
    );
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Page Information
        <IconButton
          aria-label="share"
          onClick={handleCopy}
          sx={(theme) => ({
            marginLeft: "30px",            
          })}
        >
          <ShareIcon /> 
          {copy && <Typography>copied</Typography>}
        </IconButton>
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <PageInfo pageInfo={pageInfo} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
