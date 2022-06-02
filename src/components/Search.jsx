import React , {useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const styles={
  searchapp:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center'
  }
}

export default function InputAdornments() {
    const [searchText, setSearchText] = useState('')

  return (

      <div style={styles.searchapp}>    
        <FormControl sx={{ m:1, width: '60%', height:'60px', backgroundColor:'#FFFFFF', border:'none',borderRadius:'5px' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Text here'
            endAdornment={
              <InputAdornment position="end">
                <ClearIcon
                  onClick={()=>console.log('clear')}
                />
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        
      </div>

  );
}