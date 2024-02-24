import { View, Text, } from 'react-native'  //rnfe
import React from 'react'

import TaskList from '../components/TaskList'
import Layout from '../components/Layout'

const HomeScreen = () => (

    <Layout>
      <TaskList/>
    </Layout>
  
)

export default HomeScreen