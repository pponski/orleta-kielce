import React from 'react'

const SocialFeed = () => {
  return (
    <>
      <p className='heading'>Wpadnij na nasze sociale</p>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOrletaKielce%2F%3Flocale%3Dpl_PL&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className='mx-auto mb-10 rounded-md shadow-md'></iframe>
        <iframe src="https://www.instagram.com/orleta_kielce_1950/embed" width="340" height="440" frameborder="0" scrolling="no" allowtransparency="true" className='mx-auto rounded-md shadow-md'></iframe>
    </>
  )
}

export default SocialFeed