
require("dotenv").config();


// const { response } = require("express");
const express= require("express");

const mongoose =require("mongoose");
// initializing
const shapeai=express();

// configration
shapeai.use(express.json());
// database
const database=require("./database/index");
// establish a connection to database
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true})
    .then(()=>console.log("connection establish"))
    .catch(()=>console.log("show me error"));

// now start with api
/*
// request -get
*/
shapeai.get("/",(reqest,response)=>{
return response.json({books:database.books});
})


// to  get a specific book
// request -get
shapeai.get("/is/:isbn",(req,res)=>{
    const getspecificbook=database.books.filter((book)=>
    book.isbn==req.params.isbn
    );
    if(getspecificbook.length==0){
        return res.json({error:`no book found according to isbn ${req.params.isbn}`});
    }
        return res.json({books:getspecificbook})
    });
    
    // to get book on the basis of category
// request -get
    shapeai.get("/book/:category",(req,res)=>{
        const getbookbasedoncategory=database.books.filter((book)=>
        book.category.includes(req.params.category)
        );
        if(getbookbasedoncategory===0){
            return res.json({error:`no book found based on category ${req.params.category}`})
        }
        return res.json({books:getbookbasedoncategory});
    })



// to get all the books based on author
// request -get
// shapeai.get("/book/:id",(req,res)=>{
//     const getbookbasedonauthor=database.books.filter((book)=>
//     book.author.includes(req.params.id)
//     );
//     if(getbookbasedonauthor===0){
//         return res.json({error:`no book found based on author${req.params.id}`})
//     }
//     return res.json({books:getbookbasedonauthor});
// })



// to get author
// request -get
shapeai.get("/authors",(req,res)=>{
    return res.json({author:database.authors})
})


// to get specific author
// request -get
shapeai.get("/author/:id",(req,res)=>{
    const getspecificauthor=database.authors.filter((author)=>
author.id==req.params.id
    );
    if(getspecificauthor.length==0){
        return res.json({error:`no book found according to id ${req.params.id}`});
    }
        return res.json({author:getspecificauthor})
    });    



// to get a list of author based on books
// request -get
shapeai.get("/author/:isbn",(req,res)=>{
    const specificauthorbasedonbook=database.authors.filter((author)=>
        author.book.includes(req.params.isbn)
    );
    if(specificauthor===0){
        return res.json({error:`no author found based on ${req.params.isbn}`})
    }
    return res.json({author:specificauthorbasedonbook});
})


 // to get all publications
 // request -get
 shapeai.get("/publications",(req,res)=>{
     return res.json({publications:database.publications});
 })

// to get specific publication
// request -get
shapeai.get("/publication/:id",(req,res)=>{
    const getspecificpublication=database.publications.filter((publication)=>
    publication.id==req.params.id
    );
    if(getspecificpublication.length===0){
        return res.json({error:`no book found according to id ${req.params.id}`});
    }
        return res.json({publication:getspecificpublication})
    });    




//  to get a list of publications based on books
// request -get
shapeai.get("/publications/:isbn",(req,res)=>{
    const specificpublications=database.publications.filter((publication)=>
        publication.book.includes(req.params.isbn)
    );
    if(specificpublications===0){
        return res.json({error:`no publication found based on ${req.params.isbn}`})
    }
    return res.json({publication:specificpublications});
})

// to add new book 
// request-post
shapeai.post("/books/new",(req,res)=>
{
const {newbook}=req.body;
database.books.push(newbook);
return res.json({books:database.books,message:"new book is added"});
})

//  to add new author
// request -post

shapeai.post("/author/new",(req,res)=>
{
const {newauthor}=req.body;
database.authors.push(newauthor);
return res.json({author:database.authors,message:"new author is added"});
})

// to add new publication
// request-post
shapeai.post("/publication/new",(req,res)=>
{
const {newpublication}=req.body;
database.publications.push(newpublication);
return res.json({publication:database.publications,message:"new publication is added"});
})
//  shapeai.listen(3000,()=>console.log("start server"));


//  book update:title
// put
shapeai.put("/books/update/:isbn",(req,res)=>
{
   database.books.forEach((book)=>{
       if(book.isbn===req.params.isbn){
           book.title=req.body.booktitle;
           return;
       }
   })
    return res.json({books:database.books})
})

// add new author
// put
shapeai.put("/books/author/update/:isbn",(req,res)=>{
// update the book author database
database.books.forEach((book)=>{
    if(book.isbn===req.params.isbn){
        return book.authors.push(req.body.newauthor)
    } 
})
// update the author
database.authors.forEach((author)=>{
    if(author.id===req.body.newauthor){
        return author.books.push(req.params.isbn);
    }
    return res.json({book:database.books,author:database.authors,message:"message sent"})
})
})

// update the author detail
// put
shapeai.put("/authors/update/:id",(req,res)=>{
    database.authors.forEach((author)=>{
        if(author.id===req.params.id){
            author.name=req.body.authorname;
            return;
        }
    })
    return res.json({author:database.authors,message:"name changed"})
})


// update the publication details
// put

shapeai.put("/publications/update/:id",(req,res)=>
{
   database.publications.forEach((publication)=>{
       if(publication.id===req.params.id){
           publication.name=req.body.publicationname;
           return;
       }
   })
    return res.json({publication:database.publications})
})

// 

shapeai.listen(3000,()=>console.log("start server"));


