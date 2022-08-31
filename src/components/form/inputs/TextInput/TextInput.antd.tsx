import { Input } from 'antd';
import './TextInput.antd.css';

export const TextInput: React.FC = (props) => {
  return (
    <div className="textInputWrapper">
      <Input className='textInputAntD' {...props} />
    </div>
  );
}
