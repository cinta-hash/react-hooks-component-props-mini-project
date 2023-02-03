import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <main>
            {posts.map((item) => 
               <Article key={item.id} name={item.name} preview={item.preview}/>
               )}
        </main>
    )
};
export default ArticleList;