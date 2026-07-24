import {View, Text} from 'react-native'
import { useRouter, useLocalSearchParams } from "expo-router";

const InfoAnime = () => {
    const router = useRouter();
    const {id} = useLocalSearchParams();
  return (
    <View>
        <Text>{id}</Text>
    </View>
  )
}

export default InfoAnime;