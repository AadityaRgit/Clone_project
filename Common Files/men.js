
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "https://bit.ly/3qJmvfK"},
    {img_url : "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/28/4ac3be4b-f02c-4106-8dc9-be1898a81def1648463267842-Desktop-Banner-----1920x504.jpg"},
    {img_url : "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg"},
    {img_url : "https://bit.ly/3NxptOo"},
    ],

    //FOR MOBILE VIEW
    [{img_url : "https://bit.ly/35p0UBR"},
    {img_url: "https://bit.ly/38hbVX5"},
    {img_url: "https://bit.ly/3iOZ3t9"},
    {img_url: "https://bit.ly/3tTroEZ"},
    ]
  ]

  var z = null; 

    //script for media queries
    var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }

  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })




    // <!-- CATEGORIES DISPALY 1 -->
    var categoryBag = [
      {image_url :'https://bit.ly/3DnfTst'},
      {image_url :'https://bit.ly/3uB2WHQ'},
      {image_url :'https://bit.ly/3NvrZEB'},
      {image_url :'https://bit.ly/3JP1BmV'},
      {image_url :'https://bit.ly/3Nt0VG5'},
      {image_url :'https://bit.ly/3uEEhC2'},
  ]
  categoryBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('categoryBag').append(box)
  })


  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
      {image_url :'https://bit.ly/3wTrgam'},
      {image_url :'https://bit.ly/3Ln7fx1'},
      {image_url :'https://bit.ly/3wKizze'},
      {image_url :'https://bit.ly/3iLkgUQ'},
      {image_url :'https://bit.ly/3uzcDX3'},
  ]
  brandsBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('explore_more').append(box)
  })


document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index.html"
})
var images = document.querySelectorAll('img')
for(let i=0; i<images.length; i++){
  images[i].addEventListener('click', function(){
    window.location.href = "../menspage/mens.html"
  })
}

// LANDING PAGE
document.getElementById('landingPage').addEventListener('click', function(){
  window.location.href = '../Landingpage/index.html'
})