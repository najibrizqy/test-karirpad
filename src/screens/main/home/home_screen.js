import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native';
import { Container, Content, Icon, Input } from 'native-base';

import img from 'images';
import styles from './home_style';

const HomeScreen = (props) => {

    const [seeMore, setSeeMore] = useState(false)

    return(
        <Container style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} style={styles.btnMenu} onPress={() => props.navigation.openDrawer()}>
                    <Icon type="AntDesign" name="minus" style={styles.iconMinus} />
                    <Icon type="AntDesign" name="minus" style={styles.iconMinus2} />
                </TouchableOpacity>
                <Icon type="MaterialIcons" name="access-time"  style={styles.iconHistory} />
                <Text style={styles.headerTitle}>History</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.btnNotif}>
                    <View style={styles.bulletRed} />
                    <Icon type="MaterialIcons" name="notifications-none" style={styles.iconNotif} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.btnProfile} onPress={() => props.navigation.navigate('Profile')}>
                    <Image source={img.imgProfile} style={styles.imgProfile} />
                </TouchableOpacity>
            </View>
            <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                <View style={styles.filterCard}>
                    <View style={styles.inputItem}>
                        <Icon type="Ionicons" name="ios-search-outline" style={styles.iconInput} />
                        <Input 
                            style={styles.inputText}
                            autoCapitalize={'none'}
                            autoCompleteType='off'
                            placeholder="Job Tittle, Company, or Anything"
                            placeholderTextColor="#bcbcc4"
                        />
                    </View>
                    {
                        seeMore && 
                        <>
                            <View style={styles.inputItem}>
                                <Icon type="SimpleLineIcons" name="location-pin" style={styles.iconInput} />
                                <Input 
                                    style={styles.inputText}
                                    autoCapitalize={'none'}
                                    autoCompleteType='off'
                                    placeholder="Location"
                                    placeholderTextColor="#bcbcc4"
                                />
                            </View>
                            <View style={styles.inputItem}>
                                <Icon type="Ionicons" name="ios-briefcase-outline" style={styles.iconInput} />
                                <Input 
                                    style={styles.inputText}
                                    autoCapitalize={'none'}
                                    autoCompleteType='off'
                                    placeholder="Job Type"
                                    placeholderTextColor="#bcbcc4"
                                />
                            </View>
                            <View style={styles.inputItem}>
                                <Icon type="MaterialCommunityIcons" name="cash-usd-outline" style={styles.iconInput} />
                                <Input 
                                    style={styles.inputText}
                                    keyboardType={'number-pad'}
                                    autoCompleteType='off'
                                    placeholder="Salary Range"
                                    placeholderTextColor="#bcbcc4"
                                />
                            </View>
                        </>
                    }
                    <TouchableOpacity activeOpacity={0.7} style={styles.btnSearch}>
                        <Text style={styles.txtSearch}>Search</Text>
                    </TouchableOpacity>
                    {
                        !seeMore &&
                        <TouchableOpacity activeOpacity={0.7} style={styles.btnSeeMore} onPress={() => setSeeMore(true)}>
                            <Text style={styles.txtSeeMore}>See More</Text>
                            <Icon type="MaterialIcons" name="keyboard-arrow-down" style={styles.iconDown} />
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.vacancyCount}>
                    <Text style={styles.txtCount}>Semua Lowongan (298)</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Icon type="Entypo" name="dots-three-horizontal" style={styles.iconDot} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.vacancyCard}>
                    <Image source={img.iconKarirpad} style={styles.iconKarirpad} />
                    <TouchableOpacity activeOpacity={0.5} style={styles.btnDot}>
                        <Icon type="Entypo" name="dots-three-horizontal" style={[styles.iconDot, {fontSize: 18}]} />
                    </TouchableOpacity>
                    <Text style={styles.vacancyTitle}>Frontend Developer</Text>
                    <View style={[styles.row, {marginTop: 5}]}>
                        <Text style={styles.vacancyCompany}>Karirpad</Text>
                        <Icon type="Entypo" name="dot-single" style={styles.iconDotSingle} />
                        <Text style={styles.companyInfo}>Human Resource, Web</Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.vacancyLocation}>Jakarta, Indonesia</Text>
                        <View style={styles.row}>
                            <Icon type="Entypo" name="attachment" style={styles.iconAttach} />
                            <Text style={styles.attachCount}> 3</Text>
                        </View>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.vacancyTime}>2 Days ago</Text>
                        <View style={styles.vacancyType}>
                            <Text style={styles.txtType}>Full Time</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.vacancyCard}>
                    <Image source={img.iconKarirpad} style={styles.iconKarirpad} />
                    <TouchableOpacity activeOpacity={0.5} style={styles.btnDot}>
                        <Icon type="Entypo" name="dots-three-horizontal" style={[styles.iconDot, {fontSize: 18}]} />
                    </TouchableOpacity>
                    <Text style={styles.vacancyTitle}>UX Researcher</Text>
                    <View style={[styles.row, {marginTop: 5}]}>
                        <Text style={styles.vacancyCompany}>Karirpad</Text>
                        <Icon type="Entypo" name="dot-single" style={styles.iconDotSingle} />
                        <Text style={styles.companyInfo}>Human Resource, Web</Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.vacancyLocation}>Jakarta, Indonesia</Text>
                        <View style={styles.row}>
                            <Icon type="Entypo" name="attachment" style={styles.iconAttach} />
                            <Text style={styles.attachCount}> 12</Text>
                        </View>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.vacancyTime}>2 Days ago</Text>
                        <View style={styles.vacancyType}>
                            <Text style={styles.txtType}>Intership</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.vacancyCard}>
                    <Image source={img.iconKarirpad} style={styles.iconKarirpad} />
                    <TouchableOpacity activeOpacity={0.5} style={styles.btnDot}>
                        <Icon type="Entypo" name="dots-three-horizontal" style={[styles.iconDot, {fontSize: 18}]} />
                    </TouchableOpacity>
                    <Text style={styles.vacancyTitle}>Backend Developer</Text>
                    <View style={[styles.row, {marginTop: 5}]}>
                        <Text style={styles.vacancyCompany}>Karirpad</Text>
                        <Icon type="Entypo" name="dot-single" style={styles.iconDotSingle} />
                        <Text style={styles.companyInfo}>Human Resource, Web</Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.vacancyLocation}>Jakarta, Indonesia</Text>
                        <View style={styles.row}>
                            <Icon type="Entypo" name="attachment" style={styles.iconAttach} />
                            <Text style={styles.attachCount}> 5</Text>
                        </View>
                    </View>
                    <View style={styles.rowBetween}>
                        <Text style={styles.vacancyTime}>3 Days ago</Text>
                        <View style={styles.vacancyType}>
                            <Text style={styles.txtType}>Full Time</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Content>
        </Container>
    )
}

export default HomeScreen;