import AsyncStorage from "@react-native-async-storage/async-storage";

export const registrarUsuario = async (usuario) => {

    try {

        await AsyncStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );

        return true;

    } catch (error) {

        console.log(error);
        return false;

    }

}

export const obtenerUsuario = async () => {

    try {

        const datos = await AsyncStorage.getItem("usuario");

        if(datos){
            return JSON.parse(datos);
        }

        return null;

    } catch (error) {

        console.log(error);
        return null;

    }

}