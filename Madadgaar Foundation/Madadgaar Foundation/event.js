const Events = [
  {
    id: '1',
    title: 'Quiz Competition',
    date: 'June 5th, 2021',
    imageUrl: 'poster-making.jpg',
    description:
      "Madadgaar Foundation conducted a poster making competition on 5th June 2021 on World Environment Day. The theme for the event was 'Paint nature for a creature'. The motive of this competition was to raise awareness for plants and stray animals. The top 3 winners were provided exclusive gifts like t-shirt,mug etc.",
  },
  {
    id: '2',
    title: '𝗞𝗮𝗿𝗴𝗶𝗹 𝗩𝗶𝗷𝗮𝘆 𝗗𝗶𝘄𝗮𝘀',
    date: 'July 26th, 2021',
    imageUrl: 'kargil-quiz.jpg',
    description:
      'Madadgaar Foundation organized 𝗤𝘂𝗶𝘇 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻 on the theme of  𝗞𝗮𝗿𝗴𝗶𝗹 𝗩𝗶𝗷𝗮𝘆 𝗗𝗶𝘄𝗮𝘀 on 26th July, 2021.The questions were related to 𝗞𝗮𝗿𝗴𝗶𝗹 𝗪𝗮𝗿.𝗖𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗲 𝗼𝗳 𝗔𝗽𝗽𝗿𝗲𝗰𝗶𝗮𝘁𝗶𝗼𝗻 were given to 𝗧𝗼𝗽 𝟯 𝗪𝗶𝗻𝗻𝗲𝗿𝘀 and c𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗲 𝗼𝗳 p𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗶𝗼𝗻 to all the participants',
  },

  {
    id: '3',
    title: 'Hindi Poem Writing',
    date: 'Sep 14th 2021',
    imageUrl: 'poem-writing.jpg',
    description:
      'A Hindi Poem Writing Competition was conducted by the Madadgaar foundation on the occasion of Hindi Diwas 14th of September 2021. The theme for the poem competition was Women’s Empowerment. The winner was given exclusive prizes and the top 3 winners were provided a certificate of Appreciation while all the other participants were thanked for their contribution with a certificate of participation.',
  },
  {
    id: '4',
    title: 'article writing competition',
    date: 'Feb 20th 2022 ',
    imageUrl: 'article-writing.jpg',
    description:
      "Madadgaar Foundation conducted an article writing competition on 20th February 2022 on World Day of Social Justice. The theme for the event was 'The humanity of humans:How human are we,really?'. The motive of this competition was to raise awareness of social justice. The winner was provided with an appreciation certificate and a voucher worth Rs 500 and all the participants were given a certification for participation.",
  },
  {
    id: '5',
    title: 'World Athletics Day',
    date: 'May 7th 2022',
    imageUrl: 'quiz.jpg',
    description:
      'A Quiz Competition was conducted on May 7th, 2022, on World Athletics Day by Madadgaar Foundation. The Competition was based on the Athletics Day theme. The winner was given a Certification of Appreciation and a 100 Rupee Voucher whereas all the other participants were also recognized for their effort with a Certificate of Participation',
  },
];

const cardWrapper = document.querySelector('.card_wrapper');

const fillHtmlData = (item) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const data = `
    <div class="card_img">
    <img
      src=img/${item.imageUrl}
      alt=${item.title} />
   </div>
   <div class="card_content">
    <h2 class="title">${item.title}</h2>
    <span class="date">${item.date}</span>
    <p class="description">${item.description}</p>
  </div>
    `;
  card.innerHTML = data;
  return card;
};

const showAllEvents = () => {
  Events.forEach((item) => {
    const card = fillHtmlData(item);
    cardWrapper.prepend(card);
  });
};

showAllEvents();
