import { SafeAreaView, ScrollView, StyleSheet, Text, View, Platform, StatusBar, Pressable } from 'react-native'
import { Link, router } from "expo-router";

const index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>index</Text>

                <Link href="/users/1">Go to user 1</Link>
                <Pressable onPress={() => router.push("/users/2")}>
                    <Text>Go to user 2</Text>
                </Pressable>

                <Pressable onPress={() => router.push({
                    pathname: "/users/[id]",
                    params: { id: 3 }
                })}>
                    <Text>Go to user 3</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // 适配 Android 状态栏
    },
});

export default index;