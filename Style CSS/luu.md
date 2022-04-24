.header .last{
    padding-left: 130px;
    background-color: #f6851f;
    height:55px;
    transition: 0.4s;
}
.header .last .last_to{
    color: #FFFFFFCC;
    position: relative;
    padding: 15px;
    float: left;
    font-size:18px ;
}
.header .last .last_to ul{
    visibility: hidden;
    margin-top: 10px;
    padding: 10px 20px 0px 20px;
    position: absolute;
    background-color: #FFFFFF;
    border: 1px solid #777777;
    box-shadow: 1px 1px #777777;
    border-radius: 5px;
    list-style-type: none;   
}
.header .last .last_to:hover ul{
    visibility: inherit;
    z-index: 19;
}
.header .last .last_to:hover{
    cursor: pointer;
    color: #fff;
}
.header .last .last_to li{   
    width: 200px;
    border-bottom: 1px solid #7777773b;
    padding: 10px 10px;
}
.header .last .last_to li a{   
    text-decoration: none;
    color: #777777;
}
.header .last .last_to li:hover a{
    cursor: pointer;
    color: #151515;

}








   .header .menu{
        
    }
    .header .menu .last {
        width: 230px;
        height: 100vh;
        padding: 55px 25px;
        z-index: 1;
        position:fixed ;
        top: 0;
        left: 0;
    }
    .header .menu .last_to {
        width: 190px;
        padding: 30px;
    }
    .header .last .last_to ul{
        left: -15px;
        margin-top: 20px;
    }
    

    .header .menu .last .last_to{
        top: 70px;
    }




    .header .menu .last {
        /* visibility: hidden; */
        display: none;
        z-index: 2;
        background-image: linear-gradient(#808080,#e6e6e6);
    } 
    .hist_last{
        visibility: visible;
        animation: closemenu 1s forwards;
    }
    @keyframes closemenu {
        from{
            transform: translateX(-1000px);
        }
        to{
            transform: translateX(0px);
        }
    }