import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ResultList(props) {
    return (
        <div className='result-list'>
            <List sx={{ width: '100%', bgcolor: 'background.paper', height: '120px', overflow: 'inherit' }} >
                {props.results.map((result) => (
                    <ListItem key={result.id} sx={{ height: '100%', paddingLeft: '0' }}>
                        <img className='img-test' src={result.image} alt={result.name}></img>
                        <div className='result-list-text'>
                            <div className='result-list-monster-name'>
                                <span>{result.name}</span>
                            </div>
                            <div className='result-list-container'>
                                {result.properties.map((propertie) => (
                                    <span
                                        key={propertie.name}
                                        className='result-list-misc'>
                                        {propertie.value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ListItem>
                ))}
            </List >
            <Stack spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', marginTop: '25px' }}>
                <Pagination count={1} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    );
}