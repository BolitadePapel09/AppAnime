
import { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import { useRouter } from 'expo-router';


export default function Manga(){

  const [mangas, setMangas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {

    const cargarMangas = async()=>{

      try{

        const respuesta = await fetch(
          "https://api.jikan.moe/v4/top/manga"
        );


        const datos = await respuesta.json();


        if(datos.data){

          setMangas(datos.data);

        }else{

          throw new Error("No llegaron datos de mangas");

        }


      }catch(e){

        console.log("Error mangas:", e);

        setError(
          "No se pudieron cargar los mangas"
        );


      }finally{

        setCargando(false);

      }

    };


    cargarMangas();


  },[]);



  if(cargando){

    return(

      <View style={styles.centro}>

        <ActivityIndicator 
          size="large"
        />

        <Text>
          Cargando mangas...
        </Text>

      </View>

    )

  }



  if(error){

    return(

      <View style={styles.centro}>

        <Text style={styles.error}>
          {error}
        </Text>

      </View>

    )

  }



  return(

  <ScrollView>

    <Text style={styles.titulo}>
      Mangas populares
    </Text>


    <View style={styles.contenedor}>

      {
        mangas.map((manga)=>(

          <View
            key={manga.mal_id}
            style={styles.tarjeta}
          >

            <Image
              source={{
                uri:manga.images.jpg.image_url
              }}
              style={styles.imagen}
            />


            <Text
              style={styles.nombre}
              numberOfLines={2}
            >
              {manga.title}
            </Text>


            <Text>
              ⭐ {manga.score ?? "N/A"}
            </Text>


          </View>

        ))
      }

    </View>

  </ScrollView>

)

}




const styles = StyleSheet.create({

contenedor:{

  flexDirection:"row",
  flexWrap:"wrap",
  justifyContent:"center",
  paddingBottom:20

},

  centro:{

    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },


  titulo:{

    fontSize:26,
    fontWeight:"bold",
    margin:20,
    textAlign:"center"   

  },


 tarjeta:{

  width:"23%",
  margin:"1%",
  padding:8,
  backgroundColor:"#fff",
  borderRadius:10,
  elevation:5,
  alignItems:"center"

},


imagen:{

  width:90,
  height:130,
  borderRadius:8

},


nombre:{

  fontSize:13,
  fontWeight:"bold",
  textAlign:"center",
  marginTop:8

},


  error:{

    color:"red",
    fontSize:18

  }


});