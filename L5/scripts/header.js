const header = `
<header class="mb-2">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a id="toAccount">
        <img src="../resources/logo/TransparentLogo.png">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">iPhone</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">MacBook</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nvidia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">AMD</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Samsung</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">О нас</a>
          </li>
        </ul>
        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" id="elementsToFind">
          <button class="btn btn-outline-success" id="findElements">Найти</button>
        </div>
      </div>
    </div>
  </nav>
</header>`

export {header};