const mockData = [
  {
    download: '0',
    image:
      'http://art-2.nflximg.net/63fac/79c52ccb0931cc50f51fd8922ecaef551d263fac.jpg',
    imdbid: 'tt5213870',
    largeimage: '',
    netflixid: '80142521',
    rating: 4,
    released: 2017,
    theme: 'Action',
    runtime: '1h32m',
    synopsis:
      'Following her father&#39;s suspicious death, a New York journalist returns to her hometown, where drought and gangs have decimated the farming community.',
    title: 'Pray For Rain',
    type: 'movie',
    unogsdate: '2017-08-12',
  },
  {
    download: '0',
    image:
      'http://art-1.nflximg.net/f9145/e87a5a4862ddf9e98fcca66780b02d4de44f9145.jpg',
    imdbid: 'tt3502172',
    largeimage: '',
    netflixid: '70307407',
    rating: 3,
    released: 2021,
    theme: 'Thriller',
    runtime: '1h24m',
    synopsis:
      'While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.',
    title: 'The Jungle',
    type: 'movie',
    unogsdate: '2017-08-11',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/82441/727eb7198663368903ef6b28836f97a5c6982441.jpg',
    imdbid: 'tt1547638',
    largeimage: '',
    netflixid: '80188764',
    rating: 5,
    released: 2009,
    runtime: '1h46m',
    theme: 'Drama',
    synopsis:
      'Moroccan buddies living in Belgium are dedicated to a lazy and shiftless philosophy, until one of them develops career ambitions and a romantic crush.',
    title: 'The barons',
    type: 'movie',
    unogsdate: '2017-08-11',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/41ba8/0dea3ca74d5b5f36759919dff2a6dd4516341ba8.jpg',
    imdbid: 'tt3351004',
    largeimage: '',
    netflixid: '80153235',
    rating: 4,
    released: 2018,
    theme: 'Action',
    runtime: '1h32m',
    synopsis:
      'Twenty years after high school, a man invites his less successful pals to his resort wedding, where some old high jinks could help them all grow up.',
    title: 'A Fairy Tale',
    type: 'movie',
    unogsdate: '2017-08-11',
  },
  {
    download: '0',
    image:
      'http://art-1.nflximg.net/c06a5/ec02cf285a373a9ff3e4b904b0253cc979ac06a5.jpg',
    imdbid: 'tt0155975',
    largeimage: '',
    netflixid: '18170356',
    rating: 2,
    released: 1998,
    runtime: '1h43m',
    theme: 'Thriller',
    synopsis:
      'In this remake of the 1960s classic, Marion Crane stops at the Bates Motel, only to encounter Norman Bates, a man with a lot of secrets to hide.',
    title: 'Psycho',
    type: 'movie',
    unogsdate: '2017-08-10',
  },
  {
    download: '0',
    image:
      'http://art-1.nflximg.net/66213/a702cb5f2102bbc1ff7c4db6c000bd511aa66213.jpg',
    imdbid: 'tt3215826',
    largeimage: '',
    netflixiz: '80164627',
    rating: 5,
    released: 2011,
    runtime: '1h26m',
    theme: 'Drama',
    synopsis:
      'Drifting through his gap year before college, Jack discovers London&#39;s exotic underground. But his sojourn there drives him in unexpected directions.',
    title: 'Kids in Love',
    type: 'movie',
    unogsdate: '2017-08-10',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/3cb5d/2373bdbe61907eb59928635ef871be17c1b3cb5d.jpg',
    imdbid: 'tt6169798',
    largeimage: '',
    netflixid: '80200767',
    theme: 'Action',
    rating: 3,
    released: 2012,
    runtime: '1h52m',
    synopsis:
      'An escaped death row convict ends up taking a road trip with an old man on a personal mission and a young couple trying to elope.',
    title: 'Rama Rama Re...',
    type: 'movie',
    unogsdate: '2017-08-10',
  },
  {
    download: '0',
    image:
      'http://art-1.nflximg.net/80c76/2ec7b8e24738bc9ba22c400f3b9ef09b02380c76.jpg',
    imdbid: 'tt2569088',
    largeimage: '',
    netflixid: '80160346',
    rating: '3',
    released: '2017',
    runtime: '1h31m',
    synopsis:
      'Master thief Simon Templar -- also known as the Saint -- is hired by a wealthy banker to find his kidnapped daughter, but not all is as it seems.',
    title: 'The Saint',
    type: 'movie',
    unogsdate: '2017-08-10',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/dff1b/f45c7fdf08b9bbb1c09b27c50e65b87875cdff1b.jpg',
    imdbid: 'tt1340123',
    largeimage: '',
    netflixid: '70118778',
    rating: '4',
    released: '2009',
    runtime: '1h40m',
    synopsis:
      'Branded as outcasts, teens Samson and Delilah set out on a grueling road trip in search of a place where they can lead a peaceful life.',
    title: 'Samson and Delilah',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
  {
    download: '0',
    image:
      'http://art-1.nflximg.net/4d16b/8106e0ae3fb73444d317af8e79e58d2f9554d16b.jpg',
    imdbid: 'tt0270021',
    largeimage: '',
    netflixid: '80174482',
    rating: '2',
    released: '2000',
    runtime: '1h48m',
    synopsis:
      'In this surreal retrospective on love, a young girl who&#39;s always running wants to lose her virginity to a cook who has no idea who she is.',
    title: 'The Real Body',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/a463c/db054b4c91f8d20381615a895f8b5828d4da463c.jpg',
    imdbid: 'tt1504319',
    largeimage: '',
    netflixid: '70148682',
    rating: '0',
    released: '2010',
    runtime: '2h1m',
    synopsis:
      'A director becomes ensnared in intrigue after learning his star actress may be involved in the real-life political scandal on which his film is based.',
    title: 'Road to Nowhere',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/c4c2a/4253b99f51317352a6de2133297c1ee4c4ac4c2a.jpg',
    imdbid: 'tt2113792',
    largeimage: '',
    netflixid: '70275660',
    rating: '5',
    released: '2013',
    runtime: '1h32m',
    synopsis:
      'Six college friends meet up for a carefree weekend that turns deadly when a terrorist attack in a nearby town turns the residents into zombies.',
    title: 'The Demented',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
  {
    download: '0',
    image:
      'http://art-2.nflximg.net/09c76/14272730d7f2c5adeafa647a65134f63a9e09c76.jpg',
    imdbid: 'tt1277736',
    largeimage: '',
    netflixid: '70109093',
    rating: '4',
    released: '2008',
    runtime: '1h32m',
    synopsis:
      'In 1974, America&#39;s R&amp;B superstars traveled to Zaire for a three-day concert. This documentary of the event is made up of footage unseen for decades.',
    title: 'Soul Power',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/8ba49/c770c20a323822f0ea208b1b251caf9331e8ba49.jpg',
    imdbid: 'tt2281293',
    largeimage: '',
    netflixid: '80175027',
    rating: '1',
    released: '2012',
    runtime: '1h31m',
    synopsis:
      'With a trio of thugs to guard him, a pampered cult leader goes into hiding on a tropical island and starts to turn his back on his religious group.',
    title: 'I&#39;m Flash!',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
  {
    download: '0',
    image:
      'http://art-0.nflximg.net/957fa/656b08ad466c46e962c6bfd3a5d51da9e38957fa.jpg',
    imdbid: 'tt0073692',
    largeimage: '',
    netflixid: '60000825',
    rating: '2',
    released: '1975',
    runtime: '1h50m',
    synopsis:
      'A womanizing hairdresser trying to open his own salon in Beverly Hills has trouble juggling his business and sexual affairs.',
    title: 'Shampoo',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
  {
    download: '0',
    image:
      'http://art-2.nflximg.net/ca75e/75e905c49b2a503da34cd224946c2e305d1ca75e.jpg',
    imdbid: 'tt0444112',
    largeimage: '',
    netflixid: '70061492',
    rating: '4',
    released: '2006',
    runtime: '1h44m',
    synopsis:
      'Spirited young Jessica arrives in Paris and lands a job as a waitress at a caf&eacute; where the eccentric customers need her for counsel more than coffee.',
    title: 'Avenue Montaigne',
    type: 'movie',
    unogsdate: '2017-08-09',
  },
]
let resultData = mockData

const searchBar = document.getElementById('searchBar')
const getSelectValue = () => {
  var item = document.getElementById('sort-movies').value
  const sortedData = resultData.sort((a, b) => {
    if (item === 'title') return a[item].localeCompare(b[item])
    else if (item === 'latest') return b.released - a.released
    else if (item === 'oldest') return a.released - b.released
    else if (item === 'ratings') return b.rating - a.rating
  })
  movieData(sortedData)
}
searchBar.addEventListener('keyup', (e) => {
  const searchItem = event.target.value
  const filteredData = resultData.filter((item) => {
    const titleUpper = item.title.toUpperCase()
    const titleLower = item.title.toLowerCase()
    return (
      titleUpper.includes(searchItem.toUpperCase()) ||
      titleLower.includes(searchItem.toLowerCase())
    )
  })
  movieData(filteredData)
})

const movieData = (mock) => {
  if (mock.length > 0) {
    const html = mock
      .map((movie) => {
        return `
          <div id="movies">
          <div>
            <div class="movie-poster">
              <img src="${movie.image}" alt="Movie Poster"/>
            </div>
            <div class="movie-details">
                <div class="movie-title">${movie.title} <p>${movie.released}</p></div>
                  <div class="movie-ratings">
                  Ratings: ${movie.rating} 
                  <p><i class="far fa-bookmark"></i></p>
                  <p><i class="far fa-heart"></i></p>
                  </div>                
                
            </div>
          </div>
          </div>
          `
      })
      .join('')
    document.getElementById('moviesList').innerHTML = html
  } else {
    document.getElementById('moviesList').innerHTML =
      '<h1> No Search Results</h1>'
  }
}

movieData(mockData)
