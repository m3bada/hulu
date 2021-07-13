module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://hulu-bay.vercel.app/',
      },
    ]
  },
  images: {
    domains: ['links.papareact.com' , 'image.tmdb.org'] 
  }

}