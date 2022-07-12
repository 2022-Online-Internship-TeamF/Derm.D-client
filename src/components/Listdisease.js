import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Link} from "react-router-dom";

//임시 더미데이터
const ListitemData = [
  {
    name: '여드름',
    eng_name: 'Acne',
  },
  {
    name: '뾰루지',
    eng_name: 'bbyoruzi',
  },
  {
    name: '흉터',
    eng_name: 'hoongtur',
  },
  {
    name: '상처',
    eng_name: 'sangchu',
  },
  {
    name: '화상',
    eng_name: 'hwasang',
  },
];

export default function Listdisease() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {ListitemData.map((disease) => (
            <>
            <Link to="/Infodisease" style={{ textDecoration: 'none', color:'black'}}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={disease.name} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            </>
          ))}
        </List>
      </nav>
    </Box>
  );
}