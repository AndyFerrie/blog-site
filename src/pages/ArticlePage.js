import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
    const { articleId } = useParams();
    // ^^ can also be written as:
    // const params = useParams();
    // const articleId = params.articleId;

    const article = articles.find(article => article.name === articleId);
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map(paragraph => (
                <p>{paragraph}</p>
            ))}
        </>
    );
}

export default ArticlePage;