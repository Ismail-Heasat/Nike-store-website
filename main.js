const wrapper =document.querySelector(".sliderWrapper");
const menuItem =document.querySelectorAll(".menuItem");


const products = [
    {
                 
    id: 1,
    productDesc:"Made with high-quality materials and expert craftsmanship, these Air Force Nikes are built to last. Whether you're hitting the gym or running errands, they'll keep your feet feeling great all day long.",

    title: "Air Force",
    price: 169,
    colors: [
        {
        code: "black",
        img: "./img/air.png",
      },
  ],
},

{

    id:2,
    productDesc:"Channel your inner athlete with these Air Jordan Nike shoes. Built for performance and style, they're the perfect addition to any sneaker collection.",

    title:"Air jordan",
    price:219,
    colors:[
        {
            code:"ligtgray",
            img:"./img/jordan.png",
        },
      ],
    },    
    {
        id:3,
        productDesc:"Elevate your style with these sleek and versatile Nike Blazers. Featuring a classic design with a modern twist, these shoes are perfect for any occasion.",
        title:"Blazer",
        price:159,
        colors:[
            {
                code:"ligtgray",
                img:"./img/blazer (1).png",
            },
          ],
        },
        
        {
            id:4,
        productDesc:"With their unique texture and bold colorways, these Crater Nike shoes are a standout addition to any wardrobe. Plus, you can feel good about your purchase knowing that they're made with the planet in mind.",

            title:"Crater",
            price:139,
            colors:[
                {
                    code:"bluck",
                    img:"./img/Crater.png",
                },     
        ],
    },

    
    {
        id:5,
        productDesc:"Elevate your sneaker game with these sleek Nike kicks. With their modern design and superior comfort, they're perfect for everyday wear.",

            title:"Hippie",
            price:99,
            colors:[
                {
                    code:"gray",
                    img:"./img/hippie.png",
                },
                
            ],
        },
    ];

    let choosenProdact= products[0]
    const currentProductImg=document.querySelector(".productImg");
    const currentProductTitle=document.querySelector(".productTitle");
    const currentProductPrice=document.querySelector(".productPrice");
    const currentProductBroductDesc=document.querySelector(".productDesc");


    

menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`;
        choosenProdact=products[index]
        currentProductTitle.textContent=choosenProdact.title
        currentProductPrice.textContent="$"+ choosenProdact.price
        currentProductImg.src = choosenProdact.colors[0].img
        currentProductBroductDesc.textContent=choosenProdact.productDesc




         
        


    });

});





const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const Close = document.querySelector(".close");
const payButton = document.querySelector(".payButton"); 

productButton.onclick =function(){

   const productBtn= document.querySelector(".paymant")

   productBtn.style.display="flex"
}


Close.onclick =function(){

    const productBtn= document.querySelector(".paymant")
 
    productBtn.style.display="none"
 }
    

 payButton.onclick =function(){

    const productBtn= document.querySelector(".paymant")
 
    productBtn.style.display="none"
 }



 
 





