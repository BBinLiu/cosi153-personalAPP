import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, FlatList } from "react-native";


const Event = (props) => {
  const [event, setEvent] = useState({destination:'', time:'', limit:''});
  const [people, setPeople] = useState([]);
  const [destination, setDestination] = useState("")
  const [time, setTime] = useState("")
  const [limit, setLimit] = useState("")
  const [name, setName] = useState("")

  const renderItem = ({item}) => {
    return (
      <View style={{border:'thin solid red'}}>
        <Text>{item.name} </Text>
      </View>
    )
  }

      return (
  <View style={styles.container}>

    <Text style={styles.text}> Event Type: {props.eventType} </Text>
    <View style={styles.rowContainer}>
      <Text style={styles.text}> Destination: </Text>
      <TextInput
          style={styles.textinput}
          onChangeText={text => {setDestination(text)}}
      />
    </View>

    <View style={styles.rowContainer}>
      <Text style={styles.text}> Time: </Text>
      <TextInput
          style={styles.textinput}
          onChangeText={text => {setTime(text)}}
      />
    </View>

    <View style={styles.rowContainer}>
      <Text style={styles.text}> Limit on number of people: </Text>
      <TextInput
          style={styles.textinput}
          onChangeText={text => {setLimit(parseFloat(text))}}
      />
    </View>

    <TextInput
        placeholder="Please enter your name if you wish to join this trip!"
        style={styles.textinput}
        onChangeText={text => {setName(text)}}
    />

    <Button
          color='red' title='Join this trip!'
          onPress = {() => {
               if (people.length < limit) {
                 setPeople(people.concat({'name': name, 'date':new Date}))}}}
      />

    <Text style={styles.text}> These people are in this trip! </Text>
    <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={item => item.date.toString()}
      />
  </View>
      );
    }

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      border:'thin solid blue',
      flex: 1,
      justifyContent: "center",
      margin:20,
      fontSize:20
    },
    text:{
      flex:1,
      fontSize:20,
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    colContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

export default Event;
