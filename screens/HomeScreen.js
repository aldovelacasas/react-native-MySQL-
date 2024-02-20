import { View, Text, } from 'react-native'  //rnfe
import React, {useEffect, useState} from 'react'
import {getTasks} from "../api"

import TaskList from '../components/TaskList'
import Layout from '../components/Layout'

const HomeScreen = () => {

 const [tasks, setTasks] = useState([])


    const loadTaskScreen = async() => {
       const data = await getTasks()
       setTasks(data)
    }


    useEffect(() => {
        loadTaskScreen()



    }, [])




  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  )
}

export default HomeScreen