import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'



const NextDay = () => {
    return (
        <ScrollView>
            <View style={styles.day}>
                <View>
                    <View style={styles.compart}>

                        <Text>LOGO METEO</Text>


                    </View>
                </View>
                <View>
                    <View style={styles.compart}>
                        <Text>DATE</Text>
                        <Text>NOM METEO</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.compart}>
                        <Text style={styles.flex} >TEMP MAX</Text>
                        <Text>TEMP MIN</Text>
                    </View>
                </View>
            </View>


        </ScrollView>
    )
}

export default NextDay

const styles = StyleSheet.create({
    day: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10,
    },

    compart: {
        marginTop: 5,
        margin: 5,
        width: 90,
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

})
