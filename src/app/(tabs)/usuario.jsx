import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { 
  useState,
  useEffect
} from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

console.log("Cargando usuario.jsx");

export default function Usuario() {
  const router = useRouter();
 const [datosUsuario, setDatosUsuario] = useState(null);

useEffect(() => {

  console.log("ENTRANDO A PERFIL");

  cargarUsuario();

}, []);

 const cargarUsuario = async () => {

      try {

        const usuarioGuardado = await AsyncStorage.getItem("usuario");

        console.log("DATOS DESDE STORAGE:", usuarioGuardado);


        if(usuarioGuardado !== null){

          const datos = JSON.parse(usuarioGuardado);

          console.log("USUARIO CONVERTIDO:", datos);

          setDatosUsuario(datos);

        }else{

          console.log("NO EXISTE USUARIO EN STORAGE");

        }


      } catch(error){

        console.log("ERROR STORAGE:", error);

      }

  };


  const cerrarSesion = async () => {

    await AsyncStorage.removeItem("usuario");

    alert("Sesión cerrada");

    router.replace("/login");

  };

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtwM7gjfvPiXzJTeWphHSvpF5R0JbYNRsWINhUxj0B4Cudzh5Fqr9W3g&s=10",
        }}
        style={styles.imagen}
      />

      <Text style={styles.nombre}>
        {datosUsuario?.usuario}
      </Text>

      <Text style={styles.descripcion}>
        Amante del anime y manga
      </Text>
      <Text>
        Estado: {datosUsuario ? "Usuario cargado" : "Cargando usuario"}
      </Text>

        <View style={styles.card}>
          <Text style={styles.titulo}>
            Nombre Completo
          </Text>

          <Text style={styles.texto}>
            {datosUsuario?.nombre} {datosUsuario?.apellidos}
          </Text>
        </View>

      <View style={styles.card}>
          <Text style={styles.titulo}>
            Correo
          </Text>

          <Text style={styles.texto}>
            {datosUsuario?.correo}
          </Text>
        </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>
          Fecha de nacimiento
        </Text>

        <Text style={styles.texto}>
          {datosUsuario?.fechaNacimiento}
        </Text>
      </View>

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>
         Mis favoritos
        </Text>
      </TouchableOpacity>

      

      <TouchableOpacity
        style={[styles.boton, { backgroundColor: "#e53935" }]}
        onPress={cerrarSesion}
      >
        <Text style={styles.textoBoton}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingTop: 40,
  },

  imagen: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
  },

  descripcion: {
    color: "gray",
    marginBottom: 30,
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 16,
  },

  texto: {
    marginTop: 5,
    color: "#555",
  },

  boton: {
    width: "90%",
    backgroundColor: "#1976d2",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },

  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});