import { registrarUsuario } from "../services/auth";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { useState } from "react";

import { useRouter } from "expo-router";

export default function Registro() {

  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [usuario, setUsuario] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

 const registrar = async () => {
console.log("Nombre:", nombre);
  if (
    nombre === "" ||
    apellidos === "" ||
    usuario === "" ||
    fechaNacimiento === "" ||
    correo === "" ||
    password === ""
  ) {
    alert("Debes llenar todos los campos.");
    return;
  }

  const nuevoUsuario = {
    nombre,
    apellidos,
    usuario,
    fechaNacimiento,
    correo,
    password,
  };

  const guardado = await registrarUsuario(nuevoUsuario);

  if (guardado) {
    alert("Usuario registrado correctamente");
    router.back();
  } else {
    alert("Ocurrió un error al registrar");
  }
};

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Crear cuenta</Text>

        <TextInput
    placeholder="Nombre"
    value={nombre}
    onChangeText={setNombre}
    style={styles.input}
/>
       <TextInput
    placeholder="Apellidos"
    value={apellidos}
    onChangeText={setApellidos}
    style={styles.input}
/>
       <TextInput
    placeholder="Nombre de usuario"
    value={usuario}
    onChangeText={setUsuario}
    style={styles.input}
/>
       <TextInput
    placeholder="Fecha de nacimiento"
    value={fechaNacimiento}
    onChangeText={setFechaNacimiento}
    style={styles.input}
/>

      <TextInput
    placeholder="Correo"
    value={correo}
    onChangeText={setCorreo}
    style={styles.input}
/>

      <TextInput
    placeholder="Contraseña"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
    style={styles.input}
/>

    <TouchableOpacity
      style={styles.boton}
      onPress={registrar}
    >
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

