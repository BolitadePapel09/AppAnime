const EstilosGenerales = {
  container: {
    backgroundColor:'rgb(35, 45, 51)',
    flexGrow: 2,
    padding: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom:25
  },
  controles:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:'100%',
    marginTop:1,
  },
  btnPrincipal:{
    width:65,
    height:65,
    borderRadius:32,
    backgroundColor:"#ffffff",
  },
  contenedorAlbum: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    borderWidth: 4,
    borderColor: '#26526e',
    backgroundColor: '#000',
    overflow: 'hidden'
  },
  contenedorVideo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderColor: '#73c20c',
    overflow: 'hidden'},
  video:{
    width:'100%',
      height: '100%'
    },
  img: {
    width: '100%',
    height: '100%'
  },
  mt5: {
    marginTop: 20
  },
  titulo:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold', 
  },
  artista:{
    fontSize:15,
    color:'#fff'
  },
  tiempo:{
  fontSize:15,
  color:'#ffffff',
  fontWeight:'bold',
  textAlign:'center',
},
};

const EstilosGrid = {

};



export { EstilosGenerales, EstilosGrid };