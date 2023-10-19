import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

// images
import { edit, greenUp, headerLeft, headerRight, logout, profilePic, redDown, star } from '../Images/Images'

// fonts
import { Fonts } from '../Fonts/Fonts'

// components
import BadgesFlatList from '../Components/BadgesFlatList'

const Screen3 = ({ navigation }) => {
    return (
        <View style={Styles.mainContainer}>
            {/* header */}
            <View style={Styles.headerContainer}>
                <Image source={headerLeft} />
                <Text style={Styles.headerText}>Profile</Text>
                <Image source={headerRight} />
            </View>

            {/* profile details */}
            <View>
                <Image style={Styles.profileImg} source={profilePic} />
                <TouchableOpacity activeOpacity={0.5} style={Styles.editProfileContainer}>
                    <Image source={edit} />
                </TouchableOpacity>
            </View>

            <Text style={Styles.name}>Jina Simons</Text>
            <Text style={Styles.points}>6000 Pts</Text>

            <View style={Styles.infoContainer}>
                <Text style={Styles.profileInfo}>I'm a software developer that has been in the crypto space since 2012. And I've seen it grow and falter over a period of time. Really happy to be here!</Text>
            </View>

            {/* logout button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.5} style={Styles.logoutContainer}>
                <Image source={logout} />
                <Text style={Styles.logoutText}>Logout</Text>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                {/* percentage */}
                <View style={Styles.predicationContainer}>
                    <Image style={Styles.starImg} source={star} />
                    <View Styles={Styles.percentRow}>
                        <Text style={Styles.percentLabel}>Under or Over</Text>
                        <View style={Styles.percentValue}>
                            <Image source={greenUp} />
                            <Text style={Styles.value}>81%</Text>
                        </View>
                    </View>
                    <View Styles={Styles.percentRow}>
                        <Text style={Styles.percentLabel}>Top 5</Text>
                        <View style={Styles.percentValue}>
                            <Image source={redDown} />
                            <Text style={Styles.value}>-51%</Text>
                        </View>
                    </View>
                </View>

                {/* separator */}
                <View style={{ width: '100%', height: 4, backgroundColor: '#F3F2F7', marginTop: 20 }} />

                {/* badged flatList */}
                <BadgesFlatList />
            </ScrollView>
        </View >
    )
}

export default Screen3

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginStart: 15,
        marginEnd: 15,
    },
    headerText: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '500',
    },
    profileImg: {
        alignSelf: "center",
        marginTop: 25
    },
    editProfileContainer: {
        height: 24,
        width: 24,
        borderRadius: 50,
        alignSelf: 'center',
        position: "absolute",
        zIndex: 1,
        top: '75%',
        left: '54%',
        borderWidth: 1,
        borderColor: '#EEEAF3',
        alignItems: 'center',
        justifyContent: 'center'

    },
    name: {
        color: '#333',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 12,
        textAlign: "center",
    },
    points: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 12,
        fontWeight: '500',
        marginTop: 8,
        textAlign: "center",
    },
    infoContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 8,
        marginStart: 15,
        marginEnd: 15,
    },
    profileInfo: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'justify'
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24
    },
    logoutText: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '500',
        marginStart: 10
    },
    predicationContainer: {
        height: 100,
        width: '90%',
        borderWidth: 1,
        borderColor: '#EEEAF3',
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
    },
    starImg: {
        position: 'absolute',
        top: '-16%',
        right: '53%',
    },
    percentRow: {
        flexDirection: 'row',
    },
    percentLabel: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '600',
    },
    percentValue: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14
    },
    value: {
        color: '#4F4F4F',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 24,
        fontWeight: '500',
        marginStart: 12
    },
})