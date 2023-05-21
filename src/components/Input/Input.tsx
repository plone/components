import type { TextFieldProps } from 'react-aria-components';
import {
  Text,
  TextField,
  Label,
  Input as RACInput,
} from 'react-aria-components';
import cx from 'classnames';

interface InputProps extends TextFieldProps {
  title?: string;
  description?: string;
  error?: string[];
  placeholder: string;
}

export default function Input({
  title,
  description,
  error,
  ...props
}: InputProps) {
  return (
    <TextField {...props} className="q field">
      <RACInput className={cx('q input', { error: error })} />
      <Label className="q label">{title}</Label>
      {description && (
        <Text slot="description" className="q hint">
          {description}
        </Text>
      )}
      {error?.map((message) => (
        <Text slot="errorMessage" className="q assist" key={message}>
          {message}
        </Text>
      ))}
    </TextField>
  );
}
