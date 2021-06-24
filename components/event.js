import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

const Event = (props) => {
  const [event, setEvent] = useState({destination:'', time:'', limit:'', people:[]});
  const [people, setPeople] = useState([]);
  const [destination, setDestination] = useState("")
  const [time, setTime] = useState("")
  const [limit, setLimit] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@event')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setEvent(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@event', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

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


    <Button
          color='blue' title='Save this event'
          onPress = {() => {
            let newEvent = {destination: destination, time:time, limit:limit, people:[]}
            setEvent(newEvent)
            storeData(newEvent)
          }}
      />

    <Text style={styles.text}> Destination: {event.destination}</Text>
    <Text style={styles.text}> Time: {event.time}</Text>
    <Text style={styles.text}> Limit: {event.limit}</Text>

    <TextInput
          placeholder="Please enter your name if you wish to join this trip!"
          style={styles.textinput}
          onChangeText={text => {setName(text)}}
    />

    <Button
          color='red' title='Join this trip!'
          onPress = {() => {
          getData()
          const newPeople = event.people.concat({'name': name, 'date':new Date})
          event.people = newPeople
          storeData(event)
          getData()}
          }
    />

    <Text style={styles.text}> These people are in this trip! </Text>
    <FlatList
        data={event.people}
        renderItem={renderItem}
        keyExtractor={item => item.date}
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
      margin:20,
      fontSize:20
    },
    text:{
      fontSize:20,
      margin:20,
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
