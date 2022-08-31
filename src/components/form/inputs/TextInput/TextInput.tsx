import React from 'react';

import { TextInput as CurrentTextInput } from '@dazn/acc-sdk-design-system';

interface TextInputChildrenRenderProps {
  value: TextInputProps['value'];
  clearInput: () => void;
  onChange: TextInputProps['onChange'];
}

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'children'>,
    React.RefAttributes<HTMLInputElement> {
  /**
   * Render prop function provided with the current value of the field,
   * useful for implementing autocomplete, dropdowns and other enhancements
   * to the TextInput
   */
  children?: (renderProps: TextInputChildrenRenderProps) => React.ReactNode;

  /**
   * Label to wrap the text field with, should be descriptive of the
   * data the user is expected to enter, and include any specific format instructions
   */
  label?: React.ReactNode;

  /**
   * Current value of the text input
   */
  value?: string;

  /**
   * Custom change handler where the first argument is the event.target.value,
   * and the second argument is the original event.
   */
  onChange: (newValue: string, event?: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback called when the clear button within the input is clicked.
   * Also called in conjunction with a blank onChange event.
   */
  onClear?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;

  /**
   * Any additional classes to attach to the label element surrounding the input
   */
  className?: string;

  /**
   * An icon to attach to the end of the element
   * @deprecated Use the `adornmentEnd` prop instead - note that adornmentEnd takes a ReactNode, **not** a component
   */
  icon?: React.ComponentType;

  /**
   * Whether the current input is considered valid with respect to your
   * validation criteria
   */
  valid?: boolean;

  /**
   * An object that will be spread across the surrounding `<Label>` component
   * and prefixed with `data-`. Useful for attaching test ids etc.
   * You can also simply provide your own props prefixed with `data-` to add them to the
   * input element.
   */
  dataAttr?: any;

  /**
   * If `true` the input element will not accept input, and will appear grayed out.
   */
  disabled?: boolean;

  /**
   * React node to render within the input wrapper at the start (i.e. the left side)
   */
  adornmentStart?: React.ReactNode;

  /**
   * React node to render within the input wrapper at the end (i.e. the right side)
   */
  adornmentEnd?: React.ReactNode;

  /**
   * When `true` and the field contains a value, then a clear button will be displayed in the place of the adornmentEnd
   * component, when clicked onChange will be called with a blank value and onClear will be called.
   *
   * @default true
   */
  clearable?: boolean;

  containerRef?: React.Ref<any>;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <CurrentTextInput {...props} />
  );
}
