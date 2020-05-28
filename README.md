# angularx-wrapper

Simple wrapper to create an elevated container using Angular Material.

## Online Demo

[https://angularx-wrapper.byh.uy/](https://angularx-wrapper.byh.uy/)

## Prerequisites:

1. This library requires `@angular/material` and `lodash`.
2. If you do not have one, make sure to  install them in your project folder by running `ng add @angular/material` and `npm install --save lodash`.

## Getting Started

1. Run `npm install --save angularx-wrapper`.
2. Import `AngularXWrapperModule` into your `app.module`:

```typescript
...
import { AngularXWrapperModule } from 'angularx-wrapper';

@NgModule({
  ...
  imports: [
    ...
    AngularXWrapperModule
  ]
})
export class AppModule { }
```
## Usage

```xml
<angularx-wrapper>
    Your content goes here.
</angularx-wrapper>
```

## Directives
**Properties**

| Name                     | Type/Interface                         | Default | Description                                                                    |
| ------------------------ | ---------------------------------------| ------- | ------------------------------------------------------------------------------ |
| `@Input('ngxClass')`     | string &#124; string[]                 | []      | Custom class name(s) for the wrapper                                           |
| `@Input('ngxStyle')`     | {}                                     | {}      | Just like ngStyle, this accept the styles for the wrapper                      |
| `@Input('elevation')`    | number (0 - 24)                        | 5       | Elevation level (the higher the number, the more elevated the wrapper appears) |
| `@Input('width')`        | number &#124; string                   | '900px' | The wrapper's width                                                            |
| `@Input('padding')`      | number &#124; string                   | '32px'  | Padding between the wrapper and its content                                    |
| `@Input('align' )`       | 'center' &#124; 'left' &#124; 'right'  | 'left'  | The wrapper's alignment                                                        |
| `@Input('contentAlign')` | 'center' &#124; 'left' &#124; 'right'  | 'left'  | Content's alignment inside the wrapper                                         |
| `@Input('borderRadius')` | number &#124; string                   | '0px'   | The wrapper's border radius                                                    |

**Interfaces**

N/A

## Contribution

For feature request and bug report, visit [the issue page](https://github.com/afunworm/angularx-wrapper/issues).

## License

MIT License - Refer to LICENSE.