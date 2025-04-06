
export const Acordeon = () => {
  return (
    <div className="accordion accordion-flush" style={{maxWidth:1250, width:1260}} id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    ¿Cómo hago para reservar mi traslado?
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Podes hacerlo a través de nuestra página web y/o por WhatsApp. Requerimos tus datos personales: nombre completo, DNI/Pasaporte, un celular de contacto, la fecha y horario en que necesitas el traslado, las direcciones exactas de origen y destino, la cantidad de pasajeros y equipaje. Si venís en avión vamos a necesitar también el número de vuelo para poder hacer el seguimiento por si se adelanta o atrasa.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    ¿Con cuánta anticipación debo reservar?
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Te recomendamos hacer la reserva con la mayor anticipación posible. Pero como mínimo 48/72 hs antes.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    ¿Cómo sé qué vehículo necesito para mi traslado?
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Es importante que puedas contarnos cuantos pasajeros en total viajarán, las edades, cantidad y tamaño del equipaje para que podamos asesorarte y orientarte con respecto al vehículo ideal que se adapte a las necesidades de todos los que utilicen nuestros servicios. En caso de viajar con mucho equipaje, avisanos para asignarte un vehículo más grande.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    ¿Cómo puedo abonar?
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Los traslados se abonan por adelantado sin excepción. Puede ser por trasferencia bancaria o a través de Billeteras Virtuales. Una vez realizado el pago se debe enviar el comprobante por WhatsApp. Si solo se pudiera realizar en efectivo consultanos y trataremos de hacer la excepción.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    ¿Cómo sé qué vehículo y conductor me va recoger?
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Una vez coordinado el traslado te contactaremos por WhatsApp para informarte los datos del vehículo y chofer asignados (Modelo, Color, Patente. Nombre y contacto del chofer). Es importante que a la hora de la reserva nos brindes el número y horario de llegada del vuelo, horario de recogida por tu domicilio, o del horario en el que deseas estar en el aeropuerto/terminal.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    ¿Cuentan con butacas para bebés y niños? ¿Puedo llevar mi propia Butaca?
                </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Si, contamos con Butacas para bebes y niños. Recordá solicitarla cuando realices la reserva mencionando edad y peso. Si deseas llevar tu propia butaca, todos nuestros vehículos tienen anclajes Isofix y cinturones de seguridad inerciales de 3 puntos. Admiten todo tipo de "huevitos", butacas y boosters.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    ¿Puedo viajar con mi mascota?
                </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Sí, trasladamos mascotas siempre en canil y junto a sus dueños. Recordá avisarnos cuando realices la reserva.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                    ¿Qué pasa si hay más de una dirección de origen o destino?
                </button>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">No hay ningún problema. Nosotros podemos recoger o dejar pasajeros en varias direcciones tanto a la ida como a la vuelta. Dependiendo de la distancia entre cada punto de recogida y el tiempo de espera de cada pasajero pueden aplicarse costos adicionales. Te recomendamos consultar con anticipación al momento de realizar la reserva.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                    ¿Realizan traslados a otros destinos que no sean Aeropuertos?
                </button>
                </h2>
                <div id="flush-collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Si por supuesto. Realizamos traslados corporativos, empresariales, turísticos y personales de corta, mediana y larga distancia. Realizanos tu consulta sin compromiso y te brindaremos asesoramiento y cotización necesaria.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                    ¿Puedo cancelar o cambiar mi reserva? ¿Qué pasa si mi vuelo de retrasa?
                </button>
                </h2>
                <div id="flush-collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Es perfectamente entendible que puedas llegar a tener que cancelar o cambiar una reserva. Pero si decidís no realizarlo con Full Traslados debes avisarnos con al menos 24/48 hs de anticipación. Si nos avisas con menos antelación del tiempo requerido, quedará sujeto a una decisión comercial y se perderá entre el 50% y 100% del valor previamente abonado.
                Te recomendamos que nos contactes ni bien sepas que tu vuelo fue reprogramado para poder brindarte una solución y re coordinarlo.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button rounded-pill text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                    ¿Realizan factura por el servicio de traslado?
                </button>
                </h2>
                <div id="flush-collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Si. Si precisas la factura, realizamos factura A y B por todos nuestros servicios. En traslados de menos de 100km estamos exentos de IVA. Recordá solicitarla previamente cuando realices la reserva y te la enviaremos por WhatsApp o Mail a la dirección que nos indiques.</div>
                </div>
            </div>
        </div>
  )
}
