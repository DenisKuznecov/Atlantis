import { StyleSheet, Platform, Dimensions } from 'react-native';



const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: 0,
      },
    }),
  },
  backgroundScreen: {
    position: 'absolute',
    flex: 1,
    resizeMode: 'cover',
  },
  imageLogo: {
    marginTop: 70,
    maxWidth: 170,
    height: 68,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});