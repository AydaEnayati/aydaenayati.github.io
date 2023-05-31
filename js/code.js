const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".nav1-link");
const navigation2 = document.querySelector(".navigation2");
const sectionOne = document.querySelector(".home-intro");
const searchModal = document.querySelector(".search-modal")
const costumeModal = document.querySelectorAll(".costume-modal")
const costumeModallinks = document.querySelectorAll(".modify17")



const faders = document.querySelectorAll(".fade-in");


const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navigation.classList.add("nav-scrolled");
            links[0].classList.remove("nav1-link");
            links[1].classList.remove("nav1-link");
            links[2].classList.remove("nav1-link");
            links[3].classList.remove("nav1-link");
            links[4].classList.remove("nav1-link");
            navigation2.classList.add("nav-scrolled2");
            searchModal.classList.add("change-color")
            costumeModal[0].classList.remove("text-light")
            costumeModal[1].classList.remove("text-light")
            costumeModallinks[0].classList.remove("text-light")
            costumeModallinks[1].classList.remove("text-light")
        } else {
            navigation.classList.remove("nav-scrolled");
            navigation2.classList.remove("nav-scrolled2");
            links[0].classList.add("nav1-link");
            links[1].classList.add("nav1-link");
            links[2].classList.add("nav1-link");
            links[3].classList.add("nav1-link");
            links[4].classList.add("nav1-link");
            searchModal.classList.remove("change-color")
            costumeModal[0].classList.add("text-light")
            costumeModal[1].classList.add("text-light")
            costumeModallinks[0].classList.add("text-light")
            costumeModallinks[1].classList.add("text-light")
            
        }
    });
},
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);



const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });


