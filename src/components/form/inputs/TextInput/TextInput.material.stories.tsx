import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from './TextInput.material';

export default {
  title: 'Components/Form/Inputs/TextInput/Material',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Text Input'
};
