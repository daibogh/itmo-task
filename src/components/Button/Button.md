Button example 1:
```tsx
import {ButtonBorderRadius, ButtonBorderColor, ButtonColor} from './Button';
import {BackgroundColor} from '../../styles/colors';
;<Button children="hi!" borderColor={ButtonBorderColor.white} borderRadius={ButtonBorderRadius.circle} color={ButtonColor.white} backgroundColor={BackgroundColor.red}/>
```
Button example 2:
```tsx
import {ButtonBorderRadius, ButtonBorderColor, ButtonColor, ButtonBackgroundColor} from './Button';
import {BackgroundColor} from '../../styles/colors';
;<Button children="hi!" borderColor={ButtonBorderColor.white} borderRadius={ButtonBorderRadius.circle} color={ButtonColor.white} backgroundColor={BackgroundColor.blue}/>
```
Button example 3:
```tsx
import {ButtonBorderRadius, ButtonBorderColor, ButtonColor, ButtonBackgroundColor} from './Button';
import {BackgroundColor} from '../../styles/colors';
;<Button chidlren="🍕" borderColor={ButtonBorderColor.white} borderRadius={ButtonBorderRadius.circle} color={ButtonColor.white} backgroundColor={BackgroundColor.transparent}/>
```

