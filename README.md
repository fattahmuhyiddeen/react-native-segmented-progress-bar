# react-native-segmented-progress-bar
React Native component for having segmented or multipart progress bar


### Properties

| Prop                 | Type                                                                                       | Description                                                                                        | Default   | Required |
| -------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | --------- | -------- |
| `labels`             | array of strings                                                                           | Labels that will appear below the chart. If not defined, the label will not appear                 | undefined | Optional |
| `values`             | array of numbers                                                                           | Cumulative numbers that define how large each segment should be                                    | undefined | Required |
| `colors`             | array of strings (`color` in any format (like `white` or `#ffffff` or `rgb(255,255,255)`)) | Number of elements in this array should be less than 1 element from `value` array                  | undefined | Required |
| `height`             | number                                                                                     | Height of the progress bar only not including the label                                            | 8         | Optional |
| `showSeparatorValue` | boolean                                                                                    | If `true`, label on the top that display values of borders between each segments will be displayed | false     | Optional |