import { FlatList, RefreshControl } from 'react-native'
import React, {useState, useEffect} from 'react'
import TaskItem from './TaskItem'
import {getTasks, deleteTask} from "../api"
import { useIsFocused } from '@react-navigation/native'

 const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const isFocused = useIsFocused()

  const loadTaskScreen = async() => {
     const data = await getTasks()
     setTasks(data)
  }


  useEffect(() => {
      loadTaskScreen()



  }, [isFocused]) //refresacr al momento y actualizar datos

  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTaskScreen()

  }


  const renderItem = ({item}) => {
    return <TaskItem task={item} handleDelete={handleDelete}/>
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTaskScreen()
    setRefreshing(false)
  })



  return (
    
    <FlatList
    style={{width: "100%"}}
data={tasks}
keyExtractor={(item) => item.id}
renderItem={renderItem}
refreshControl={
  <RefreshControl
  refreshing={refreshing}
  colors={["#78e08f"]}
  onRefresh={onRefresh}
  progressBackgroundColor="#0a3d62"
  />
}
/>
  )
}

export default TaskList;