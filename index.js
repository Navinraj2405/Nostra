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


        //   var timedelay=document.querySelector(".transition")
        //   function delay(){
        // transition.style.display="block"

        //   }
        //   setTimeout(delay,3000)

        // slideimage
        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }
