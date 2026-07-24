import { useRouter } from 'expo-router';
import {View,Text,Image,TouchableHighlight,StyleSheet, Pressable} from 'react-native';

const Anime = ({ datos }) => {

  const router = useRouter();
  const cambioVista = () =>{
    router.push({
      Pathname:'/InfoAnime',
      params: {
        id:datos.mal_id
      }
    })
  }
  return (
    <Pressable style={styles.contenedor} onPress={()=>{cambioVista()}}>
      <Image style={styles.img} source={{ uri: datos.images.webp.large_image_url }}/>
        <Text>{datos.title}</Text>
        <Text>{datos.type}</Text>
        <Text>{datos.score}</Text>
    </Pressable>
  );
}

export default Anime;
const styles = StyleSheet.create({

  contenedor: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#64C3E3'
  },

  img: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderColor: '#0537eb',
    borderWidth: 1
  }

});