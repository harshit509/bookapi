const books=[
    {
isbn:"12345one",
title:"getting started with mern stack",
authors:[1,2,3],
language:"em",
pubdate :"2021-07-07",
noofpages:224,
category:["programming","language","fiction"],
publication:1
},
{
    isbn:"12345two",
    title:"getting started with python",
    authors:[1,2,3],
    language:"em",
    pubdate :"2021-07-07",
    noofpages:224,
    category:["programming","drawing","fiction"],
    publication:1
    },
]

const authors=[
    {
    id:1,
    name:"harshit",
    book:["12345one"]
},
{
    id:2,
    name:"pawan",
    book:["12345one","12345two"]
},
]

const publications=[
    {    
        id:1,
        name:"harsh",
        book:["12345one"]
    
},
{    
    id:2,
    name:"naman",
    book:["12345one","12345two"]

}
]
module.exports={books,authors,publications};