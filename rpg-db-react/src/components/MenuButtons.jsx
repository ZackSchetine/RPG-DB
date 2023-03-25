import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { StyledEngineProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

import { SystemContext } from './SystemContext';

import './generalStyle.css';

export default function MenuButtons(props) {

  const [systemContext,] = React.useContext(SystemContext);

  const itens = props.itens;

  const getCurrentPage = (itens) => {
    let currentPageName = itens[0].name;
    itens.every(function (page) {
      if (page.route === window.location.pathname) {
        currentPageName = page.name;
        return false;
      }
      else return true;
    })
    return currentPageName;
  };

  React.useEffect(() => {
    setAlignment(getCurrentPage(itens));
  }, [itens, systemContext]);

  const [alignment, setAlignment] = React.useState(getCurrentPage(itens));

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== alignment && newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const theme = createTheme({
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              color: "white",
              backgroundColor: "#f08080",
              ':hover': {
                backgroundColor: '#f08080'
              }
            }
          }
        }
      }
    }
  });

  const navigate = useNavigate();

  function selectButton(e, route) {
    e.nativeEvent.stopImmediatePropagation();
    navigate(route);
  }

  return (
    <StyledEngineProvider injectFirst>

      <ThemeProvider theme={theme}>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ margin: 0, height: '80px' }}
        >

          {itens.map((itens) => (
            <ToggleButton
              disableRipple
              onClick={(e) => {
                selectButton(e, itens.route);
              }}
              key={itens.name}
              value={itens.name}
              className='navi-buttons'>
              {itens.name}
            </ToggleButton>
          ))}

        </ToggleButtonGroup>

        <IconButton aria-label="search" disableRipple>
          <SearchIcon />
        </IconButton>

      </ThemeProvider>
    </StyledEngineProvider>
  );
}