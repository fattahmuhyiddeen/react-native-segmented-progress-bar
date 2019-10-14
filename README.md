# react-native-segmented-progress-bar
React Native component for having segmented or multipart progress bar

### Usage sample

This code

```
<SegmentedProgressBar
  showSeparatorValue
  values={[0, 18.5, 23.0, 27.5, 40]}
  colors={['grey', 'green', 'orange', 'red']}
  labels={['underweight','normal','overweight','obese']}
  position={21}
/>
```

will generate this

![Simulator Screen Shot - iPhone 11 Pro Max - 2019-10-14 at 14 26 38](https://user-images.githubusercontent.com/24792201/66732484-b753cd00-ee8e-11e9-9e7b-daa18ddd0ec1.png)




### Properties

| Prop                 | Type                                                                                       | Description                                                                                        | Default   | Required |
| -------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | --------- | -------- |
| `labels`             | array of strings                                                                           | Labels that will appear below the chart. If not defined, the label will not appear                 | undefined | Optional |
| `values`             | array of numbers                                                                           | Cumulative numbers that define how large each segment should be                                    | undefined | Required |
| `colors`             | array of strings (`color` in any format (like `white` or `#ffffff` or `rgb(255,255,255)`)) | Number of elements in this array should be less than 1 element from `value` array                  | undefined | Required |
| `height`             | number                                                                                     | Height of the progress bar only not including the label                                            | 8         | Optional |
| `showSeparatorValue` | boolean                                                                                    | If `true`, label on the top that display values of borders between each segments will be displayed | false     | Optional |