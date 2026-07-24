import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

export default function Registro() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Crear cuenta</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.input}
      />
       <TextInput
        placeholder="Apellidos"
        style={styles.input}
      />
       <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
      />
       <TextInput
        placeholder="Fecha de nacimiento"
        style={styles.input}
      />

      <TextInput
        placeholder="Correo"
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>
          Registrarse
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.regresar}>
          Ya tengo una cuenta
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    padding:20
  },

  titulo:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:30
  },

  input:{
    width:"100%",
    height:50,
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:10,
    paddingHorizontal:15,
    marginBottom:15
  },

  boton:{
    width:"100%",
    height:50,
    backgroundColor:"#0066cc",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },

  textoBoton:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:18
  },

  regresar:{
    marginTop:20,
    color:"#0066cc"
  }
});

