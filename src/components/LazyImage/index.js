import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import {Small, Original} from './styles';

export default function LazyImage({aspectRatio, source, smallSource}) {
  const [loaded, setLoaded] = useState(false);
  const opacity = new Animated.Value(0);

  // Only to simulate the request timing
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  });

  function handleAnimeted() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small
      ratio={aspectRatio}
      source={smallSource}
      resizeMode="contain"
      blurRadius={2}>
      {loaded && (
        <Original
          ratio={aspectRatio}
          source={source}
          resizeMode="contain"
          onLoadEnd={handleAnimeted}
        />
      )}
    </Small>
  );
}
