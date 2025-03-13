import { View } from 'react-native'
import { styles } from './styles'

import { Header } from '../../Components/Header'
import { Content } from '../../Components/Content'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  )
}