# Design System Test

1. Clone repo
2. Install deps `yarn`
3. Run Storybook `yarn run storybook`
4. Visit the [Storybook](http://localhost:6006/)

## Shoelace
[Docs](https://shoelace.style/)
```
Doesn't support @emotion/styled
```

- Uses vanila CSS
  - Imported using React's native CSS support

```
import './Filename.shoelace.css';
```

## Material
[Docs](https://mui.com/material-ui/getting-started/overview/)

- Uses wrapper around styled engine
  - Would be worth creating a blank "theme" to avoid large over-rides on Material styles

```
const StyledInput = styled(TextField)<TextFieldProps>({
  display: 'block',
  '& .MuiInputBase-root': {
    width: '100%',
    ...
  },
}) as typeof TextField;
```

## AntD
[Docs](https://ant.design/docs/react/introduce)

- Uses vanila CSS
  - Imported using React's native CSS support
  - Comes with no CSS out of the box (great for us)

```
import './Filename.antd.css';
```
