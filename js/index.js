var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n){
        showDivs((slideIndex += n));
    }

    function showDivs(n){
        var i;
         var imgList = document.getElementsByClassName("image-slide");
        if (n > imgList.length) slideIndex = 1;
        else if (n < 1) slideIndex = imgList.length;

         for (i = 0; i < imgList.length; i++){
         imgList[i].style.display = "none";
         }

         imgList[slideIndex - 1].style.display = "block";
    }

    setInterval(() => {
        plusDivs(1);
    }, 2000);

    function validateForm(){
        var name = document.forms["contact-us"]["name"].value;
        var email = document.forms["contact-us"]["email"].value;
        var option = document.forms["contact-us"]["number"].value;
        var option = document.forms["contact-us"]["messages"].value;

        if (name == "" || email == "" || number == "" || messages == ""){
            alert("Data Tidak Boleh Kosong!");
            return false;
        }
    }