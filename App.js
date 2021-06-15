import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to the Exchange' }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container2}>
      <Button
        title="About Exchange"
        onPress={() =>
          navigation.navigate('About', { name: 'Bin' })
        }
      />
      <Button
        title="Explore"
        onPress={() =>
          navigation.navigate('Explore', { name: 'Bin' })
        }
      />
      </View>
      <View style={styles.container}>
        <Image
          source={"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          defaultValue="Exchange?"
        />
        <Image
          source={"https://i.pinimg.com/originals/4e/c6/88/4ec68829abf2743273beeb93f0a6975b.jpg"}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const AboutScreen = ({ navigation, route }) => {
  return <Text style={styles.header}>Exchange is an app for people to exchange thier stuff or even houses for a period of time to get a new experience!</Text>;
};

const ExploreScreen = ({ navigation, route }) => {
  return <Text style={styles.header}>Here you will explore things to exchange! </Text>;
};



const styles = StyleSheet.create({
  header: {
    flex: 1,
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content1: {
    alignItems: 'flex-start',
    color: 'black',
    fontSize: 20,
  },
  image: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    width: 600,
    height: 500,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  container: {
    flex: 1,
    flexDirection:'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection:'row',
  }
});
