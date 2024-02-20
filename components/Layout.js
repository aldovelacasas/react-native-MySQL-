// import { View, StyleSheet, Image } from 'react-native'
// import React from 'react'

// const Layout = ({children}) => {
//   return <View style={styles.container}>{children}
//   <Image
//         source={require('../assets/back.jpg')}  // Asegúrate de que la ruta sea correcta
//         style={{ width: '100%', height: '100%' }}
//         resizeMode="cover"
//       />
//       </View>
// }
// const styles = StyleSheet.create({
//     container: {
        
//     //    backgroundColor: "#87CEEB" ,
//     //    padding:20,
//        flex:1,
//        alignItems: "center",
        
//     },
//     backgroundImage: {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//       },
// })

// export default Layout






import { View, StyleSheet, Image, StatusBar } from 'react-native';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bac.jpg')}  // Asegúrate de que la ruta sea correcta
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <StatusBar backgroundColor="#222f3e"/>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Layout;
