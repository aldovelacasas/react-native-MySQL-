import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Layout from '../components/Layout'

const TaskFormScreean = () => {

  const [task, setTask] = useState({
    title: "",
    description: ""
  })

   const handleChange = (name, value) => setTask({...task, [name]: value})


  return (
    <Layout>
     
     <TextInput 
     style={styles.input}
     placeholder="Write Title"
     placeholderTextColor="#546574"
     onChangeText={(text) =>handleChange("title", text)}
     
     

/>
     <TextInput 
     style={styles.input}
     placeholder="Write Description"
     placeholderTextColor="#546574"
     onChangeText={(text) =>handleChange("description", text)}


     />


     <TouchableOpacity style={styles.buttonSave} disabled >
      <Text style={styles.buttonText}>Save Task</Text>
     </TouchableOpacity>
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
  }
})

export default TaskFormScreean