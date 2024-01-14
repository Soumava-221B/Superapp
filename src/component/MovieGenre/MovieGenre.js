import { useState } from "react";
import action from "../../assets/images/action.png";
import drama from "../../assets/images/drama.png";
import fantasy from "../../assets/images/fantasy.png"
import fiction from "../../assets/images/fiction.png";
import horror from "../../assets/images/horror.png";
import music from "../../assets/images/music.png";
import romance from "../../assets/images/romance.png";
import thriller from "../../assets/images/thriller.png";
import western from "../../assets/images/western.png";

import styles from "./MovieGenre.module.css";

const DEFAULT_GENRES = [
    {
        id: "Action",
        color: "#FF5209",
        image: (<img style={{width: "160px", height: "120px" }} src={action}/>),
    },
    {
        id: "Drama",
        color: "#D7A4FF",
        image: (<img style={{width: "160px", height: "120px" }} src={drama}/>),
    },
    {
        id: "Fantasy",
        color: "#FF4ADE",
        image: (<img style={{width: "160px", height: "120px" }} src={fantasy}/>),
    },
    {
        id: "Fiction",
        color: "#6CD061",
        image: (<img style={{width: "160px", height: "120px" }} src={fiction}/>),
    },
    {
        id: "Horror",
        color: "#7358FF",
        image: (<img style={{width: "160px", height: "120px" }} src={horror}/>),
    },
    {
        id: "Music",
        color: "#E61E32",
        image: (<img style={{width: "160px", height: "120px" }} src={music}/>),
    },
    {
        id: "Romance",
        color: "#11B800",
        image: (<img style={{width: "160px", height: "120px" }} src={romance}/>),
    },
    {
        id: "Thriller",
        color: "#84C2FF",
        image: (<img style={{width: "160px", height: "120px" }} src={thriller}/>),
    },
    {
        id: "Western",
        color: "#912500",
        image: (<img style={{width: "160px", height: "120px" }} src={western}/>),
    },
    
];

const Category = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <p className={styles.heading}>Super app</p>
                
            </div>
        </div>
    )
}