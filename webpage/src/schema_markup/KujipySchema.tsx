import React from 'react';

const KujipySchema = () => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Festival Kojpk Jää'y kujipy",
    "startDate": "2023-12-11T00:00",
    "endDate": "2023-12-11T23:59",
    "location": {
      "@type": "Place",
      "name": "Santa Maria Tlahuitoltepec",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santa Maria Tlahuitoltepec",
        "addressRegion": "Oaxaca",
        "addressCountry": "Mexico"
      }
    },
    "description": "¡Celebra con nosotros el Festival Kojpk Jää'y en honor a la Virgen de Guadalupe! Disfruta de una mezcla única de trap, rap, reggae, suun y balkan.",
    "performer": [
      {
        "@type": "MusicGroup",
        "name": "Kujipy"
      },
      {
        "@type": "MusicGroup",
        "name": "Los Pream"
      },
      {
        "@type": "MusicGroup",
        "name": "Tepachy"
      }
    ],
    /* "url": "URL_DE_TU_PAGINA_WEB",
    "image": "URL_DE_LA_IMAGEN_DEL_EVENTO",
    "isAccessibleForFree": false, */
    /* "offers": {
      "@type": "Offer",
      "url": "URL_DE_VENTA_DE_BOLETOS",
      "price": "PRECIO_DE_BOLETOS",
      "priceCurrency": "MXN",
      "availability": "https://schema.org/InStock"
    }, */
    "keywords": ["FestivalKojpkJaay", "Música", "Cultura", "VirgenDeGuadalupe", "SantaMariaTlahuitoltepec", "kujipy", "LosPream", "Tepachy"]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(eventSchema)}
    </script>
  );
};

export default KujipySchema;