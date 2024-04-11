const url ="https://img.omdbapi.com/?apikey=5e868149&=titanic";


const getmovie=async()=>{
    let response= await fetch(url);
  let data= await response.json();
  console.log(data);
};