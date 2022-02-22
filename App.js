import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image, FlatList } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const ListTab = [
  {
    status: 'News'
  },
  {
    status: 'Purple'
  },
  {
    status: 'Green'
  },
  
]


const data = [
  {
    name: 'intoduction to machine learning  for ',
    status: '12.6'
  },

  {
    name: 'intoduction to machine learning  for ',
    status: '13.6'
  },

  {
    name: 'intoduction to machine learning  u ',
    status: '15.8'
  },
  {
    name: 'intoduction to machine learning  me ',
    status: '12.8'
  },

  {
    name: 'intoduction to machine learning  all of us ',
    status: '16.9'
  },

  {
    name: 'intoduction to machine learning   ',
    status: '13.8'
  }

]

export default function App() {
  const [status, setStatus] = useState('All')
  const [datalist, setDatalist] = useState(data)

  const setStatusFilter = status => {
    if(status !=='All' ) {    
      setDatalist([...data.filter(e => e.status === status)])
    } else {
    setDatalist(data)
    }
    setStatus(status)
  }

  const renderItem = ({ item, index }) => {
    return (
      // <ScrollView>
      <View Key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image
            style={styles.itemImage}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>

        <View  >
          <Text>{item.status}</Text>
        </View>

      </View>


      // </ScrollView>
    )
  }
   
  const separator = () => {

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ListTab}>
        {
          ListTab.map((e) => (
            <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive]}
              onPress={(e) => setStatusFilter(e.status)}
            >
              <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>
                {e.status}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>

      <FlatList
        data={datalist}
        KeyExtractor={(e, i) => i.toString()}
        renderItem={renderItem} />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  ListTab: {

    flexDirection: 'row',
    marginTop: 35,
    alignSelf: 'center',
  },
  btnTab: {
    width: Dimensions.get('window').width / 4.2,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center'
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: '#4169e1'
  },
  textTabActive: {
    color: '#000000'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  itemLogo: {
    padding: 10
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemstatus: {
   backgroundColor: 'green'
  },

});
