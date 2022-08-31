import { SlInput } from '@shoelace-style/shoelace/dist/react';
import './TextInput.shoelace.css';

export const TextInput: React.FC = (props) => {
  return (
    <SlInput className='textInputShoeLace' {...props} />
  );
}
