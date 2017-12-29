import { StyleSheet, Platform, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  wrapButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 13,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  tabBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
    flex: 1,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.borderBlue,
  },
  btnTabText: {
    color: COLORS.blueBtn,
    fontFamily: FONTS.MullerMedium,
  },
  leftBtn: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  rightBtn: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  btnActive: {
    backgroundColor: COLORS.blueBtn,
  },
  btnActiveText: {
    color: COLORS.white,
  },
  wrapPost: {
    paddingHorizontal: 8,
  },
});