import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import ListItems from './ListItems';

import {init, addItem, deleteItem, fetchAllItems} from './database/db';

// database initialization
init()
  .then(() => {
    console.log('Database creation succeeded!');
  })
  .catch(err => {
    console.log('Database IS NOT initialized! ' + err);
  });

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  // read all items when starting app
  useEffect(() => {
    readAllItems();
  }, []);

  const handleItemChange = value => {
    setItem(value);
  };

  // Add item to database and read items
  async function saveItem() {
    try {
      const dbResult = await addItem(item);
      console.log('dbResult: ' + dbResult);
      await readAllItems();
    } catch (err) {
      console.log('error', err);
    } finally {
      setItem('');
    }
  }

  // Delete item from database and read items
  async function deleteItemFromDb(id) {
    try {
      const dbResult = await deleteItem(id);
      await readAllItems();
    } catch (err) {
      console.log(err);
    } finally {
      //No need to do anything
    }
  }

  // Read items from database and update state Items
  async function readAllItems() {
    try {
      const dbResult = await fetchAllItems();
      console.log(dbResult);
      setItems(dbResult);
    } catch (err) {
      console.log('Error: ' + err);
    } finally {
      console.log('All items are read');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          value={item}
          style={styles.inputItem}
          onChangeText={handleItemChange}
        />
        <TouchableOpacity style={styles.addButton} onPress={saveItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        style={styles.list}
        renderItem={({item}) => {
          return (
            <>
              <ListItems
                data={item.item}
                handleDelete={() => deleteItemFromDb(item.id)}
              />
              <View style={styles.line}></View>
            </>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputRow: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputItem: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    width: 230,
    height: 50,
    fontSize: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    backgroundColor: 'white',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
  },
});

export default App;
