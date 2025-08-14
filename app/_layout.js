import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#1E90FF" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
            }}
        >
            <Stack.Screen name="index" options={{ title: "Página Inicial" }} />
            <Stack.Screen name="contato" options={{ title: "Contato" }} />
            <Stack.Screen name="produtos" options={{ title: "Produtos" }} />
            <Stack.Screen name="sobre" options={{ title: "Sobre" }} />
        </Stack>
    );
}