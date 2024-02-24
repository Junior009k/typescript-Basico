interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details
}

interface Details{
    author:string;
    year:number;
}


const audioPlayer:AudioPlayer = {
    audioVolume:90,
    songDuration:36, 
    song:'Mess', 
    details:{
        author:'Ed Sheeran', 
        year:2015
    }
}

//const {song,details:{author}}=audioPlayer
//const {details}=author
//console.log(`${song}`)
//console.log(`${author}`)

const dbz: string[]= ['Goku', 'Trunk', 'Vegeta'];
const [, Trunk='Not Found', ]=dbz
//const Trunk=dbz[2] || 'no hay personaje'

console.log('Personaje 2:',Trunk)