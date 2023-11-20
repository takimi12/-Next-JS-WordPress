import { useEffect, useState } from 'react'
import { Results } from './Results'
import {Pagination }from './Pagination';

export const PropertySearch = () => {
        const [properties, setProperties] = useState([]);
        const [totalResults, setTotalResults] = useState(0);
        const pageSize = 3;

           useEffect(() => {
                const search = async () => {
                    const response = await fetch('/api/search');
                    const data = await response.json();

                    console.log("search data", data);
                    setProperties(data.properties);
                    setTotalResults(data.total);
                };
                search();
             }, []);
             return (
               <>
                <Results  properties={properties}/>
                <Pagination  totalPages={Math.ceil(totalResults / pageSize)} />
                </>
                )
}