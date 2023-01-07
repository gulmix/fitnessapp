export const exerciseOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '7dd9b1a667msh0ef7718639d779dp1a6a80jsn804cc1636d0b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
};

export const youtubeOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '7dd9b1a667msh0ef7718639d779dp1a6a80jsn804cc1636d0b',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
   }
};

export const fetchData = async (url, options) => {
   const response = await fetch(url, options)
   const data = await response.json()
   return data
}