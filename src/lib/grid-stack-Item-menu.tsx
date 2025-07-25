import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useGridStackContext } from "./grid-stack-context";

export interface GridStackItemMenuProps {
  widgetId: string;
  title?: string;
}

export function GridStackItemMenu({ 
  widgetId,
}: GridStackItemMenuProps) {    
  const { removeWidget, gridStack } = useGridStackContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    removeWidget(widgetId);
    gridStack?.removeWidget(widgetId);
    handleClose();
  };

  return (
    <React.Fragment>
      <div className="flex justify-end size-4">
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'widget-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MoreVertIcon sx={{ width: 20, height: 20 }} />
        </IconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 120,
              boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteForeverIcon fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}