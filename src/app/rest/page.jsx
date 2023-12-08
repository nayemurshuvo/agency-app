'use client'

import React, { useEffect, useState } from "react";

const page = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch('https://dummyjson.com/products');
      let data = await res.json();
      setData(data['products']);

  
    })();
  }, []);

  return (
      <div>
        {
          data.map((item,index)=>{
            return (
              <div key={index}>
                <h1>{item['title']}</h1>
              </div>
            )
          })
        }
  
    </div>
    );

  
};

export default page;
