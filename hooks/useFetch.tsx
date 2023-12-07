import {useState, useEffect} from 'react';
import axios from 'axios'
import {RAPID_API_KEY} from '@env';

interface ApiError {
    // Define the structure of your API error
    code: number;
    message: string;
    // Other properties...
  }
const useFetch = (endpoint: string, query: object) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': "fed6047bb9msh6fc4c274f0776c1p1d3dafjsn6a7f07f41298",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };
      const fetchData = async () =>{
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error: ApiError | any) {
            setError(error);
            console.log('there is an error');
        } finally {
            setIsLoading(false);
        }
      }
      useEffect (() => {
        fetchData();
      }, [])

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }
      
    return {data, isLoading, error, refetch}
}

export default useFetch