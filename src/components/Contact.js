import React from 'react';
import style from './Contact.module.css';

export const Contact = () => {
  return (
    <section>
      <div className={style.contact + " animeLeft"}>
        <img alt="Imagem de contato" src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"></img>

        <div className={style.contactInfos}>
          <h2>Entre em contato</h2>
          <span>carolineignacior@gmail.com</span>
          <span>(48) 99999-9999</span>
          <span>Rua dos Alfeneiros, nº4</span>
        </div>
      </div>
    </section>
  )
}

export default Contact;
