import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

// fonts
import { Fonts } from '../Fonts/Fonts'

// mock data
import { BadgesMockData } from '../MockData/BadgesMockData'
import { badgeImg } from '../Images/Images'

const BadgesFlatList = () => {

    const [gamesPress, setGamesPress] = useState(true)
    const [badgePress, setBadgePress] = useState(false)

    const handleGamesPress = () => {
        setGamesPress(true)
        setBadgePress(false)
    }

    const handleBadgePress = () => {
        setBadgePress(true)
        setGamesPress(false)
    }

    const RenderItem = ({ item }) => {
        return (
            <View style={Styles.listContainer}>
                <Image style={{ marginStart: 15 }} source={badgeImg} />
                <View style={{ marginStart: 15 }}>
                    <Text style={Styles.batchName}>{item.batchName}</Text>
                    <Text style={Styles.batchDetail}>{item.batchDetail}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={Styles.flatListContainer}>
            <View style={Styles.batchContainer}>
                <TouchableOpacity onPress={handleGamesPress} style={Styles.batchButton} activeOpacity={0.5}>
                    <Text style={[Styles.batchText, { color: gamesPress ? '#6231AD' : '#727682' }]}>Games played</Text>
                    <View style={{ height: 2, width: '100%', backgroundColor: gamesPress ? '#6231AD' : '#F3F2F7', position: 'absolute', top: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBadgePress} style={Styles.batchButton} activeOpacity={0.5}>
                    <Text style={[Styles.batchText, { color: badgePress ? '#6231AD' : '#727682' }]}>Badges</Text>
                    <View style={{ height: 2, width: '100%', backgroundColor: badgePress ? '#6231AD' : '#F3F2F7', position: 'absolute', top: '100%' }} />
                </TouchableOpacity>
            </View>
            {badgePress ?
                <FlatList
                    style={{ marginBottom: 50 }}
                    data={BadgesMockData}
                    renderItem={RenderItem}
                />
                :
                <View style={Styles.noGamesContainer}>
                    <Text style={Styles.noGamesText}>No games found!</Text>
                </View>
            }
            {/* {gamesPress ?
                : null} */}

        </View>
    )
}

export default BadgesFlatList

const Styles = StyleSheet.create({
    flatListContainer: {
        backgroundColor: '#F3F2F7'
    },
    batchContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    batchButton: {
        height: 60,
        width: '50%',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    batchText: {
        color: "#727682",
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '500',
    },
    listContainer: {
        marginTop: 5,
        flexDirection: 'row',
        width: '92%',
        height: 100,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EEEAF3',
        justifyContent: 'space-between', alignItems: 'center'
    },
    batchName: {
        color: '#333',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '600',
    },
    batchDetail: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        width: '70%',
        marginTop: 8
    },
    noGamesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    noGamesText: {
        color: '#333',
        fontFamily: Fonts.montserrat_Regular,
        fontWeight: '500',
        fontSize: 18
    }
})