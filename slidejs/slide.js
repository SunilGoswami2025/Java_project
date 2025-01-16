const slides = [
    {
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230716/pngtree-d-render-of-a-responsive-web-design-in-a-blue-studio-image_3846389.jpg",
      title: "SLIDE 1",
      description: "THIS IS FIRST SLIDE"
    },
    {
      image: "https://png.pngtree.com/thumb_back/fw800/background/20231004/pngtree-stunning-3d-rendering-of-responsive-devices-on-a-sophisticated-desktop-image_13546044.png",
      title: "SLIDE 2",
      description: "THIS IS SECOND SLIDE"
    },
    {
      image: "https://png.pngtree.com/thumb_back/fw800/background/20231003/pngtree-3d-rendered-visuals-of-responsive-web-design-across-various-devices-image_13542413.png",
      title: "SLIDE 3",
      description: "THIS IS THIRD SLIDE"
    },
    {
      image: "https://png.pngtree.com/background/20231222/original/pngtree-innovative-3d-rendered-designs-catering-to-web-development-banners-marketing-materials-picture-image_6931785.jpg",
      title: "SLIDE 4",
      description: "THIS IS FOURTH SLIDE"
    },
    {
      image: "https://png.pngtree.com/background/20240507/original/pngtree-d-rendering-of-a-navy-themed-desktop-with-travel-accessories-and-picture-image_8837559.jpg",
      title: "SLIDE 5",
      description: "THIS IS FIFTH SLIDE"
    }
  ];

  let currentIndex = 0;

  const showSlide = () => {
    const slide = slides[currentIndex];
    document.getElementById("img").src = slide.image;
    document.getElementById("slide-title").innerHTML = slide.title;
    document.getElementById("slide-description").innerHTML = slide.description;
  };


  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;  
    }
    showSlide();
  });


  document.getElementById("pre-btn").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1; 
    }
    showSlide();
  });

  showSlide();


  // let time = setInterval(() => {
  //   currentIndex++
  //   if(currentIndex >= sliders.length){
  //     currentIndex = 0
  //   }
  //   showSlide()
  // },2000)