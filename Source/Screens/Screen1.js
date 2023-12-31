import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

// modal
import Modal from 'react-native-modal'

// fonts
import { Fonts } from '../Fonts/Fonts'

// images
import { bitCoin, clock, downArrow, info, profile, progress, upArrow } from '../Images/Images'

const Screen1 = ({ navigation }) => {

    // states
    const [modalVisible, setModalVisible] = useState(false)
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        const changedValue = Math.min(Math.max(parseInt(numericValue), 1), 100);
        setInputValue(changedValue.toString());
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={Styles.mainContainer}>
            <Text style={Styles.heading}>Today's Games</Text>
            {/* card container */}
            <View style={Styles.cardContainer}>

                {/* section 1 */}
                <View style={Styles.section1}>
                    {/* heading */}
                    <View style={Styles.section1Heading}>
                        <View style={Styles.underOrOver}>
                            <Text style={Styles.underOrOverText}>Under or Over</Text>
                            <TouchableOpacity>
                                <Image source={info} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.timeSection}>
                            <Text style={Styles.startingText}>Starting in</Text>
                            <Image source={clock} />
                            <Text style={Styles.timeText}>03:23:12</Text>
                        </View>
                    </View>

                    {/* description */}
                    <View style={Styles.section1Desc}>
                        <View style={{ width: '75%' }}>
                            <Text style={Styles.descNormal}>{`Bitcoin price will be under\n`}<Text style={Styles.priceAmt}>$24,524</Text> <Text style={[Styles.descNormal, { color: '#FFF' }]}> at 7 a ET on 22nd Jan'21</Text></Text>
                        </View>
                        <Image style={Styles.bitCoinImg} source={bitCoin} />
                    </View>
                </View>

                {/* section 2 */}
                <View style={Styles.section2}>
                    {/* row section */}
                    <View style={Styles.section2Row}>
                        <View>
                            <Text style={Styles.rowLabel}>Prize Pool</Text>
                            <Text style={Styles.rowValue}>$12,000</Text>
                        </View>
                        <View>
                            <Text style={Styles.rowLabel}>Under</Text>
                            <Text style={Styles.rowValue}>3.25x</Text>
                        </View>
                        <View>
                            <Text style={Styles.rowLabel}>Over</Text>
                            <Text style={Styles.rowValue}>1.25x</Text>
                        </View>
                        <View>
                            <Text style={Styles.rowLabel}>Entry Fees</Text>
                            <View style={Styles.feesSection}>
                                <Text style={[Styles.rowValue, { marginTop: 0 }]}>5</Text>
                                <View style={Styles.coin} />
                            </View>
                        </View>
                    </View>
                    <Text style={Styles.predictionText}>What's your prediction?</Text>

                    {/* buttons */}
                    <View style={Styles.buttonsRow}>
                        <TouchableOpacity
                            onPress={toggleModal}
                            activeOpacity={0.5} style={[Styles.buttonContainer]}>
                            <Image source={downArrow} />
                            <Text style={Styles.buttonText}>Under</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={toggleModal}
                            activeOpacity={0.5}
                            style={[Styles.buttonContainer, { backgroundColor: '#6231AD' }]}>
                            <Image source={upArrow} />
                            <Text style={Styles.buttonText}>Over</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* section 3 */}
                <View style={Styles.section3}>
                    {/* labels */}
                    <View style={Styles.section3Row}>
                        <View style={Styles.section3LabelRow}>
                            <Image source={profile} />
                            <Text style={Styles.section3Label}>355 Players</Text>
                        </View>
                        <View style={Styles.section3LabelRow}>
                            <Image source={progress} />
                            <Text style={Styles.section3Label}>View chart</Text>
                        </View>
                    </View>

                    {/* bar */}
                    <View style={Styles.barRow}>
                        <View style={Styles.firstBar} />
                        <View style={Styles.secondBar} />
                    </View>

                    {/* predications */}
                    <View style={Styles.predictionRow}>
                        <Text style={Styles.predictText}>232 predicted under</Text>
                        <Text style={Styles.predictText}>123 predicted over</Text>
                    </View>
                </View>

            </View>

            {/* modal */}
            <Modal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                onBackButtonPress={toggleModal}
                style={Styles.modal}>
                <View style={Styles.modalContainer}>
                    <TouchableOpacity onPress={toggleModal} style={Styles.modalLine} />
                    <Text style={Styles.selectPrediction}>Your Prediction is Under</Text>
                    <Text style={Styles.entryTicketsText}>Entry Tickets</Text>

                    {/* input field */}
                    <View style={Styles.ticketView}>
                        <TextInput
                            keyboardType='number-pad'
                            style={Styles.ticktInp}
                            value={inputValue}
                            onChangeText={handleInputChange}
                            placeholderTextColor={'black'}
                            placeholder='Enter tickets' />
                    </View>

                    {/* amt section */}
                    <Text style={Styles.winText}>You can win</Text>
                    <View style={Styles.amtContainer}>
                        <Text style={Styles.amtText}>$2000</Text>
                        <View style={Styles.totalContainer}>
                            <Text style={Styles.totalText}>Total</Text>
                            <View style={Styles.coinColor} />
                            <Text style={Styles.coinValue}>5</Text>
                        </View>
                    </View>

                    {/* submit button */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Screen3')
                            setModalVisible(false)
                        }}
                        activeOpacity={0.5} style={Styles.submitButton}>
                        <Text style={Styles.buttonText}>Submit my prediction</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    )
}

