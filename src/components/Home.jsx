import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase";
import { setMovies } from '../Allslices/movieslice';
import { collection, getDocs } from "firebase/firestore";


export default function Home() {
  const userName = useSelector((state) => state.User.name);

  const dispatch = useDispatch();

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  const getdata = async () => {
    console.log("getddta");
    const querySnapshot = await getDocs(collection(db, "movies"));

    return querySnapshot;
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log("hello");
      const querySnapshot =  await getdata();

      querySnapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
  
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
  
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
  
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
  
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );


      console.log("helloo");
    };
  
    fetchData();
  }, [userName]);


  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  
  min-height: calc(100vh - 20px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;