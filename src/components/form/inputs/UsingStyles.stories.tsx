import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UsingStyled } from './UsingStyled';

export default {
  title: 'Components/Form/Inputs/All Using Styles',
  component: UsingStyled,
} as ComponentMeta<typeof UsingStyled>;

const Template: ComponentStory<typeof UsingStyled> = (args) => <UsingStyled {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Text Input'
};
