<template>
  <div>
    <footer class="main-footer">
      <div class="list-info">
        <b-container>
          <b-row>
            <b-col>
              <img
                src="~/static/img/logoheader.svg"
                href="/"
                alt="logo gobierno de méxico"
                class="logo_footer"
                style="max-width: 90%;"
              />
            </b-col>
            <b-col>
              <h5>Enlaces</h5>
              <ul>
                <li>
                  <a
                    href="https://participa.gob.mx"
                    target="_blank"
                    rel="noopener"
                    title="Enlace abre en ventana nueva"
                    >Participa</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.gob.mx/publicaciones"
                    target="_blank"
                    rel="noopener"
                    title="Enlace abre en ventana nueva"
                    >Publicaciones Oficiales</a
                  >
                </li>
                <li>
                  <a
                    href="http://www.ordenjuridico.gob.mx"
                    target="_blank"
                    rel="noopener"
                    title="Enlace abre en ventana nueva"
                    >Marco Jurídico</a
                  >
                </li>
                <li>
                  <a
                    href="https://consultapublicamx.inai.org.mx/vut-web/"
                    target="_blank"
                    rel="noopener"
                    title="Enlace abre en ventana nueva"
                    >Plataforma Nacional de Transparencia</a
                  >
                </li>
              </ul>
            </b-col>
            <b-col>
              <h5>¿Qué es gob.mx?</h5>
              <p>
                Es el portal único de trámites, información y participación
                ciudadana.
                <a href="https://www.gob.mx/que-es-gobmx">Leer más</a>
              </p>
              <ul>
                <li>
                  <a href="https://datos.gob.mx">Portal de datos abiertos</a>
                </li>
                <li>
                  <a href="https://www.gob.mx/accesibilidad"
                    >Declaración de accesibilidad</a
                  >
                </li>
                <li>
                  <a href="https://www.gob.mx/privacidadintegral"
                    >Aviso de privacidad integral</a
                  >
                </li>
                <li>
                  <a href="https://www.gob.mx/privacidadsimplificado"
                    >Aviso de privacidad simplificado</a
                  >
                </li>
                <li>
                  <a href="https://www.gob.mx/terminos"
                    >Términos y Condiciones</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.gob.mx/terminos#medidas-seguridad-informacion"
                    >Política de seguridad</a
                  >
                </li>
                <li><a href="https://www.gob.mx/sitemap">Mapa de sitio</a></li>
              </ul>
            </b-col>
            <b-col>
              <h5>
                <a
                  href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54"
                  >Denuncia contra servidores públicos</a
                >
              </h5>
              <h5>Síguenos en</h5>
              <ul class="list-inline">
                <li>
                  <a
                    class="social-icon facebook"
                    target="_blank"
                    rel="noopener"
                    title="Enlace abre en ventana nueva"
                    href="https://www.facebook.com/gobmexico"
                    aria-label="Facebook de presidencia"
                  />
                </li>
                <li>
                  <a
                    class="social-icon twitter"
                    target="_blank"
                    rel="noopener"
                    title="Enlace abre en ventana nueva"
                    href="https://twitter.com/GobiernoMX"
                    aria-label="Twitter de presidencia"
                  />
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-container>

        <b-container fluid class="footer-pleca">
          <b-row>
            <b-col> <br /><br /> </b-col>
          </b-row>
        </b-container>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-footer {
  font-family: "Montserrat", "Open Sans", "Helvetica Neue", Helvetica, Arial,
    Helvetica, sans-serif;
  background-color: #13322b;
  min-height: 56px;
  color: #fff;
  padding: 0px 0 0px;
  text-align: left;
  font-weight: 300;
}

.main-footer .list-info h5 {
  font-weight: 200px;
  margin-bottom: 20px;
  font-size: 18px;
  margin-top: 12.5px;
  font-family: inherit;
  line-height: 1.1;
  color: inherit;
}

.main-footer p {
  margin: 0;
  font-size: 14px;
  line-height: 136%;
  height: auto;
  position: static;
  margin-bottom: 15px;
}

.main-footer .list-info {
  line-height: auto;
  color: white;
  background-size: cover;
  background-position: bottom;
  padding: 30px 10px 10px;
}

.main-footer .list-info ul {
  margin: 0 0 60px;
  padding: 0;
}

.main-footer .list-info ul li {
  list-style-type: none;
  margin: 0 0 2px;
  padding: 0;
  line-height: 110%;
}

.main-footer .list-info a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}

.social-icon {
  background-image: url("~static/img/social/icons_full.png");
  display: block;
  text-indent: -9999px;
  margin-right: 5px;
}

.social-icon.facebook {
  width: 14px;
  height: 20px;
  background-position: 0 0;
}

.social-icon.twitter {
  width: 24px;
  height: 20px;
  background-position: -34px 0;
}
.list-inline {
  list-style: none;
}

.list-inline li {
  display: inline-block;
}

.footer-pleca {
  background-color: #12322b;
  background-image: url("https://framework-gb.cdn.gob.mx/landing/img/pleca.svg");
  background-repeat: repeat-x;
}
</style>
