import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';

// Assuming images is an array of image sources
const images = [
  {image: require('../assets/images/house.jpeg'), id: 1},
  {image: require('../assets/images/garden.jpeg'), id: 2},
  {image: require('../assets/images/children.jpeg'), id: 3},
  {image: require('../assets/images/chair.jpeg'), id: 4},
];

const {width} = Dimensions.get('window');

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    console.log('onViewableItemsChanged', viewableItems);
    setCurrentIndex(viewableItems[0].index);
  });

  const renderItem = ({item}) => {
    return <Image source={item.image} style={styles.image} />;
  };

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex ? styles.paginationDotActive : null,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width - 40,
    height: 200,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#e3e3e3',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#595959',
  },
});

export default ImageCarousel;
