import React from 'react'
import styled from '@emotion/styled';
import { Snackbar, Stack, Typography } from '@mui/material';
import Alert from './Alert'


const StyledAlert = styled(Alert)`
  svg {
   position: absolute;
   top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  svg[data-testid="CloseIcon"] {
    font-size: 1rem;
    position: relative;
  } 
`

const Toast:any = ({open, setOpen, children, ...rest}:any) => {
        let { response } = rest;

       const status = response?.response?.processed?.receipt?.status 
        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };
      
        return (
          <Stack direction={'row'} spacing={2} sx={{ width: '100%',  }}>            
            <Snackbar open={open} autoHideDuration={33000} onClose={handleClose} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}>
              <StyledAlert onClose={handleClose}  sx={{ height: '100%',display: 'flex', minWidth: '444px'  }}>
                <Typography variant="h6" component="div" sx={{ml:2}} >
                  {status ? "Success! transaction" : "Something went wrong"} : {children}
                </Typography>
              </StyledAlert>
            </Snackbar>
       
          </Stack>
        );
      }
 

export default Toast