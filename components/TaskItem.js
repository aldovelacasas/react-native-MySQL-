import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TaskItem = ({task, handleDelete}) => {

  const navigation = useNavigation()





  return (
    <View style={styles.itemContainer}>
      
      <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreean", {id:task.id})}
      >
      <Text style={styles.itemTitle}>{task.title}</Text>
      <Text style={styles.itemTitle}>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: "#d4edda", borderRadius: 8, padding: 7,border:10, }}
        onPress={() => handleDelete(task.id)}        
        >
        <Text style={{color:"green"}}>Delete</Text>

      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#007BAF",
         padding: 15,
         marginLeft: 25,
         marginRight: 25,
         marginTop: 6,
         marginVertical: 9,
         marginBottom: 10,
         borderRadius: 8,
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",


        
    },
    itemTitle: {
        color: "#FFFFFF"
    }

})

export default TaskItem