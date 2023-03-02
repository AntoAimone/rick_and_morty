import style from "./Detail.module";
import{useState, useEffect} from "react";
import{useParams} from "react-router-dom";
import{Link} from "react-router-dom"

const Detail = ()=>{
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response)=> response.json())
            .then((char)=>{
                if(char.name){
                    setCharacter(char);
                }else {
                    alert("No hay personajes con ese ID");
                }
            })
            .catch((err)=> {
                alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    },[detailId])

    return(
        <div className={style.container}>
            <h2>spy Detail</h2>
        </div>
    )
}
export default Detail;