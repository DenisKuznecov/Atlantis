import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../../assets/style/index';

export default StyleSheet.create({
  wrapItem: {
    marginBottom: 35,
  },
  subStatusText: {
    marginLeft: 16,
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.MullerRegular,
    marginBottom: 10,
  },
  countryRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  subTextRow: {
    paddingHorizontal: 10,
  },
  subTextCountry: {
    color: 'red',
    fontFamily: FONTS.MullerMedium,
    marginBottom: 15,
  },
  wrapAvatar: {
    width: 73,
    height: 79,
    marginRight: 8,
  },
  picture: {
    width: 73,
    height: 79,
    borderRadius: 5,
  },
  countryInfo: {
    flex: 1,
  },
  countryTitle: {
    color: COLORS.black,
    fontFamily: FONTS.MullerBold,
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 4,
  },
  discription: {
    fontSize: 14,
    color: COLORS.gray2,
    lineHeight: 18,
    fontFamily: FONTS.MullerRegular,
  },
  wrapFilters: {

  },
  filterTitle: {
    color: COLORS.black,
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 16,
    fontFamily: FONTS.MullerMedium,
  },
  customstyle: {
    marginBottom: 15,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
  },
  filterPrice: {
    color: COLORS.black,
    fontSize: 18,
  },
  styleMargin: {
    marginBottom: 8,
  }
});
