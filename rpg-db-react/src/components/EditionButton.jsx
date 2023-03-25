import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { SystemContext } from './SystemContext';
import { useNavigate } from "react-router-dom";


export default function EditionButton(props) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(props.startPosition);
  const [, setSystemContext] = React.useContext(SystemContext);

  const options = props.itensList;

  React.useEffect(() => {
    setSystemContext(options[props.startPosition]);
  }, [options, props.startPosition, setSystemContext]);


  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    // Global var update
    setSystemContext(options[index]);

    navigate(props.pages[0].route);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);

  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="text" ref={anchorRef} aria-label="split button" sx={{ marginLeft: '20px', bgcolor: '#F95F62' }}>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{ color: 'white', padding: '7px 15px 7px 20px', fontSize: '18px', fontWeight: '570' }}
        >
          {options[selectedIndex]}
          <ArrowDropDownIcon sx={{ marginLeft: '5px' }} />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === selectedIndex}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{ fontWeight: '570' }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}