const f= document.querySelector("#f");
const b= document.querySelector("#b");
const fb= document.querySelector("#fb");
const main=document.querySelector('main')
f.addEventListener("click",function(){
const h3 =document.createElement('h3')
h3.textContent="Foo";
main.append(h3);
});
b.addEventListener("click",function(){
    const h3 =document.createElement('h3')
    h3.textContent="Bar";
    main.append(h3);
});
fb.addEventListener("click",function(){
    const h2 =document.createElement('h2')
    h2.textContent="FooBar";
    main.append(h2);
});