export default Screen1

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontFamily: Fonts.montserrat_Bold,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21,
        margin: 13,
        color: '#333'
    },
    cardContainer: {
        height: 389,
        width: '95%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EEEAF3',
        alignSelf: 'center'
    },
    section1: {
        height: 104,
        width: '100%',
        backgroundColor: '#6231AD',
        justifyContent: 'center'
    },
    section1Heading: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        justifyContent: 'space-between',
    },
    underOrOver: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    underOrOverText: {
        fontFamily: Fonts.montserrat_Regular,
        fontWeight: '600',
        fontSize: 12,
        textTransform: 'uppercase',
        color: '#D2BAF5',
        marginRight: 8
    },
    timeSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    startingText: {
        color: '#B296DC',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 12,
        fontWeight: '500',
        marginRight: 8
    },
    section1Desc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 15,
        marginEnd: 15
    },
    descNormal: {
        color: '#D2BAF5',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 19
    },
    priceAmt: {
        color: '#FFF',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 19
    },
    bitCoinImg: {
        top: 7,
    },
    timeText: {
        color: '#D2BAF5',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 8
    },
    section2: {
        height: 175,
        backgroundColor: '#EEEAF3',
        justifyContent: 'center',
        elevation: 1
    },
    section2Row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    },
    rowLabel: {
        color: 'grey',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    rowValue: {
        color: '#333',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 5
    },
    coin: {
        backgroundColor: '#FFD600',
        borderRadius: 50,
        height: 13,
        width: 13,
        marginStart: 8,
    },
    feesSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'flex-end',
    },
    predictionText: {
        color: "#727682",
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 15,
        marginStart: 15
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    },
    buttonContainer: {
        width: 155,
        height: 40,
        borderRadius: 45,
        backgroundColor: '#452C55',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '600',
        marginStart: 5,
    },
    section3: {
        height: 110,
        width: '100%',
        backgroundColor: '#F6F3FA',
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        justifyContent: 'center',
        elevation: 1
    },
    section3Row: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between'
    },
    section3LabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    section3Label: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Bold,
        fontWeight: '600',
        fontSize: 14,
        marginStart: 8,
    },
    barRow: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    firstBar: {
        height: 10,
        width: '70%',
        backgroundColor: '#FE4190',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    secondBar: {
        height: 10,
        width: '30%',
        backgroundColor: '#2DABAD',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    predictionRow: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between',
    },
    predictText: {
        color: "grey",
        fontSize: 12,
        fontWeight: '500',
        fontFamily: Fonts.montserrat_Regular,
    },
    modal: {
        justifyContent: 'flex-end',
        width: '100%',
        margin: 0,
        borderTopLeftRadius: 50,
    },
    modalContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: '#ECF3F3'
    },
    modalLine: {
        width: 30,
        height: 4,
        borderRadius: 36,
        backgroundColor: '#B5C0C8',
        margin: 20,
        alignSelf: 'center'
    },
    selectPrediction: {
        color: '#333',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 16,
    },
    entryTicketsText: {
        color: 'grey',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginStart: 16,
        marginTop: 28
    },
    winText: {
        color: 'grey',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 12,
        fontWeight: '500',
        marginStart: 16,
        marginTop: 50,
    },
    ticketView: {
        height: 40,
        backgroundColor: '#f3effa',
        width: '90%',
        alignSelf: 'center',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: "center",
        fontWeight: '900'
    },
    ticktInp: {
        fontFamily: Fonts.montserrat_Regular,
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
        width: 150,
        textAlign: 'center'
    },
    amtContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginStart: 16,
        marginEnd: 16
    },
    amtText: {
        color: '#03A67F',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 14,
        fontWeight: '600',
    },
    totalContainer: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    totalText: {
        color: '#727682',
        fontFamily: Fonts.montserrat_Regular,
        fontSize: 12,
        fontWeight: '500',
    },
    coinColor: {
        height: 13,
        width: 13,
        backgroundColor: '#FFD600',
        borderRadius: 50,
        marginStart: 8
    },
    coinValue: {
        color: '#333',
        fontFamily: Fonts.montserrat_Bold,
        fontSize: 14,
        fontWeight: '500',
        marginStart: 8,
        top: -2
    },
    submitButton: {
        width: '90%',
        height: 50,
        borderRadius: 33,
        backgroundColor: '#6231AD',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 40
    }
})