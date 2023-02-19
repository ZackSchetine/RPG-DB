import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb(props) {

  var count = 0;

  return (
    <Stack sx={{ margin: '45px 0 0 50px', width: '400px' }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ fontSize: '16px', margin: '0 14px' }}
      >
        {props.pages.map((page) => (
          <Link
            underline="none"
            key={count++}
            color={page.selected ? "#F95F62" : "#47525E"}
            href={page.link}
            onClick={handleClick}
            sx={{ fontFamily: 'Lato' }}>
            {page.name}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
}