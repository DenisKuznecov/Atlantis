import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 15,
    height: 48,
  },
  styleTextInput: {
    flex: 1,
    fontSize: 16,
  },
  textarea: {
    paddingTop: 5,
    height: 144,
    alignItems: 'flex-start',
    textAlignVertical: 'top',
  }
});