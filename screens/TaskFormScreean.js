import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { saveTask, updateTask, updatingTask } from '../api'

const TaskFormScreean = ({navigation, route}) => {

  const [task, setTask] = useState({
    title: "",
    description: ""
  })
   const [editing, setEditing] = useState(false)

   
   const handleChange = (name, value) => setTask({...task, [name]: value})

   const hadleSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(task);
      } else {
        await updateTask(route.params.id, task);
      }
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error("Error during submission:", error);
    }
  }
  

   useEffect( () => {
    if ( route.params && route.params.id){
      navigation.setOptions({headerTitle: "updating a task"});
      setEditing(true);
      ( async () => {
       const task =  await updatingTask(route.params.id)
       setTask({title: task.title, description: task.description})
      } )();
    }
   }, [])
   


  return (
    <Layout>
     
     <TextInput 
     style={styles.input}
     placeholder="Write Title"
     placeholderTextColor="#546574"
     onChangeText={(text) =>handleChange("title", text)}
     value={task.title}
     
     

/>
     <TextInput 
     style={styles.input}
     placeholder="Write Description"
     placeholderTextColor="#546574"
     onChangeText={(text) =>handleChange("description", text)}
     value={task.description}

     />
      
      {
        !editing ? (
           <TouchableOpacity style={styles.buttonSave} onPress={hadleSubmit} >
            <Text style={styles.buttonText}>Save Task</Text>
           </TouchableOpacity>
 
        ): (
           <TouchableOpacity style={styles.buttonUpdate} onPress={hadleSubmit} >
            <Text style={styles.buttonText}>Update Task</Text>
           </TouchableOpacity>
        )
      }

    </Layout>
  )
}

const styles = StyleSheet.create({
  input:{
    width: "90%",
    marginBottom: 15,
    fontSize: 20,
    borderWidth: 5,
    borderColor: "#10ac84",
    height: 40,
    color: "#FFFFFF",
    textAlign: "center",
    padding: 10,
    borderRadius: 12,
    

  },
  buttonSave:{
    paddingTop: 10,
    paddingBottom: 15,
   borderRadius: 12,
   backgroundColor : "#10ac84",
   width: "90%",
   



  },
  buttonText:{
    textAlign: "center",
    color: "white",
  },

  buttonUpdate:{
    padding: 10,
    paddingBottom: 15,
   borderRadius: 12,
   marginBottom: 10,
   backgroundColor : "#e58e26",
   width: "90%",
  }
})

export default TaskFormScreean