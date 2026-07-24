import { 
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";


export default function Login(){

  const [usuario,setUsuario] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();



  const iniciarSesion = ()=>{

    console.log(usuario);
    console.log(password);

  };



  return(

    <View style={styles.container}>


      <Text style={styles.logo}>
        Mundo Otaku 
      </Text>


      <Text style={styles.subtitulo}>
        Encuentra todo sobre animes y mangas...
      </Text>



      <View style={styles.card}>


        <Text style={styles.titulo}>
          Iniciar sesión
        </Text>



        <TextInput

          style={styles.input}

          placeholder="Usuario o correo"

          placeholderTextColor="#999"

          value={usuario}

          onChangeText={setUsuario}

        />



        <TextInput

          style={styles.input}

          placeholder="Contraseña"

          placeholderTextColor="#999"

          secureTextEntry

          value={password}

          onChangeText={setPassword}

        />



        <Pressable

          style={styles.boton}

          onPress={iniciarSesion}

        >

          <Text style={styles.textoBoton}>
            Entrar
          </Text>


        </Pressable>



        <Pressable onPress={() => router.push("/registro")}>
          <Text style={styles.registro}>
            ¿No tienes cuenta?{" "}
            <Text style={styles.registroLink}>Registrarse</Text>
          </Text>
        </Pressable>


      </View>


    </View>

  )

}



const styles = StyleSheet.create({

  container:{

    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    padding:20

  },


  logo:{

    fontSize:40,
    fontWeight:"bold",
    color:"#e63946",
    marginBottom:10

  },


  subtitulo:{

    fontSize:18,
    color:"#666",
    marginBottom:30

  },


  card:{

    width:"90%",
    backgroundColor:"#fff",
    padding:25,
    borderRadius:20,
    elevation:6,
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:3
    },
    shadowOpacity:0.2,
    shadowRadius:5

  },


  titulo:{

    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
    color:"#333",
    marginBottom:25

  },


  input:{

    width:"100%",
    height:50,
    borderWidth:1,
    borderColor:"#ddd",
    borderRadius:12,
    paddingHorizontal:15,
    marginBottom:15,
    fontSize:16,
    backgroundColor:"#fafafa"

  },


  boton:{

    width:"100%",
    backgroundColor:"#e63946",
    height:50,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10

  },


  textoBoton:{

    color:"#fff",
    fontSize:18,
    fontWeight:"bold"

  },


  registro:{

    textAlign:"center",
    marginTop:20,
    color:"#777"

  },
  registroLink: {
  color: "#e63946",
  fontWeight: "bold",
},

});