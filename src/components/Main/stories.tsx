import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'ASDASA',
  description: 'wwewwewwe'
};

export const Secondary: Story = (args) => <Main {...args} />;
