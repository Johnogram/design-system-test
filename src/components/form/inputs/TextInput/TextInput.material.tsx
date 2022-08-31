import { styled } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const StyledInput = styled(TextField)<TextFieldProps>({
  display: 'block',
  '& .MuiInputBase-root': {
    width: '100%',
    padding: '10px',
    cursor: 'text',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '13px',
    lineHeight: 1,
    borderRadius: '0px',

    display: 'flex',
    '&:after': {
      borderBottom: '2px solid #ced0d2',
      transform: 'unset',
      transition: 'unset',
    },
  },
  '& .MuiInputBase-root.Mui-focused': {
    '&:after': {
      borderBottom: '2px solid #0c161c',
      transform: 'unset',
      transition: 'unset',
    },
  }
}) as typeof TextField;

export const TextInput: React.FC = (props) => {
  return (
      <StyledInput {...props} variant="standard" />
  );
}
