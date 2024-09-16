import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    const logoToddyn = 'https://i.pinimg.com/originals/2f/cc/0d/2fcc0d238a5be0222921b29a9ffe3071.png';
    const backgroundImage = 'https://i.pinimg.com/originals/2f/cc/0d/2fcc0d238a5be0222921b29a9ffe3071.png';

    return (
        <ImageBackground
            source={{ uri: backgroundImage }}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <LinearGradient
                    colors={['#fc6262', 'transparent']}
                    style={styles.backgroundGradient}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: logoToddyn
                    }}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
    logo: {
        width: 250,
        height: 250,
        backgroundColor: 'transparent',
    },
});
