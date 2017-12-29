import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Header,
  Button,
} from '../../components';

import { IMAGES } from  '../../assets/style';
import styles from './style';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'firstTab',
      activeBtnTab: true,
    }
  }

  toggleTabs = (tabName) => {
    switch(tabName) {
      case 'firstTab':
        this.setState({
          tab: 'firstTab',
        });
        break;
      case 'secondTab':
        this.setState({
          tab: 'secondTab',
        });
        break;
      case 'thirdTab':
        this.setState({
          tab: 'thirdTab',
        });
        break;
      default: break;
    }
  }

  render() {
    const styleTabBtnLeft = [
      styles.tabBtn,
      styles.leftBtn,
      this.state.tab && styles.btnActive,
    ];

    const styleTabBtnRight = [
      styles.tabBtn,
      styles.rightBtn,
      !this.state.tab && styles.btnActive,
    ];


    return (
      <View style={styles.container}>
        <Header
          backBtn={() => Actions.pop()}
          title='Excursion'
          icon={IMAGES.icon_blue_basket}
        />
        <View style={styles.wrapButtons}>
          <TouchableOpacity
            onPress={() => this.toggleTabs('firstTab')}
            style={styleTabBtnLeft}
          >
            <Text style={[styles.btnTabText, this.state.tab && styles.btnActiveText]}>
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.toggleTabs('secondTab')}
            style={[styles.tabBtn, styles.centerBtnTab]}
          >
            <Text style={styles.btnTabText}>
              Attraction
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.toggleTabs('thirdTab')}
            style={styleTabBtnRight}
          >
            <Text style={[styles.btnTabText, !this.state.tab && styles.btnActiveText]}>
              Important
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.postImage}>
            <Image
              style={styles.image}
              source={IMAGES.post_image3}
            />
            <View style={styles.footer}>
              <View style={styles.wrapColLeft}>
                <Text style={styles.leftText}>
                  Regular excursion
                </Text>
              </View>
              <View style={styles.wrapPrices}>
                <View style={styles.priceRow}>
                  <Image
                    source={IMAGES.icon_home}
                    style={styles.icon}
                  />
                  <Text style={styles.price}>
                    from $ 65
                  </Text>
                </View>
                <View style={[styles.priceRow, styles.marginB]}>
                  <Image
                    source={IMAGES.icon_location}
                    style={styles.icon}
                  />
                  <Text style={styles.price}>
                    from ₪ 165
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.wrapper}>
            {
              this.state.tab === 'firstTab' &&
              <View>
                <Text style={styles.title}>
                  Golan heights. Sanctuary of Banias.
                  Israel
                </Text>
                <Text style={styles.subTitle}>
                  Departure time: 4:32 PM
                </Text>
                <Text style={styles.text}>
                  Golan heights. Safed. Katsrin.
                </Text>
                <Text
                  style={styles.text}
                >
                  When choosing excursions in Israel, each tourist should stop his attention on a tour of the Golan Heights. This amazing picturesque place is the most northern part of Israel.
                </Text>
                <Text style={styles.text}>
                  Journey through Safed
                </Text>
                <Text style={styles.text}>
                  Along with Jerusalem, Tiberias and Hebron, Safed is one of the main holy cities of Judaism. This city is located at an altitude of nine hundred meters above sea level. Safed is incredibly beautiful and picturesque, it is surrounded by mountains, the air here is clean, and the architecture is unusual. From the height of this city offers a beautiful panorama of Mount Hermon and the famous lake Kinerit. Currently, there are many synagogues in Zefat.
                </Text>
                <Text style={styles.text}>
                  Journey to the mountain Bental
                </Text>
                <Text style={styles.text}>
                  The Bental memorial is an observation deck at an altitude of 1165 meters, located on the border between Israel and Syria. In 1973, for Mount Bental, one of the largest battles took place in the Yom Kippur War, the site in the valley between Mount Bental and the Mount Hermon is called the Valley of Tears.
                </Text>
                <Text style={styles.text}>
                  Journey through Katsrin
                </Text>
                <Text style={styles.text}>
                  For tourists it is offered to get acquainted with the capital of the Golan Heights, founded in 1977, the town of Katsrin. It is in this city that the most famous wine factory is located, which are the pride of the Golan, as well as the best wines of Israel. In addition, there is a plant for the production of olive oil in Katzrin (as well as high-quality cosmetics from olives), there are two museums, an archeological park and a factory for making silverware.
                </Text>
                <Text style={styles.text}>
                  Tour of the Golan Heights
                </Text>
                <Text style={styles.text}>
                  This tour will give every tourist unforgettable emotions, will breathe in the clean air and enjoy the incredibly beautiful scenery of this amazing colorful place!
                </Text>
                <Button
                  orange
                  name='Add to basket'
                />
              </View> || this.state.tab === 'secondTab' &&
              <Text>
                sdfsfsfsfsfd
              </Text> || this.state.tab === 'thirdTab' &&
              <Text>
                33333
              </Text> || null
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PostPage;

