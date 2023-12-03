import React from "react";
import Search from "./search";
import Card2 from './card2';
import { useState,useEffect } from "react";
export default function Products(props) {
  const jsonData=props.data;
    return (
      <>




      
        <Search />
        <div className="flex flex-wrap">
          {jsonData ? (
            jsonData.map((item) => (
              <div key={item.id} className="flex justify-center items-center flex-col">
                
                <Card2 data={item} className="flex-shrink-0" />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
    );
    }