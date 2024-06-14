import { Text, Modal, TouchableOpacity, FlatList } from 'react-native';

import React from 'react';
import { useTranslation } from 'react-i18next';
import theme from '@/theme';
import { View } from 'react-native-animatable';
import { useGlobalContext } from '@/context/Global/GlobalProvider';

const LanguageListModal = ({ isVisible, setIsVisible }) => {
  const { language, changeLanguage, languageList } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <Modal
      transparent={true}
      animationType='slide'
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
    >
      <View className='absolute h-full w-full bg-black opacity-70' />
      <View className='z-10 h-full w-full justify-center items-center '>
        <FlatList
          className='m-auto rounded-3xl w-[80%]'
          contentContainerStyle={{
            backgroundColor: theme.colors.tertiary,
            borderRadius: 20,
            shadowColor: '#6f6f5f',
            shadowRadius: 2,
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.7,
            padding: 20,
            maxWidth: 350,
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // ListHeaderComponent={
          //   <View
          //     className={` border-gray-300 min-w-full mb-5 px-6 ${textDirection}`}
          //   >
          //     <Text className={` text-lg text-primary font-psemibold`}>
          //       {t('chooseLanguage')}
          //     </Text>
          //   </View>
          // }
          keyExtractor={(item) => item.code}
          data={languageList}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              className={`${
                item.code === language
                  ? 'rounded-md bg-primary shadow-sm shadow-black-100'
                  : ''
              } py-2 min-w-[100%]`}
              onPress={() => {
                changeLanguage(item.code);
                setIsVisible(false);
              }}
            >
              <Text className='text-white text-center font-pbold text-lg'>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

// import React, { useState } from 'react';
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

// const LanguageListModal = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType='slide'
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

export default LanguageListModal;
