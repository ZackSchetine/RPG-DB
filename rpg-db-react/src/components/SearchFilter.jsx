import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './generalStyle.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import Autocomplete from '@mui/material/Autocomplete';




export default function SearchFilter(props) {
    const filterMenu = [
        { title: 'Nome', type: 'input', value: '' },
        {
            title: 'Tipo', type: 'buttonGroup',
            value: ['aberração', 'besta', 'celestial', 'constructo', 'corruptor', 'dragão', 'elemental', 'fada', 'gigante', 'humanóide', 'monstruosidade', 'morto-vivo']
        },
        {
            title: 'Tamanho', type: 'buttonGroup',
            value: ['miúdo', 'pequeno', 'médio', 'grande', 'enorme', 'imenso']
        },
        {
            title: 'Alinhamento', type: 'buttonGroup',
            value: ['leal / bom', 'neutro / bom', 'caótico / bom', 'leal / neutro', 'neutro', 'caótico / neutro', 'leal / mal', 'neutro / mal', 'caótico / mal']
        },
        {
            title: 'Pontos de Vida', type: 'rangeInput',
            minValue: 'mínimo', maxValue: 'máximo'
        },
        {
            title: 'Classe de Armadura', type: 'rangeInput',
            minValue: 'mínimo', maxValue: 'máximo'
        },
        {
            title: 'Deslocamento', type: 'rangeInput',
            minValue: 'mínimo', maxValue: 'máximo'
        },
        {
            title: 'Nível de Desafio', type: 'rangeInput',
            minValue: 'mínimo', maxValue: 'máximo'
        },
        {
            title: 'Idiomas', type: 'dropDown',
            value: ['comum', 'anão', 'élfico', 'gigante', 'gnômico', 'goblin', 'halfling', 'orc', 'abissal', 'celestial', 'dialeto subterrâneo', 'dracônico', 'infernal', 'primordial', 'silvestre', 'subcomum']
        },
        {
            title: 'Sentidos', type: 'buttonGroup',
            value: ['visão no escuro', 'percepção às cegas', 'visão verdadeira', 'sentido sísmico']
        }
    ]

    const [alignment, setAlignment] = React.useState();

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const theme = createTheme({
        components: {
            MuiToggleButton: {
                styleOverrides: {
                    root: {
                        ':hover': {
                            backgroundColor: '#f08080',
                            borderColor: '#F95F62',
                            color: 'white'
                        },
                        '&.Mui-selected': {
                            color: "white",
                            backgroundColor: "#f08080",
                            ':hover': {
                                backgroundColor: '#f08080',
                                borderColor: '#F95F62',
                                color: 'white'
                            }
                        }
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        ':hover': {
                            backgroundColor: '#F95F62',
                            color: 'white'
                        },
                    }
                }
            }
        }
    });

    const createForm = (filterMenu) => {
        switch (filterMenu.type) {
            case 'input':
                return (
                    <div className='form-filter' key={filterMenu.title}>
                        <div className='filter-label'>{filterMenu.title}:</div>
                        <div className='filter-content'>
                            <div className='filter-content-container'>
                                <TextField
                                    size='small'
                                    placeholder="Required"
                                    type='text'
                                    sx={{ width: '60%' }}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 'buttonGroup':
                return (
                    <div className='form-filter' key={filterMenu.title}>
                        <div className='filter-label'>{filterMenu.title}:</div>
                        <div className='filter-content'>
                            <div className='filter-content-container'>
                                <ToggleButtonGroup
                                    value={alignment}
                                    variant="outlined" aria-label="outlined primary button group"
                                    onChange={handleChange}>
                                    {filterMenu.value.map((value) => (
                                        <ToggleButton
                                            key={value}
                                            value={value}
                                            disableRipple
                                            sx={{
                                                color: '#F95F62',
                                                borderColor: '#F95F62',
                                                textTransform: 'capitalize'
                                            }}>
                                            {value}
                                        </ToggleButton>))}
                                </ToggleButtonGroup>
                            </div>
                        </div>
                    </div>
                );

            case 'rangeInput':
                return (
                    <div className='form-filter' key={filterMenu.title}>
                        <div className='filter-label'>{filterMenu.title}:</div>
                        <div className='filter-content'>
                            <div className='filter-content-container'>
                                <TextField size="small"
                                    id="outlined-number"
                                    placeholder="Number"
                                    type="number"
                                    sx={{ width: '25%' }}
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                />

                                <div className='divider'></div>

                                <TextField size="small"
                                    id="outlined-number"
                                    placeholder="Number"
                                    type="number"
                                    sx={{ width: '25%' }}
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 'dropDown':
                return (
                    <div className='form-filter' key={filterMenu.title}>
                        <div className='filter-label'>{filterMenu.title}:</div>
                        <div className='filter-content'>
                            <div className='filter-content-container'>
                                <Autocomplete  
                                    size='small'
                                    id="combo-box-demo"
                                    options={filterMenu.value}
                                    sx={{ width: 300 }}
                                    getOptionLabel={(option) => option.split(" ").map((word) => {
                                        return word[0].toUpperCase() + word.substring(1);
                                    }).join(" ")}
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            placeholder="Idioma" />}

                                />
                            </div>
                        </div>
                    </div>
                );

            default:
                break;
        }
    };

    return (
        <div>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <div className='filter-page'>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '2.5rem',
                                color: '#F95F62',
                                fontWeight: '600',
                                margin: '120px 0 30px',
                                textAlign: 'center',
                            }}>
                            {props.title}
                        </Typography>
                        <div className='filter-selection-container'>
                            {filterMenu.map((form) => (createForm(form)))}
                        </div>
                        <div className='filter-buttons-container'>
                            <Button disableRipple sx={{ color: 'white', bgcolor: '#D1D1D1', }}>Filtrar</Button>
                            <Button disableRipple sx={{ color: 'white', bgcolor: '#D1D1D1', marginLeft: '30px' }}>Aleatório</Button>
                        </div>
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    );
}
