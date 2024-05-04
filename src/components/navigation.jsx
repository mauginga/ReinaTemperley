// import WhatsAppButton from "./WhatsAppButton"

// import Logo from "./Logo"


export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
        <a className='navbar-brand page-scroll' href='#page-top'>
            HORMIGON FUMIGACIONES
        </a>{' '}
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Características
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Nosotros
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Servicios
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galería
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Clientes
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <WhatsAppButton /> */}
    </nav>
  )
}
