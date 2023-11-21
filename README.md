## ListApp
- Adding data to the device database
- Removing data from the device database
- Rendering data from the device database to the UI
- Using FlatList with swipeable items

## Tech
- React Native
- SQLite

## Main components
- **App.js:** The App.js component is a parent component in the application. It includes function calls for database initialization, adding items to the database, reading items from the database, and deleting items from the database. App.js also includes components such as StyleSheet, Text, View, TextInput, TouchableOpacity, and FlatList.

- **ListItems.js:** The ListItems.js component is a child component inside FlatList in App.js. The ListItems component renders items from the database and a delete button for each item when the item is swiped to the left. ListItems.js also includes components such as View, Text, StyleSheet, Dimensions, TouchableOpacity, GestureHandlerRootView, and Swipeable.
