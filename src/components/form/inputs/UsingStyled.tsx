import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { SlInput } from '@shoelace-style/shoelace/dist/react';
import { Input } from 'antd';

const ShoelaceInputStyled = styled(SlInput)({
  background: '#C00',
  '& .form-control': {
    // Doesn't work
    background: '#0C0',
  },
});

const MaterialInputStyled = styled(TextField)({
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
});

const AntDInputComposed: React.FC<any> = (props) => {
  const { className, ...childProps } = props;

  return (
    <div className={className}>
      <Input {...childProps} />
    </div>
  );
}

const AntdInputStyled = styled(AntDInputComposed)({
  width: '100%',
  padding: '10px',
  cursor: 'text',
  boxShadow: '0 2px 0 #ced0d2',
  '&:focus-within': {
    boxShadow: '0 2px 0 #0c161c',
  },
  '& .ant-input': {
    width: '100%',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    '&:disabled': {
      cursor: 'not-allowed',
    }
  }
});

export const UsingStyled: React.FC = (props) => {
  return (
    <>
      <div>
        <h3>Shoelace</h3>
        <ShoelaceInputStyled {...props} />
      </div>
      <div>
        <h3>Material</h3>
        <MaterialInputStyled {...props} variant="standard" />
      </div>
      <div>
        <h3>AntD</h3>
        <AntdInputStyled {...props} />
      </div>
    </>
  );
}
