var sidenav = document.getElementById("sidenav")
var menuicon= document.getElementById("menuicon")
var closenav= document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left= 0;
})
closenav.addEventListener("click",function(){
    sidenav.style.left="-50%";
})



        var firstcut = document.getElementById("firstcut")
        var removeitem = document.getElementById("removeitem")

        firstcut.addEventListener("click", function () {
            removeitem.remove()
        })


        document.getElementById("newarrivals-link").addEventListener("click", function (e) {
            e.preventDefault(); // prevent default jump
            document.getElementById("newarrivals").scrollIntoView({ behavior: "smooth" });
        });
        // Most Wanted Session
        document.getElementById("mostwanted-link").addEventListener("click", function (e) {
            e.preventDefault(); // prevent default jump
            document.getElementById("mostwanted").scrollIntoView({ behavior: "smooth" });
        });


        