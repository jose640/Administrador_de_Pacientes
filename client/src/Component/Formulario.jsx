import { Fragment, useState } from "react";

const Formulario = () => {

    // Crear State de citas
    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    // State de error
    const [ error, actualizarError ] = useState(false); 

    //Funcion de actualizacion de citas
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
               [e.target.name]: e.target.value
        })
    }

    //Funcion para enviar formulario
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
           hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        // Asignar un ID

        // Crear La cita

        // Reiniciar el form
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;


    return ( 
       <Fragment>
           <h2>Crear Citas</h2>

           {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

           <form
            onSubmit={submitCita}
           >
               <label>Nombre Mascota</label>
               <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
               />
               <label>Nombre Dueño</label>
               <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
               />
               <label>Fecha</label>
               <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
               />
               <label>Hora</label>
               <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
               />
               <label>Síntomas</label>
               <textarea 
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agendar Cita</button>
           </form>
       </Fragment> 
     );
}
 
export default Formulario;