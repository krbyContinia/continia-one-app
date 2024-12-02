import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { WebView } from 'react-native-webview'
import { useTheme } from '../../hooks/useTheme'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const approvals = () => {
  const { toggleTheme } = useTheme()

  return (
    <View style={styles.safeArea}>
      <WebView
        source={{ uri: 'https://6a83-93-176-69-234.ngrok-free.app/' }}
        decelerationRate={0.998}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
})

export default approvals
