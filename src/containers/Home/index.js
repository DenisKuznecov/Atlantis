import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Header from '../../components/Header';
import Post from '../../components/Post';
import FilterBtn  from '../../components/FilterBtn';

import { IMAGES } from  '../../assets/style';
import styles from './style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'firstTab',
      activeBtnTab: true,
    }
  }

  toggleTabs = (tabName) => {
    if(tabName === "firstTab") {
      this.setState({
        tab: true
      });
    } else {
      this.setState({
        tab: false
      });
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

    const postsFirstTab = [
      {
        postImage: IMAGES.post_image,
        title: 'Golan heights. Sanctuary of Banias.Israel',
        text: 'Group excursion to the Banias Reserve When going on holiday to Israel, one can not ignore one of the most famous historical places - the Banias Reserve! Beautiful nature, as well as the mysterious centuries-old history of this place ...',
        homePrice: '65',
        markerPrice: '175',
        name: 'Regular excursion',
        onPressPost: () => Actions.PostPage(),
      },
      {
        postImage: IMAGES.post_image,
        title: 'Golan heights. Sanctuary of Banias.Israel',
        text: 'Group excursion to the Banias Reserve When going on holiday to Israel, one can not ignore one of the most famous historical places - the Banias Reserve! Beautiful nature, as well as the mysterious centuries-old history of this place ...',
        homePrice: '65',
        markerPrice: '175',
        name: 'Regular excursion',
        onPressPost: () => Actions.PostPage(),
      },
    ];

    const postsSecondTab  = [
      {
        postImage: IMAGES.post_image2,
        title: 'Mini Israel. Latrun. Tel Aviv-Yaffo. The Diamond Exchange.',
        text: 'Group excursion to the Banias Reserve When going on holiday to Israel, one can not ignore one of the most famous historical places - the Banias Reserve! Beautiful nature, as well as the mysterious centuries-old history of this place ...',
        userPrice: '765',
      },
      {
        postImage: IMAGES.post_image2,
        title: 'Mini Israel. Latrun. Tel Aviv-Yaffo. The Diamond Exchange.',
        text: 'Group excursion to the Banias Reserve When going on holiday to Israel, one can not ignore one of the most famous historical places - the Banias Reserve! Beautiful nature, as well as the mysterious centuries-old history of this place ...',
        userPrice: '765',
      },
    ];

    return (
      <View style={styles.container}>
        <Header
          title='Group excursions'
          icon={!this.state.tab ? IMAGES.icon_blue_basket : IMAGES.icon_orange_basket}
          onPressCart={() => Actions.ShoppingCart()}
        />
        <View style={styles.wrapButtons}>
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              onPress={() => this.toggleTabs('firstTab')}
              style={styleTabBtnLeft}
            >
              <Text style={[styles.btnTabText, this.state.tab && styles.btnActiveText]}>
                Group
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggleTabs('secondTab')}
              style={styleTabBtnRight}
            >
              <Text style={[styles.btnTabText, !this.state.tab && styles.btnActiveText]}>
                Individual
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.wrapPost}>
            {
              <FlatList
                data={this.state.tab ? postsFirstTab : postsSecondTab}
                renderItem={({ item, idx }) =>
                  <Post
                    key={idx}
                    {...item}
                  />
                }
              />
            }
          </View>
        </ScrollView>
        <FilterBtn
          onPress={() => Actions.Filter()}
        />
      </View>
    );
  }
}

export default Home;

