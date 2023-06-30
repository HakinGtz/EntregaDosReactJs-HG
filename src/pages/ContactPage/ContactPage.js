import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page </h1>
      <h4>Ubicación</h4>
                    <p style={{ display: "flex", justifyContent: "center", margin: 20, color:"white" }}>Nuestra sede</p>
                    <p style={{ display: "flex", justifyContent: "center", margin: 20, color:"white" }}>HGBiomedics, S.A. de C.V.
                    Col. Colinas de Tabachines, Jalisco, México,
                    C.P. 45185.
                        +52 xx xxxx xxxx -- +52 xx xxxx xxxx</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14924.33012143414!2d-103.36665599999999!3d20.74744875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b01d1eabeadb%3A0x1817bab75daa9134!2sRubi%2026%2C%20Colinas%20de%20Tabachines%2C%2045130%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1671295810269!5m2!1ses-419!2smx"
                        style={{width:600, height:450, style:"border:0;"}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default ContactPage;
