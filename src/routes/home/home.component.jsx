import Directory from "../../components/directory/directory.component";
const Home = () => {
  const categories = [{
    id:1,
    title:'Hats',
    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id:2,
    title:'Jackets',
    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id:3,
    title:'Sneakers',
    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id:4,
    title:'Womens',
    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id:5,
    title:'Mens',
    imageUrl:'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?cs=srgb&dl=pexels-elle-hughes-1680172.jpg&fm=jpg&_gl=1*yfghqk*_ga*MjE0NTUzODEzNC4xNjY3ODE3MTk4*_ga_8JE65Q40S6*MTY2NzgxNzIwMi4xLjEuMTY2NzgxNzI3Mi4wLjAuMA..',
  }

]
  return (
  <Directory categories={ categories}/> 
  );
}

export default Home;
