
// どこまでscrollしたか
$(window).on('scroll', function () {  
    const scrolled = $(this).scrollTop();
    // console.log(scrolled)
});

// どこまでscrollできるか値を入手する
$(window).on('scroll', function () {  
    const scrollable = 
        document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = $(this).scrollTop();
    // console.log(scrollable)
});

// scrollがmaxになったらalertを出す
$(window).on('scroll', function () {  
    const scrollable = 
        document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = $(this).scrollTop();
    if(scrolled == scrollable){
        // alert("you've reached bottom");
    };
});


// スクロールしたら画像が切り替わる
$(window).scroll(function () {  
    const scrolledValue = $(this).scrollTop();
    $("#scrollValue").html(scrolledValue);

    const scrollDis6 = $(scroll6).offset().top - $(this).scrollTop();
    console.log(scrollDis6);
});

const dis6 = $(scroll6).offset().top;
console.log(dis6)
