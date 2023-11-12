import React from 'react';

const KujipySchema = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "http://www.kujipy.com/events"
    },
    "headline": "No te Pierdas el Espectacular Encuentro Musical con Kujipy",
    /* "image": {
      "@type": "ImageObject",
      "url": "http://www.kujipy.com/images/your-post-image.jpg",
      "height": 800,
      "width": 1200
    }, */
    "author": {
      "@type": "Person",
      "name": "kujipy"
    },
    "datePublished": "2023-09-20",
    "description": "Evento que se llevará a cabo en Santa María Tlahuitoltepec, abajo de la cancha municipa, en el bar KONKO."
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default KujipySchema;