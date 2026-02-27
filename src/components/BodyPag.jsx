import React from 'react'

export default function BodyPag() {
  
  function alertMsj(){
    alert("Hola")
  }
  
  return (

     <main className="flex-fill">
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4">Bienvenido a MiApp</h1>
          <p className="lead">
            Gestiona tus negocios de manera fácil y rápida.
          </p>
          <button className="btn btn-primary btn-lg" onClick={alertMsj}>
            Comenzar
          </button>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-5">
        <div className="container">
          <div className="card shadow p-4">
            <h2 className="mb-4">Registrar Negocio</h2>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <input type="text" className="form-control" />
            </div>

            <button className="btn btn-success">
              Guardar
            </button>
          </div>
        </div>
      </section>

      {/* Cards de negocios */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Negocios Registrados</h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Cafetería Central</h5>
                  <p className="card-text">Categoría: Alimentos</p>
                  <button className="btn btn-outline-primary btn-sm">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            {/* Más cards dinámicas aquí */}
          </div>
        </div>
      </section>
    </main>

  )
}

