export const traducir = async (texto) => {

  try {

    const respuesta = await fetch(
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=" 
      + encodeURIComponent(texto)
    );


    const datos = await respuesta.json();


    let traduccion = "";


    datos[0].forEach((parte)=>{

      traduccion += parte[0];

    });


    return traduccion;


  }catch(error){

    console.log(
      "Error traducción:",
      error
    );

    return null;

  }

};