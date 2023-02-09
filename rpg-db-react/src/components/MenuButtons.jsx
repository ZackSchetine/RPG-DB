import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { StyledEngineProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import './index.css';

export default function MenuButtons(props) {
  const [alignment, setAlignment] = React.useState(props.activeTab);

  const itens = props.itens;

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== alignment && newAlignment !== null) {
      //console.log("algn: " + alignment + " newAlgn: " + newAlignment)
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


  function selectButton() {

    console.log(alignment);
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
              onChange={selectButton}
              key={itens}
              value={itens}
              className='navi-buttons'>
              {itens}
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