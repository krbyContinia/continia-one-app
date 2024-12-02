import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useTheme } from '../../hooks/useTheme'

const more = () => {
  const { toggleTheme } = useTheme()

  return (
    <View style={{ margin: 16 }}>
      <Text variant='headlineSmall' style={{ marginVertical: 16 }}>
        more
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default more
