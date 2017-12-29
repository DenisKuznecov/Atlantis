import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

const { width } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  postImage: {
    flexDirection: 'row',
    height: 183,
    marginBottom: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    width: width - 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  wrapColLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  wrapPrices: {
    paddingHorizontal: 8,
    paddingTop: 6,
    paddingBottom: 4,
    borderTopLeftRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  image: {
    flex: 1,
    height: 183,
    borderTopLeftRadius: 3,
    borderTopLeftRadius: 3,
  },
  leftText: {
    fontSize: 14,
    padding: 7,
    flex: 1,
    color: COLORS.white,
    backgroundColor: 'transparent',
    fontFamily: FONTS.MullerMedium,
  },
  price: {
    fontSize: 14,
    color: COLORS.black,
  },
  marginB: {
    marginBottom: 0,
  },
  priceRow: {
    marginBottom: 5,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    fontFamily: FONTS.MullerBold,
    marginBottom: 8,
  },
  text: {
    color: COLORS.gray,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: FONTS.MullerRegular,
    marginBottom: 15,
  }
});