import { useEffect, useState } from 'react'
import { Results } from './Results'
import {Pagination }from './Pagination';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import {Filters} from './Filters/Filters';

export const PropertySearch = () => {
        const [properties, setProperties] = useState([]);
        const [totalResults, setTotalResults] = useState(0);
        const pageSize = 3;
        const router = useRouter();


        const search = async () => {
          const {page} = queryString.parse(window.location.search);
          const response = await fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify({
              page: parseInt(page || "1"),
            }),
          });
          const data = await response.json();

          console.log("search data", data);
          setProperties(data.properties);
          setTotalResults(data.total);
      };

          const handlePageClick = async (pageNumber) => {
          await  router.push(`${router.query.slug.join('/')}?page=${pageNumber}`, null,{
              shallow: true,
            })
              search();
          };

          useEffect(() => {
          search();
          }, []);

          const handleSearch = ({petFriendly, hasParking, minPrice, maxPrice}) => {
          
          
          }


             return (
               <>
                <Filters onSearch={handleSearch} />
                <Results  properties={properties}/>
                <Pagination 
                onPageClick={handlePageClick}
                totalPages={Math.ceil(totalResults / pageSize)} />
                </>
                )
}