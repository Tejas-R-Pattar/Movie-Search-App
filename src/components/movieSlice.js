import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const API_KEY='53dcc011'
const API_URL='http://www.omdbapi.com/'

export const searchMovies= createAsyncThunk(
    'movies/searchMovies',
    async (query)=>{
        console.log("Here")
        const response = await axios.get(API_URL,{
            params:{
                apikey:API_KEY,
                s:query,
            }
        });
        console.log(response)
        return response.data.Search;
        

    }
)



const movieSlice = createSlice({
    name : 'movies',
    initialState:{
        searchResults:[],
        status:'idle',
        error:null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(searchMovies.pending,(state)=>{
            state.status="loading";
        })
        .addCase(searchMovies.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.searchResults=action.payload;
        })
        .addCase(searchMovies.rejected,(state,action)=>{
            state.status="Error";
            state.error=action.error.message;
        })
    }
});


export default movieSlice.reducer