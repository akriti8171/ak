import styled from "styled-components";

export const DialoguesStyle = styled.div`
 .product {
    //  border:1px solid black;
     border-radius:5px;
     box-shadow: 0 0 100px #f6f6f6;
     height:85vh;
     width:93vw;
     position:relative;
     top:30px;
     left:5px;
     background-color:#f6f6f6;
 }
 .background-product{
//     border:1px solid red;
    height:93vh;
    width:94.2vw;
    position:absolute;
    bottom:0px;
    right:0px;
    background-color:#e6e6e6;
}
.header-bar{
    //  border:1px solid red;
    border-radius:5px;
    box-shadow: 0 0 40px #f6f6f6;
    height:5vh;
    width:93vw;
    position:relative;
    top:0px;
    background-color:#fcfcfc;
}
.add-dialogue h1{
    font-size:smaller;
    font-weight:bolder;
    color:#f6f6f6;
    position:relative;
    bottom:42px;
    left:28px;

}
.dialogue-icon{
    color:#f6f6f6;
    padding: 0px 0px 0px 10px;

}
.add-dialogue{
     border:1px solid #00db08;
     box-shadow:0 0 5px #00db08;
    border-radius:25px;
    height:3vh;
    width:8vw;
    position:relative;
    left:1280px;
    top:8px;
    background-color:#00db08;
}

.product-details{
    //  border:1px solid red;
    box-shadow: 0 0 2px #f6f6f6;
    height:75vh;
    width:93vw;
    background-color:#fcfcfc;

}


//for the pagination
.pagination {
    // border:1px solid red;
    height:5vh ;
    width:25vw;
    border-redius:25px;
    margin: 10px auto;
    display: flex;
    list-style:none;
    outline: none;
  }
  .pagination > .active > a{
    background-color: red;
    border-color: red ;
    color: #fff;
  }
  .pagination > li > a{
    border: 1px solid 5900b8 ;
    border-radius:50%;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #5900b8 ;
    border-color: #5900b8;
    outline: none ;
  }
  .pagination > li > a, .pagination > li > span{
    color: #5900b8
  }
  .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius: unset
  }


`;
