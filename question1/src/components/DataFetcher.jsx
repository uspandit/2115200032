import React, { useState, useEffect } from 'react';

function DataFetcher({ url}) {
    const [data, setData] = useState(    {
        "productId":1,
        "productName": "mobile I",
        "price": 2236,
        "rating": 4.7,
        "discount": 63,
        "availability": "yes"
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        
        };

        fetchData();
    }, [url]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='flex flex-col items-center justify-center m-2 bg-blue-600 text-white rounded-lg p-6'>
            <h1 className='capitalize text-[30px] font-bold underline'>{data.productName}</h1>
            
            <h2 className='flex '>
                <div className='mx-2'>
                    <strong>Price 
                    <i className="fa-solid fa-indian-rupee-sign mx-2"></i>
                    :
                    </strong> 
                </div>
                <span  className='mx-2'>{data.price}</span>
                </h2>
            <h2 className='flex mx-2'>
                <div>
                    <strong>Rating
                    <i className="fa-regular fa-star mx-2"></i>
                        :

                    </strong>
                </div>
                <span  className='mx-2'>

                {data.rating}
                </span>
                </h2>
            
            <h2 className=''>
                <div className='flex mx-2'>
                 <strong>Discount Price
                 <i className="fa-solid fa-tag mx-2"></i>
                    :</strong>
                   <span className='mx-2'> {data.discount}</span>
                 
                </div>
            </h2>
            <h2 className='mx-2'><strong>Availability :
                </strong>
                <span  className='mx-2'>{data.availability}</span>
                </h2>
        </div>
    );
}

export default DataFetcher;