import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react"
import * as Yup from 'yup'
import { PiCoffeeDuotone } from "react-icons/pi";
import { IoAlertCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";


export const ReservasInicio = () => {

    const fechaActual = new Date();
    const diaActual = fechaActual.getDay();
    const fechaSiguiente = new Date(fechaActual.getTime() + (45 * 60 * 60 * 1000));
    const fechaMinima = fechaSiguiente.toISOString().slice(0, 16);

    const fechaTope = new Date(fechaActual.getTime() + (720 * 60 * 60 * 1000));
    const fechaMaxima = fechaTope.toISOString().slice(0, 16);

    const listaDeOrigenes = ["Aeroparque", "Ezeiza", "Almirante Brown", "Hudson", "Avellaneda", "Lanús", "Belgrano", "Núñez", "Palermo", "Recoleta", "Benavídez", "Milberg", "Tortuguitas", "Berazategui", "CABA", "Campana", "Cardales", "Canning", "Spegazzini", "Caseros", "El Palomar", "Centro", "Caballito", "Devoto", "Puerto Madero", "Conexión Aeroparque", "Conexión Ezeiza", "Don Torcuato", "Grand Bourg", "Flores", "Liniers", "González Catán", "Laferrere", "Gral Rodríguez", "Hurlingham", "Loma Hermosa", "Ing. Maschwitz", "Del Viso", "Ituzaingó", "Padua", "La Boca", "Lomas de Zamora", "San Justo", "Luján", "Merlo", "Paso del Rey", "Monte Grande", "Moreno", "Francisco Alvarez", "Morón", "Haedo", "Lugano", "Pilar", "Escobar", "Quilmes", "Alte Brown", "Ramos Mejía", "Ciudadela", "San Andrés", "San Martín", "San Isidro", "Boulogne", "San Miguel", "José C Paz", "Tigre Centro", "Pacheco", "Villa Ballester", "José León Suárez", "Vicente López", "Olivos", "Wilde", "Monte Chingolo"];

    const [idaVuelta, setIdaVuelta] = useState(false);

    const [dataForm, setDataForm] = useState({
        name: '',
        dni: '',
        mail: '',
        domicilio: '',
        telefono: '',
        origen: '',
        destino: '',
        dia_hora_salida: '',
        dia_hora_regreso: '',
        num_vuelo: '',
        cantidadadultos: '',
        cantidadmenores: '',
        butacamenor: '',
        cantidadvalijas: '',
        pesovalijas: '',
        mascotas: ''
    });

    const handleAdvertice = () => {
        toast('En caso de no contar con residencia Argentina, ingresa tu número de pasaporte o documento de identidad extranjero.', {
            icon: '⚠️',
            duration: 9000
          });
    }


  return (
        <div className="d-flex flex-column align-items-center py-lg-5 py-4 px-lg-5 px-3">

            {/* SOLO DE LUNES A VIERNES, SI ES FIN DE SEMANA, MOSTRAR CARTEL DE ADVERTENCIA*/}
            {
                diaActual === 0 || diaActual === 6 ? <div className="d-flex justify-content-start align-items-center vh-100 pt-5 flex-column">
                <PiCoffeeDuotone className="display-3 mb-3 color-main"/>
                <h4 style={{maxWidth:800}} className="text-break text-center text-black">Por el momento no es posible realizar reservas los fines de semana, podes reservar tu traslado en nuestros horarios de atención de lunes a viernes de 09:00 a 18:00 hs</h4>
                </div> : <div className="d-flex justify-content-center align-items-start" style={{maxWidth:800}}>
                <Formik initialValues={dataForm}
                        enableReinitialize
                        validationSchema={Yup.object({
                            name: Yup.string().trim().required("Campo requerido"),
                            dni: Yup.string().trim().required("Campo requerido"),
                            mail: Yup.string().email("Introduce un mail válido porfavor").trim().required("Campo requerido"),
                            domicilio: Yup.string().trim().required("Campo requerido"),
                            telefono: Yup.string().trim().required("Campo requerido"),
                            origen: Yup.string().trim().required("Campo requerido"),
                            destino: Yup.string().trim().required("Campo requerido"),
                            cantidadadultos: Yup.string().trim().required("Campo requerido"),
                            cantidadmenores: Yup.string().trim().required("Campo requerido"),
                            cantidadvalijas: Yup.string().trim().required("Campo requerido"),
                            pesovalijas: Yup.string().trim().required("Campo requerido"),
                        })}
                        onSubmit={async (values, actions) => {
                            
                            //formateo para dia_hora_salida
                            const dia_hora_salida_formated = values.dia_hora_salida.replace("T", " ");
                            values.dia_hora_salida = dia_hora_salida_formated;

                            //formateo para dia_hora_regreso
                            const dia_hora_regreso_formated = values.dia_hora_regreso.replace("T", " ");
                            values.dia_hora_regreso = dia_hora_regreso_formated;

                            //chequeo idaYvuelta
                            if(idaVuelta === false){
                                const sinIdaYvuelta = "No requiere transporte de vuelta";
                                values.dia_hora_regreso = sinIdaYvuelta;
                            }

                            const celular = "5491169110413";
                            const url = `https://api.whatsapp.com/send?phone=${celular}&text=${encodeURIComponent(
                            `Hola, acabo de completar el formulario para reservar mi traslado, dejo los siguientes datos:\n\nNombre: ${values.name}\nDocumento: ${values.dni}\nMail: ${values.mail}\nDomicilio: ${values.domicilio}\nTeléfono: ${values.telefono}\nOrigen: ${values.origen}\nDestino: ${values.destino}\n\n*_En caso que modifiques la fecha y hora de salida o de regreso, recuerda que sólo tomamos las reservas con 48hs de anticipación, de lo contrario la reserva no será tomada._*\n\nDía y hora de salida: ${values.dia_hora_salida === '' ? "No especificó día y hora de salida" : values.dia_hora_salida + " (Año / mes / día)"}\nDía y hora de regreso: ${values.dia_hora_regreso === '' ? "No requiere transporte de vuelta" : values.dia_hora_regreso + " (Año / mes / día)"}\n\nNúmero de vuelo: ${values.num_vuelo === '' ? "No especifíca número de vuelo" : values.num_vuelo}\nCantidad de adultos: ${values.cantidadadultos}\nCantidad de menores: ${values.cantidadmenores}\n¿Requiere butaca?: ${values.butacamenor === '' ? "No requiere de butaca para menores" : `Si, ${values.butacamenor}` }\nCantidad de Valijas: ${values.cantidadvalijas}\nPeso de valijas: ${values.pesovalijas}\n¿Viajan mascotas?: ${values.mascotas === '' ? "No viajan mascotas" : values.mascotas}`
                            )}`;
                            
                            window.open(url, "_blank");
                            actions.setSubmitting(true);
                            actions.resetForm();
                            
                        }}
                >
                    {({handleSubmit, isSubmitting}) => (
                        <Form onSubmit={handleSubmit} className="form-control-sm w-100">
                            <h1 className="text-start text-sm-center text-break text-black mb-3 display-5">Reservá tu <b className="fw-light color-subtitulo-inicial">traslado</b></h1>
                            <p className="mb-5 fs-6">Querido usuario/a, todas las reservas las tomamos con un <b className="alter-font">mínimo de 48hs</b> y un <b className="alter-font">plazo máximo de 30 dias</b>. Teniendo esto en cuenta podes completar todos los datos necesarios para la reserva y en breve nos pondremos en contacto contigo.</p>

                            <h4 className="text-start text-break mt-5 mb-3 fw-bold alter-font">Datos personales</h4>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="name">Nombre Completo <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext shadow-input rounded py-2 text-black my-1 px-2 mx-0" placeholder="Ingresá tu nombre completo" type="text" min={0} name="name" id="name"/>
                                <ErrorMessage name='name' component="p" className="text-danger"/>

                            <label className='form-label color-main d-flex align-items-center alter-font m-0 fw-bold fs-6 mt-3' htmlFor="dni">Documento <b className="text-danger">*</b> <b><IoAlertCircleOutline onClick={handleAdvertice} type="button" className="fs-5 ms-1 mb-1 text-danger"/></b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="dni" id="dni" type="number" placeholder="Ingresá tu DNI"/>
                                <ErrorMessage name='dni' component="p" className="text-danger"/>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="mail">E-mail <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="mail" id="mail" type="email" placeholder="Ingresá tu email"/>
                                <ErrorMessage name='mail' component="p" className="text-danger"/>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="domicilio">Domicilio <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="domicilio" id="domicilio" type="text" placeholder="Ingresá tu domicilio"/>
                                <ErrorMessage name='domicilio' component="p" className="text-danger"/>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="telefono">Teléfono <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="telefono" id="telefono" type="number" min={0} placeholder="Ingresá tu número de teléfono"/>
                                <ErrorMessage name='telefono' component="p" className="text-danger"/>
                            
                                <h4 className="text-start text-break mt-5 mb-3 fw-bold alter-font">Información del viaje</h4>

                            <div className="d-flex justify-content-start align-items-center flex-wrap flex-sm-nowrap">
                                <button type="button" onClick={() => setIdaVuelta(false)} className={`flex-fill shadow-input alter-font rounded py-2 my-1 px-2 mx-0 ${idaVuelta === true ? "btn-formulario" : "btn-color-main"}`}>Sólo traslado de ida</button>
                                <button type="button" onClick={() => setIdaVuelta(true)} className={`flex-fill shadow-input alter-font rounded py-2 my-1 px-2 mx-0 ${idaVuelta === false ? "btn-formulario" : "btn-color-main"}`}>Traslado de ida y vuelta</button>
                            </div>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="origen">Origen del viaje <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="origen" id="origen" list="origenes" type="text" placeholder="Ingresá el origen del viaje"/>
                                <ErrorMessage name='origen' component="p" className="text-danger"/>
                                <datalist id="origenes">
                                    {
                                    listaDeOrigenes ? listaDeOrigenes.sort().map((item) => <option key={item+1}>{item}</option>) : ""
                                    }
                                </datalist>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="destino">Destino del viaje <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="destino" id="destino" type="text" placeholder="Ingresá el destino del viaje" list="destinos"/>
                                <ErrorMessage name='destino' component="p" className="text-danger"/>
                                <datalist id="destinos">
                                    {
                                    listaDeOrigenes ? listaDeOrigenes.sort().map((item) => <option key={item+2}>{item}</option>) : ""
                                    }
                                </datalist>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="dia_hora_salida">Dia y hora de SALIDA<b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="dia_hora_salida" id="dia_hora_salida" type="datetime-local" min={fechaMinima} max={fechaMaxima}/>
                                <ErrorMessage name='dia_hora_salida' component="p" className="text-danger"/>
                            
                            {
                                idaVuelta === true ? <div className="d-flex align-items-start flex-column">
                                    <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="dia_hora_regreso">Dia y hora de REGRESO<b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="dia_hora_regreso" id="dia_hora_regreso" type="datetime-local" min={fechaMinima}/>
                                <ErrorMessage name='dia_hora_regreso' component="p" className="text-danger"/>
                                </div> : ''
                            }

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="num_vuelo">Número de vuelo <b className="text-secondary fw-light">(opcional)</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="num_vuelo" id="num_vuelo" type="text" placeholder="Ingresá el número de vuelo"/>
                                <ErrorMessage name='num_vuelo' component="p" className="text-danger"/>

                            <h4 className="text-start text-break mt-5 mb-3 fw-bold alter-font">Cantidad de Pasajeros</h4>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="cantidadadultos">Cantidad de adultos <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="cantidadadultos" id="cantidadadultos" min={0} type="number" placeholder="Indica la cantidad de adultos"/>
                                <ErrorMessage name='cantidadadultos' component="p" className="text-danger"/>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="cantidadmenores">Cantidad de menores <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="cantidadmenores" id="cantidadmenores" type="number" min={0} placeholder="Indica la cantidad de menores"/>
                                <ErrorMessage name='cantidadmenores' component="p" className="text-danger"/>
                            
                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="butacamenor">En caso de requerir silla/butaca, indica la edad y el peso del o de los menores <b className="text-secondary fw-light">(opcional)</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="butacamenor" id="butacamenor" type="text" placeholder="Indica edad y peso del o de los menores"/>
                                <ErrorMessage name='butacamenor' component="p" className="text-danger"/>
                            
                                <h4 className="text-start text-break mt-5 mb-3 fw-bold alter-font">Valijas</h4>
                            
                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="cantidadvalijas">Cantidad de Valijas <b className="text-danger">*</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="cantidadvalijas" id="cantidadvalijas" type="number" min={0} placeholder="Indica la cantidad de valijas"/>
                                <ErrorMessage name='cantidadvalijas' component="p" className="text-danger"/>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3 me-3' htmlFor="pesovalijas">Tamaño/Peso de las valijas <b className="text-danger">*</b></label>
                            <Field as="select" className="form-control-plaintext btn btn-light text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="pesovalijas" id="pesovalijas" style={{maxWidth:300}}>
                                <option value="">Selecciona el tamaño de tu valija</option>
                                <option value="Carry on">Carry On (max 10kg)</option>
                                <option value="Valija mediana">Valija mediana (max 15kg)</option>
                                <option value="Valija grande">Valija grande (+15kg)</option>
                            </Field>
                                <ErrorMessage name='pesovalijas' component="p" className="text-danger"/>

                                <h4 className="text-start text-break mt-5 mb-3 fw-bold alter-font">Mascotas</h4>

                            <label className='form-label color-main alter-font m-0 fw-bold fs-6 mt-3' htmlFor="mascotas">En caso de que viajen mascotas, indica cantidad y tamaño de las mascotas <b className="text-secondary fw-light">(opcional)</b></label>
                            <Field className="form-control-plaintext text-black shadow-input alter-font rounded py-2 my-1 px-2 mx-0" name="mascotas" id="mascotas" type="text" min={0} placeholder="Indica cantidad y tamaño de mascotas"/>
                                <ErrorMessage name='mascotas' component="p" className="text-danger"/>
                            
                            <p className="pt-5">Serás redirigido a <b className="alter-font" style={{color:"#25d366"}}>WhatsApp</b> donde te comunicarás con uno de nuestros coordinadores para concretar la reserva.</p>
                            <button type="submit" className="btn-color-main-gradient w-100 py-3 fs-5 mb-5" disabled={isSubmitting}>Reservar</button>
                        </Form>
                    )}
                </Formik>
            </div>
            }
        </div>
  )
}
