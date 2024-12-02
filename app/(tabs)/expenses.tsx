import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useTheme } from '../../hooks/useTheme'

const expenses = () => {
  const { toggleTheme } = useTheme()

  return (
    <View style={{ margin: 16 }}>
      <Text variant='headlineSmall' style={{ marginVertical: 16 }}>
        expenses
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default expenses
