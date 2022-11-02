import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"CMBC Radio Progreso 90.3 FM",
            artist: "Radio Progreso",
            cover: "https://static2.mytuner.mobi/media/tvos_radios/JYy3a2sgTL.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://icecast.teveo.cu/XjfW7qWN",
            active: true,
        },
        {
            name:"Radio Havana",
            artist: "Havana",
            cover: "https://static2.mytuner.mobi/media/tvos_radios/wBFBCeE72A.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://icecast.teveo.cu/McW3fLhs",
            active: false,
        },
        {
            name:"CMBD Radio Reloj 950 AM",
            artist: "AM",
            cover: "https://static2.mytuner.mobi/media/tvos_radios/B7dTgwMGWB.png",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://icecast.teveo.cu/b3jbfThq",
            active: false,
        },
        {
            name:"Radio Martí",
            artist: "Radio Martí",
            cover: "https://static2.mytuner.mobi/media/tvos_radios/8easq9waeqpa.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://n05.radiojar.com/3ds9yqpgq3quv?rj-ttl=5&rj-tok=AAABhDkQKzIA-Hz1HKTWg2CQzw",
            active: false,
        },
        {
            name:"CMBA Radio Rebelde FM",
            artist: "Radio Rebelde",
            cover: "https://static2.mytuner.mobi/media/tvos_radios/KmEE8FKS6j.png",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://icecast.teveo.cu/zrXXWK9F",
            active: false,
        },
        {
            name:"CubanFlow radio",
            artist: "CubanFlow radio",
            cover: "https://static2.mytuner.mobi/media/tvos_radios/eShhwvMESh.png",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "http://nap.casthost.net:9194/stream",
            active: false,
        },
        {
            name:"Salsa4te",
            artist: "Salsa",
            cover: "https://static2.mytuner.mobi/media/tvos_radios/vryp5max4tzr.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://radiomusic.newradio.it/salsa4te?ext=.mp3",
            active: false,
        },
        {
            name:"Radio Enciclopedia",
            artist: "Radio Enciclopedia",
            cover: "https://dab-radios.org/admin_panel_radiocuba/uploads/radios/radio_50443_Radio%20Enciclopedia.png",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://icecast.teveo.cu/9Rnrbjzq",
            active: false,
        },
        {
            name:"La Reina Radial del Centro",
            artist: "La Reina Radial",
            cover: "https://dab-radios.org/admin_panel_radiocuba/uploads/radios/radio_77923_CMHW%20La%20Reina%20Radial%20del%20Centro.png",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://icecast.teveo.cu/TsxMM94R",
            active: false,
        },
        
        {
            name:"CMBV Radio Taino",
            artist: "Radio Taino",
            cover: "https://dab-radios.org/admin_panel_radiocuba/uploads/radios/radio_49144_Radio%20Taino.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://icecast.teveo.cu/3MCwWg3V",
            active: false,
        },
    ];
}

export default chillHop;

