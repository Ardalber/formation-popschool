import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, UseEffect } from 'react-native';
import axios from 'axios';


const HeaderToday = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`'https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8'`)

  }, []);    

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerItem}>DATE</Text>
                <Text style={styles.headerLeft, styles.headerItem}>TEMP MAX</Text>
                <Text style={styles.headerItem}>TEMP MIN</Text>
            </View>
            <View style={styles.headerRight}>
                <Text style={styles.headerItem}>LOGO METEO</Text>
                <Text style={styles.headerItem}>NOM METEO</Text>
            </View>
        </View>
    )
}

export default HeaderToday

const styles = StyleSheet.create({
    header: {
        backgroundColor:'blue',
        marginTop: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLeft: {
        marginRight: 50,
        marginTop: 10,
        marginBottom: 10,
        
    },
    headerRight: {
        marginLeft: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    headerItem: {
        textAlign:'center',
        
        margin:10,
        backgroundColor: '#bcbcbc',
        width: 100,
    }


}
)
