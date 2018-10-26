<script>
(function(){
 try {
  if ( /* Insertar aquí expresión JS para probar la página del producto */ ) {
   var prodid, totalvalue;
   /*
    Insertar código JS personalizado para extraer el valor de
    prodid y totalvalue del documento actual
   */
   dataLayer.push({
    'event': 'fireRemarketingTag',
    'google_tag_params': {
      'ecomm_prodid': prodid,
      'ecomm_pagetype': 'product',
      'ecomm_totalvalue': totalvalue
    }
   });
  }
  else if ( /* Insertar expresión JS para probar la página del carrito */ ) {
   var prodid, totalvalue;
   /*
    Insertar código JS personalizado para extraer el valor de
    prodid y totalvalue del documento actual
   */
   dataLayer.push({
    'event': 'fireRemarketingTag',
    'google_tag_params': {
      'ecomm_prodid': prodid,
      'ecomm_pagetype': 'cart',
      'ecomm_totalvalue': totalvalue
    }
   });
  }
  else if ( /* Insertar expresión JS para probar la página de compra */ ) {
   var prodid, totalvalue;
   /*
    Insertar código JS personalizado para extraer el valor de
    prodid y totalvalue del documento actual
   */
   dataLayer.push({
    'event': 'fireRemarketingTag',
    'google_tag_params': {
      'ecomm_prodid': prodid,
      'ecomm_pagetype': 'purchase',
      'ecomm_totalvalue': totalvalue
    }
   });
  }
  else {
   dataLayer.push({
    'event': 'fireRemarketingTag',
    'google_tag_params': { }
   });
  }
 }
 catch (err) {}
}) ();
</script>