import { Tabs } from "expo-router";


const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerShown:false,
                title: "Home"
            }}/>
            <Tabs.Screen name="users/[id]" options={{
                headerTitle: "User Page",
                title: "User"
            }}/>
        </Tabs>
    )
}

export default TabsLayout;