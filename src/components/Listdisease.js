import React, {useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
/*
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
*/
export default function Listdisease() {
  const useGetData = () => {
    const [Listitem, setListItem] = useState([]);

    const getListDisease = async () => {
      const postUrl = "/conditions/";
      await axios.get(postUrl)
      .then((response) => {
        /*
        kr_name = response.data.kr_name
        eng_name = response.data.eng_name
        description = response.data.description
        pk = response.data.pk
        */
        setListItem(response.data);
        console.log(response.data);
        console.log("성공");
      }).catch(function(error){
        console.log("실패");
      });
    }

    return {
      getListDisease,
      Listitem,
    }
  }
  
  const { getListDisease, Listitem } = useGetData();
  const Listitem2 = useSelector((state) => state);

  return (
    <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {Listitem2.map((disease) => (
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
                   <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="success"
                    onClick={getListDisease}>
                    진단하기
                  </Button>     
        </List>
      </nav>
    </Box>
  );
}