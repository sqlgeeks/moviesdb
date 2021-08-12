function fetchData() {
  fetch(
    'https://api.themoviedb.org/3/movie/550?api_key=f78e00c9197f8f3175e690c246f0e942',
    {
      method: 'GET',
    },
  )
    .then((res) => {
      if (!res.ok) throw Error('Error fetching API')
      return res.json()
    })
    .catch((err) => console.log(err))
}
fetchData()
