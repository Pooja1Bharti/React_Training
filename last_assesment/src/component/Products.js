import { useEffect, useState } from "react";
import axios from "axios";
import  Sidebar  from './Sidebar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/photos" 
  });
  
const App = () => {
    const [product, setProduct] = useState([]);
 
    useEffect(() => {
       client.get('?_limit=10').then((response) => {
        setProduct(response.data);
       });
    }, []);
 
    return (
        <div className="app">
            <Sidebar />
        <h1 align="center">Product Cart</h1>
        <Stack direction="row" spacing={5} justifyContent="right">
        <Button type='submit' variant="contained" color="success">Add Products</Button>
          </Stack>
        
        {product.map((post) => {
           return (
               <>
              <div className="post-card" key={post.id} align="center">
                 <h2 className="post-title">{post.title}</h2>
                 {/* <img src={post.url} alt="..." height={200} width={300}></img> */}
                 <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
           
            <ImageListItem key={post.id}>
          <img
            src={`${post.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${post.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={post.thumbnailUrl}
            loading="lazy"
          /><br/><br/>
          <Stack direction="row" spacing={5} justifyContent="center">
        <Button type='submit' variant="contained" color="success">Edit</Button>
        <Button type='submit' variant="contained" color="success">Delete</Button>
          </Stack>
        </ImageListItem>
      
    </ImageList>
    
              </div>
             
              </> 
           );
        })}
       
      </div>
    );
 };
 
 export default App;