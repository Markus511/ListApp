# ListApp

## Adding data to the device database
## Removing data from the device database
## Rendering data from the device database to the UI
## Using FlatList with swipeable items


## Main components

### App.js component is a parent component in the application. It includes function calls for database initializaton, adding items to database, reading items from database and deleting items from database. App.js also includes components such as StyleSheet, Text, View, TextInput, TouchableOpacity and FlatList.

### ListItems.js component is a child component and it is inside Flatlist in App.js. ListItems component renders items from database and delete button for each item when the item is swiped to the left. ListItems.js also includes components such as View, Text, StyleSheet, Dimensions, TouchableOpacity, GestureHandlerRootView and Swipeable.
