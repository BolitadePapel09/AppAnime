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
        const anime = [];
        respuesta.data.map(({ mal_id, title, type, source, episodes, status, duration, score, rating, images, trailer, synopsis, genres, studios, year }) => {
          anime.push({
            mal_id: mal_id,
            title: title,
            type: type,
            source: source,
            episodes: episodes,
            status: status,
            duration: duration,
            score: score,
            rating: rating,
            images: images,
            trailer: trailer,
            synopsis: synopsis,
            genres: genres,
            studios: studios,
            year: year
          });
        });
        setContenido(anime);
      });
  }, []);

  return (
  <ScrollView contentContainerStyle={styles.container}>
    <StatusBar style="auto" />

    <TouchableHighlight onPress={() => router.navigate('/login')}>
      <Text>Login</Text>
    </TouchableHighlight>

    <TouchableHighlight 
        onPress={() => router.push('/manga')}
      >
        <Text>
          Manga
        </Text>
    </TouchableHighlight>
    

    {contenido.map((anime) => (
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

