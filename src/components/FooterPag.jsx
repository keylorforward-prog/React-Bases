import React from 'react'
//En este no imporot Bootstrap y no pasa nada 

function FooterPag() {
  return (
 <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          ©2026 MiApp - Todos los derechos reservados
        </p>

        <div>
          <a href="#" className="text-light me-3 text-decoration-none">
            Política de Privacidad
          </a>
          <a href="#" className="text-light me-3 text-decoration-none">
            Términos
          </a>
          <a href="#" className="text-light text-decoration-none">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterPag
