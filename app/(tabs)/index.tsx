import { View } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const LeftContent = (props: any) => <Avatar.Icon {...props} icon='folder' />

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        margin: 16,
      }}
    >
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur odit eveniet
        inventore magnam officia quia nemo porro? Dolore sapiente quos illo distinctio nisi
        incidunt? Eaque officiis iusto exercitationem natus?
      </Text>
    </View>
  )
}
