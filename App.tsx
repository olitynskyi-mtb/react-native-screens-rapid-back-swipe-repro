import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type RootRoutes = {
  Previous: undefined;
  Home: undefined;
  Support: undefined;
};

const Root = createNativeStackNavigator<RootRoutes>();
const HomeStack = createNativeStackNavigator<{ HomeContent: undefined }>();

function Previous({
  navigation,
}: NativeStackScreenProps<RootRoutes, 'Previous'>) {
  return (
    <View style={styles.screen}>
      <Text>Previous screen</Text>
      <Button title="Open Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function HomeContent() {
  const parent =
    useNavigation().getParent<NativeStackNavigationProp<RootRoutes>>();
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button title="Open Support" onPress={() => parent.navigate('Support')} />
    </View>
  );
}

function Home() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeContent" component={HomeContent} />
    </HomeStack.Navigator>
  );
}

function Support({
  navigation,
}: NativeStackScreenProps<RootRoutes, 'Support'>) {
  return (
    <View style={styles.screen}>
      <Text>Support</Text>
      <Button title="Go back once" onPress={navigation.goBack} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name="Previous" component={Previous} />
        <Root.Screen
          name="Home"
          component={Home}
          options={{ gestureEnabled: false }}
        />
        <Root.Screen name="Support" component={Support} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    gap: 16,
    justifyContent: 'center',
  },
});
