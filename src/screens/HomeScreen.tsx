import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ImageCarousel from '../components/ImageCarousel';

const backrgound = require('../assets/images/background.jpeg');

const {width, height} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>KLIKA SŁÓW O NAS</Text>
        <Text style={styles.subHeader}>
          CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sapien
          sed odio vestibulum laoreet in ac orci. Mauris feugiat, dolor a
          fringilla pulvinar, lectus nibh rhoncus nibh, a blandit lectus elit
          non augue. Vestibulum commodo mauris eget nibh consectetur dignissim.
        </Text>
      </View>
      <ImageCarousel />
      <ImageBackground source={backrgound} style={styles.backgroundImage}>
        <Text style={styles.text}>BUDOWA DOMÓW Z DREWNA</Text>
        <Text style={styles.text}>BUDOWA BRAM WJAZDOWYCH</Text>
        <Text style={styles.text}>WYKOŃCZENIE WNĘTRZ ALTANY</Text>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4BB4FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  backgroundImage: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
