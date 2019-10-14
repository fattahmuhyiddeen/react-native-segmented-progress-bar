import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default ({
  labels,
  values,
  colors,
  height = 8,
  showSeparatorValue,
  position = null,
}) => {
  const sectionsPercentage = [];
  const finalValue = values[values.length - 1];
  values.forEach(
    (v, i) =>
      i < values.length - 1 &&
      sectionsPercentage.push((100 * (values[i + 1] - v)) / finalValue),
  );
  const separatorValues = values.filter(
    (_, i) => i !== 0 && i !== values.length - 1,
  );
  const cicleValue =
    position != null && finalValue ? (100 * position) / finalValue : null;
  const differenceCircleWithProgress = 5;
  const circleHight = height + differenceCircleWithProgress;
  const paddingWithLabel = 10;
  return (<>
    {showSeparatorValue && (
      <View style={{ flexDirection: 'row' }}>
        {sectionsPercentage.map((w, i) =>
          i < sectionsPercentage.length - 1 ? (
            <Text
              key={i}
              children={separatorValues[i]}
              style={{ width: `${w}%`, textAlign: 'right', fontSize: 8 }}
            />
          ) : null,
        )}
      </View>
    )}
    <View style={{ paddingVertical: paddingWithLabel }}>
      <View
        style={[styles.chartContainer, { height, borderRadius: height / 2 }]}
      >
        {sectionsPercentage.map((w, i) => (
          <View
            key={i}
            style={{ width: `${w}%`, backgroundColor: colors[i], height }}
          />
        ))}
      </View>
      {cicleValue && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'black',
            borderColor: 'white',
            borderWidth: 1,
            height: circleHight,
            width: circleHight,
            borderRadius: circleHight,
            left: `${cicleValue}%`,
            top: Math.abs(
              paddingWithLabel - differenceCircleWithProgress / 2,
            ),
          }}
        />
      )}
    </View>
    {labels && (
      <View style={{ flexDirection: 'row' }}>
        {sectionsPercentage.map((w, i) => (
          <Text
            key={i}
            children={labels[i]}
            style={{ width: `${w}%`, textAlign: 'center', fontSize: 8 }}
          />
        ))}
      </View>
    )}
  </>);
};

const styles = StyleSheet.create({
  chartContainer: { overflow: 'hidden', flexDirection: 'row' },
});
