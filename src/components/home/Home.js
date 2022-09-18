import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Home(){
    const[product, setProduct] = useState("");
    const[items, setItems] = useState([]);

    const { type }= useParams();

    if(type){
        setProduct(type);
    }


    //useEffect(() => {
		//const requisicao = axios.get("http://...");

	//	requisicao.then(res => {
	//		setItems(res.data.items);
	//	});
	//}, [product]);


    return(
        <div>
            
        </div>
        
    );
};