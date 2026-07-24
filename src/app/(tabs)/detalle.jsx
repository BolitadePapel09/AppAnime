import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { VideoView, useVideoPlayer } from 'expo-video';
import videoAnime from '../../../assets/videos/anime.mp4';

import { traducir } from "../../services/traduccion";
import { useState, useEffect } from "react";
import { Pressable } from "react-native";


export default function Detalle(){

  const { anime } = useLocalSearchParams();

  const [idioma, setIdioma] = useState("en");
  const [sinopsis, setSinopsis] = useState("");


  let datosAnime = null;


  if(anime){

    datosAnime = JSON.parse(anime);

  }


  useEffect(()=>{

    if(datosAnime){

      setSinopsis(datosAnime.synopsis);

    }

  },[anime]);



  if(!anime){

    return(
      <View>
        <Text>Cargando información...</Text>
      </View>
    )

  }


  const cambiarIdioma = async () => {

  if(idioma === "en"){

    if(!datosAnime.synopsis){

      setSinopsis("No hay sinopsis disponible");
      setIdioma("es");
      return;

    }


  const texto = await traducir(datosAnime.synopsis);


    if(
      !texto ||
      texto === datosAnime.synopsis ||
      texto.includes("MYMEMORY") ||
      texto.includes("WARNING")
    ){

      setSinopsis(
        "No se encontró una traducción disponible"
      );

    }else{

      if(texto){

  setSinopsis(texto);

}else{

  setSinopsis(
    "No se encontró una traducción disponible"
  );

}

    }


    setIdioma("es");


  }else{


    setSinopsis(datosAnime.synopsis);

    setIdioma("en");


  }

};

  const player = useVideoPlayer(videoAnime, (video)=>{

    video.loop = true;

  });
  


  return(

    <ScrollView style={styles.container}>

      <VideoView
        player={player}
        style={styles.video}
        allowsFullscreen
        allowsPictureInPicture
      />


      <Image
        source={{
          uri: datosAnime.images.jpg.image_url
        }}
        style={styles.imagen}
      />


      <Text style={styles.titulo}>
        {datosAnime.title}
      </Text>

      <Pressable
          style={styles.idioma}
          onPress={cambiarIdioma}
        >

        <Text style={styles.textoIdioma}>
          {idioma === "en" ? "ES" : "EN"}
        </Text>

      </Pressable>


      <Text>
        Tipo: {datosAnime.type}
      </Text>


      <Text>
        Episodios: {datosAnime.episodes}
      </Text>


      <Text>
        Estado: {datosAnime.status}
      </Text>


      <Text>
        Puntuación: {datosAnime.score}
      </Text>


      <Text style={styles.subtitulo}>
        Sinopsis
      </Text>


      <Text>
        {sinopsis}
      </Text>


    </ScrollView>

  )

}


const styles = StyleSheet.create({

container:{
 padding:20
},

imagen:{
 width:"100%",
 height:400
},

titulo:{
 fontSize:25,
 fontWeight:"bold",
 marginVertical:15
},

subtitulo:{
 fontSize:20,
 fontWeight:"bold",
 marginTop:20
},
video:{
  width:"100%",
  height:250,
  marginBottom:20
},
idioma:{
  backgroundColor:"#e63946",
  padding:10,
  borderRadius:10,
  alignSelf:"flex-end",
  marginBottom:15
},

textoIdioma:{
  color:"#fff",
  fontWeight:"bold"
},

});