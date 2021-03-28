import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Text from '../../components/Text';
import CardImage from '../../components/CardImage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu from './Menu';
import IMG from '../../assets/image.png';
import styles from './style';
import CardImageWithText from '../../components/CardImageWithText';
const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={IMG} style={styles.header}>
        <View style={styles.cardHeader}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="wallet"
                size={16}
                style={{marginRight: 4}}
                color="#fff"
              />
              <Text color="#fff">Saldo</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text size={12} marginRight={4} color="#fff">
                Rp
              </Text>
              <Text size={18} bold color="#fff">
                20.000
              </Text>
            </View>
          </View>
          <View style={styles.topMenu}>
            <TouchableOpacity>
              <Icon name="wallet-outline" size={40} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="wallet-plus-outline" size={40} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="face-profile-woman" size={40} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Menu />
      <View style={{marginTop: 24}}>
        <View style={{paddingHorizontal: 24}}>
          <Text size={16} bold>
            Restaurant Pilihan
          </Text>
        </View>
        <ScrollView
          horizontal
          style={{paddingTop: 24}}
          showsHorizontalScrollIndicator={false}>
          <CardImage image={IMG} />
          <CardImage image={IMG} />
          <CardImage image={IMG} />
        </ScrollView>
      </View>
      <View style={{marginTop: 24}}>
        <View style={{paddingHorizontal: 24}}>
          <Text size={16} bold>
            Menu Pilihan
          </Text>
        </View>
        <View style={{paddingHorizontal: 24}}>
          <CardImageWithText
            image={IMG}
            title="Nasi Goreng"
            description="Lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
          />
          <CardImageWithText
            image={IMG}
            title="Nasi Goreng"
            description="Lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
          />
          <CardImageWithText
            image={IMG}
            title="Nasi Goreng"
            description="Lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
