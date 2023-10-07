// ALL Events
const Drives = [
  {
    id: '1',
    title: 'Quiz Competition',
    date: 'June 5th, 2021',
    imageUrl: ['d1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg'],
    description:
      "Madadgaar Foundation conducted a poster making competition on 5th June 2021 on World Environment Day. The theme for the event was 'Paint nature for a creature'. The motive of this competition was to raise awareness for plants and stray animals. The top 3 winners were provided exclusive gifts like t-shirt,mug etc.",
  },
  {
    id: '2',
    title: 'Animal Welfare Drive',
    date: '21th June 2021 - 18th May 2022',
    imageUrl: ['d5.jpg', 'd6.jpg', 'd7.jpg', 'd8.jpg'],
    description:
      'Madadgaar Foundation organized 𝗤𝘂𝗶𝘇 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻 on the theme of  𝗞𝗮𝗿𝗴𝗶𝗹 𝗩𝗶𝗷𝗮𝘆 𝗗𝗶𝘄𝗮𝘀 on 26th July, 2021.The questions were related to 𝗞𝗮𝗿𝗴𝗶𝗹 𝗪𝗮𝗿.𝗖𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗲 𝗼𝗳 𝗔𝗽𝗽𝗿𝗲𝗰𝗶𝗮𝘁𝗶𝗼𝗻 were given to 𝗧𝗼𝗽 𝟯 𝗪𝗶𝗻𝗻𝗲𝗿𝘀 and c𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗲 𝗼𝗳 p𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗶𝗼𝗻 to all the participants',
  },

  {
    id: '3',
    title: 'Snack Distribution Drive',
    date: '21st Oct 2021 - 16th Aug 2022',
    imageUrl: ['d9.jpg', 'd10.jpg', 'd11.jpg', 'd12.jpg'],
    description:
      'A Hindi Poem Writing Competition was conducted by the Madadgaar foundation on the occasion of Hindi Diwas 14th of September 2021. The theme for the poem competition was Women’s Empowerment. The winner was given exclusive prizes and the top 3 winners were provided a certificate of Appreciation while all the other participants were thanked for their contribution with a certificate of participation.',
  },
  {
    id: '4',
    title: 'Women’s Welfare Drive',
    date: '29th March 2022 ',
    imageUrl: ['d13.jpg', 'd14.jpg', 'd15.jpg', 'd1.jpg'],
    description:
      "Madadgaar Foundation conducted an article writing competition on 20th February 2022 on World Day of Social Justice. The theme for the event was 'The humanity of humans:How human are we,really?'. The motive of this competition was to raise awareness of social justice. The winner was provided with an appreciation certificate and a voucher worth Rs 500 and all the participants were given a certification for participation.",
  },
  {
    id: '5',
    title: 'Conditional Drives',
    date: '23rd April 2022',
    imageUrl: ['d5.jpg', 'd6.jpg', 'd9.jpg', 'd10.jpg'],
    description:
      'A Quiz Competition was conducted on May 7th, 2022, on World Athletics Day by Madadgaar Foundation. The Competition was based on the Athletics Day theme. The winner was given a Certification of Appreciation and a 100 Rupee Voucher whereas all the other participants were also recognized for their effort with a Certificate of Participation',
  },
];

const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const arrowBtns = document.querySelectorAll('.wrapper i');
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// fill card data
const fillHtmlData = (item) => {
  const card = document.createElement('li');
  card.classList.add('card');

  const data = `
                   <div class="imgSlider">
                   <div class="img-slider-wrapper" id="imgSliderWrapper" >
                     <img class="slide-img" src="img/${item.imageUrl[0]}"/>
                     <img class="slide-img" src="img/${item.imageUrl[1]}" />
                     <img class="slide-img" src="img/${item.imageUrl[2]}" />
                     <img class="slide-img" src="img/${item.imageUrl[3]}" />
                  </div>
                  /></div>
                  <h2 class="title">${item.title}</h2>
                  <span class="date">${item.date}</span>
                  <span class="des">${item.description}<span>
          `;

  card.innerHTML = data;
  return card;
};
// show card in UI
const showAllEvents = () => {
  Drives.forEach((item) => {
    const card = fillHtmlData(item);

    carousel.prepend(card);
  });
};

showAllEvents();

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML('beforeend', card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add('no-transition');
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove('no-transition');

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id == 'left' ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(':hover')) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 3000);
};
autoPlay();

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
wrapper.addEventListener('mouseleave', autoPlay);
