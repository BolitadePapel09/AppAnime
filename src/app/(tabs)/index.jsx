import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Anime from '../../components/Anime.jsx';
import { Col, Row, Grid } from "react-native-easy-grid";
import {EstilosGeneral} from '../../../assets/styles.js';

const index = () => {
  const [contenido, setContenido] = useState([]);
  const router = useRouter();

  useEffect(() => {

      fetch('https://api.jikan.moe/v4/anime')
        .then(respuesta => respuesta.json())
        .then(respuesta => {

          console.log("Respuesta API:", respuesta);

          if (!respuesta.data) {
            console.log("La API no devolvió datos");
            return;
          }

          const anime = [];

          respuesta.data.map((item) => {

            anime.push({

              mal_id: item.mal_id,
              title: item.title,
              type: item.type,
              source: item.source,
              episodes: item.episodes,
              status: item.status,
              duration: item.duration,
              score: item.score,
              rating: item.rating,
              images: item.images,
              trailer: item.trailer,
              synopsis: item.synopsis,
              genres: item.genres,
              studios: item.studios,
              year: item.year

            });

          });

          setContenido(anime);

        })

        .catch(error => {
          console.log("Error consultando API:", error);
        });

  }, []);

  return (
  <ScrollView contentContainerStyle={styles.container}>
    <StatusBar style="auto" />

   

    
    

    {contenido?.map((anime) => (
  <Pressable
    key={anime.mal_id}
    onPress={() => router.push({
    pathname: "/detalle",
    params: {
        anime: JSON.stringify(anime)
    }
    })}
  >

    <View style={styles.tarjeta}>

    <Image
        source={{ uri: anime.images.jpg.image_url }}
        style={styles.imagen}
    />

    <View style={styles.info}>

        <Text style={styles.titulo}>
            {anime.title}
        </Text>

        <Text style={styles.texto}>
            {anime.score}
        </Text>

        <Text style={styles.texto}>
            {anime.type}
        </Text>

        <Text style={styles.texto}>
            Episodios: {anime.episodes}
        </Text>

        <Text style={styles.texto}>
            {anime.year}
        </Text>

    </View>

</View>

  </Pressable>
))}

  </ScrollView>
);

};



export default index;

const styles = StyleSheet.create({
  tarjeta: {
    width: "95%",
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 10,
    marginVertical: 8,
    elevation: 5,
},

imagen: {
    width: 110,
    height: 150,
    borderRadius: 10,
},

info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "space-around",
},

titulo: {
    fontSize: 18,
    fontWeight: "bold",
},

texto: {
    fontSize: 14,
    color: "#555",
},

  
});

