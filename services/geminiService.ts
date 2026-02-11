import { GameStepData, SoobinEmotion } from "../types";

/* 
  ==========================================================================================
  GUÍA DE IMÁGENES PARA EL DESARROLLADOR (TÚ):
  
  En cada paso (node) verás un comentario que dice: // IMAGEN: ...
  Usa esa guía para saber qué reacción visual encaja mejor con el texto.
  
  REFERENCIA DE EMOCIONES (SoobinEmotion):
  - PROUD: Orgulloso, presumiendo, barbilla en alto.
  - SHY: Tímido, mirando hacia abajo, mano en el cuello, sonrisa nerviosa.
  - HANDSOME: Galán, "boyfriend material", mirando fijo a los ojos.
  - DISAPPOINTED: Decepción, puchero, mirada triste.
  - SARCASTIC: Sarcasmo, rodando ojos, sonrisa de lado.
  - CONFUSED: Confusión, ladeando la cabeza, ceño fruncido leve.
  - ANGRY: Enojado, serio, brazos cruzados.
  - HAPPY: Feliz, sonrisa con hoyuelos, ojos cerrados de risa.
  - FAKE_INDIFFERENCE: Fingiendo que no le importa, mirando al techo.
  - SURPRISED: Sorpresa, ojos muy abiertos, mano en la boca.
  - BLUSHED: Sonrojado, orejas rojas, tapándose la cara.
  - SUPER_FURIOUS: Muy enojado (usado en finales malos).
  - NEUTRAL: Cara de póker, esperando, escuchando.
  ==========================================================================================
*/

const STORY_NODES: Record<string, GameStepData> = {
  // =========================================================================
  // PRÓLOGO: EL ENCUENTRO (EXTENDIDO)
  // =========================================================================
  "START": {
    id: "START",
    narrative: "Seúl, 10:30 PM. El invierno en Mapo-gu es cruel, pero dentro del bar 'Blue Hour' el jazz suena bajo y cálido. Aranza entra sacudiéndose la nieve. El lugar está casi vacío, salvo por una figura alta encogida en la mesa del rincón más oscuro.",
    dialogue: "(Susurrando para sí mismo mientras mira su celular) Ah, en serio... ¿por qué Odi nunca quiere comer cuando yo quiero que coma?",
    emotion: SoobinEmotion.NEUTRAL, // IMAGEN: Soobin distraído mirando su celular
    isEnding: false,
    choices: [
      { text: "¿Problemas con tu mascota?", nextStepId: "SCENE_1_PET" },
      { text: "Sentarse en la mesa de al lado sin decir nada", nextStepId: "SCENE_1_SILENT" }
    ]
  },

  "SCENE_1_PET": {
    id: "SCENE_1_PET",
    narrative: "El chico da un salto en su silla, casi tirando su café. Se sube la mascarilla rápido, pero sus ojos grandes y expresivos lo delatan inmediatamente.",
    dialogue: "¡Ah! Dios... me asustaste. Tienes pasos de ninja. Eh... sí, mi erizo es un rebelde. Como su padre, supongo.",
    emotion: SoobinEmotion.SURPRISED, // IMAGEN: Soobin con ojos muy abiertos del susto
    isEnding: false,
    choices: [
      { text: "Lo siento, pasos de turista curiosa. Soy Aranza.", nextStepId: "SCENE_2_INTRO" }
    ]
  },

  "SCENE_1_SILENT": {
    id: "SCENE_1_SILENT",
    narrative: "Aranza se sienta cerca. Él la observa de reojo, tenso, esperando el flash de una cámara. Al ver que ella solo pide un té y saca un libro, se relaja visiblemente.",
    dialogue: "Oye... perdona si parezco paranoico. Es que... tu abrigo es muy llamativo. Pensé que eras de un club de fans.",
    emotion: SoobinEmotion.SHY, // IMAGEN: Soobin tímido/apenado
    isEnding: false,
    choices: [
      { text: "¿Club de fans? Solo soy Aranza.", nextStepId: "SCENE_2_INTRO" }
    ]
  },

  "SCENE_2_INTRO": {
    id: "SCENE_2_INTRO",
    dialogue: "Aranza... Ese nombre no es de por aquí. Suena como... ¿fuerza? ¿O tal vez como una flor elegante? Soy Soobin. Solo Soobin hoy.",
    emotion: SoobinEmotion.HANDSOME, // IMAGEN: Soobin galán, mirando interesante
    narrative: "Se baja un poco la mascarilla. Hay una picardía en su voz que no sale en las entrevistas.",
    isEnding: false,
    choices: [
      { text: "Es un placer, 'Solo Soobin'. ¿Vienes mucho a esconderte aquí?", nextStepId: "SCENE_3_HIDING" }
    ]
  },

  "SCENE_3_HIDING": {
    id: "SCENE_3_HIDING",
    dialogue: "A veces. Cuando los ensayos terminan tarde y mis miembros están demasiado energéticos. Kai no se apaga nunca, ¿sabes? Necesitaba... silencio.",
    emotion: SoobinEmotion.FAKE_INDIFFERENCE, // IMAGEN: Soobin mirando hacia arriba como recordando el caos
    narrative: "Suspira, pero sonríe al mencionar a sus amigos.",
    isEnding: false,
    choices: [
      { text: "Puedo irme a otra mesa si quieres silencio total.", nextStepId: "SCENE_3_STAY" },
      { text: "El silencio está sobrevalorado. Cuéntame más.", nextStepId: "SCENE_3_TALK" }
    ]
  },

  "SCENE_3_STAY": {
    id: "SCENE_3_STAY",
    dialogue: "¡No! Es decir... no. Tu silencio es agradable. No me pides fotos, no gritas. Es... refrescante. Quédate.",
    emotion: SoobinEmotion.BLUSHED, // IMAGEN: Soobin un poco sonrojado o nervioso pidiendo que te quedes
    isEnding: false,
    choices: [{ text: "Está bien, me quedo.", nextStepId: "SCENE_4_BREAD_TOPIC" }]
  },

  "SCENE_3_TALK": {
    id: "SCENE_3_TALK",
    dialogue: "Jaja, cuidado con lo que deseas. Puedo hablar horas sobre anime o por qué la menta con chocolate es el mejor invento de la humanidad.",
    emotion: SoobinEmotion.HAPPY, // IMAGEN: Soobin riendo feliz
    isEnding: false,
    choices: [{ text: "¿Menta con chocolate? Tenemos que discutir eso seriamente.", nextStepId: "SCENE_4_BREAD_TOPIC" }]
  },

  // =========================================================================
  // ACTO 2: LA OBSESIÓN POR EL PAN
  // =========================================================================

  "SCENE_4_BREAD_TOPIC": {
    id: "SCENE_4_BREAD_TOPIC",
    narrative: "El camarero trae la carta. Los ojos de Soobin se iluminan como si viera un tesoro. Señala frenéticamente una foto en el menú.",
    dialogue: "Olvida todo lo que dije. Misión prioritaria: Tienen el pan de nata con frijol rojo edición limitada. Si no lo probamos, lloraré. Literalmente.",
    emotion: SoobinEmotion.PROUD, // IMAGEN: Soobin señalando algo con mucha emoción/orgullo
    isEnding: false,
    choices: [
      { text: "Pide dos. Confío en tu paladar.", nextStepId: "SCENE_5_EATING" },
      { text: "No tengo mucha hambre...", nextStepId: "SCENE_5_FORCE_FEED" }
    ]
  },

  "SCENE_5_EATING": {
    id: "SCENE_5_EATING",
    narrative: "Llega el pan. Soobin come con una felicidad tan pura que es contagiosa. Se mancha un poco la comisura del labio con crema.",
    dialogue: "Mmm... esto es la gloria. ¿Ves? La vida no se trata de dietas, se trata de esto.",
    emotion: SoobinEmotion.HAPPY, // IMAGEN: Soobin comiendo o muy feliz con las mejillas llenas
    isEnding: false,
    choices: [
      { text: "(Limpiarle la crema con una servilleta suavemente)", nextStepId: "SCENE_6_TOUCH" },
      { text: "Tienes algo ahí... en la cara.", nextStepId: "SCENE_6_POINT" }
    ]
  },

  "SCENE_5_FORCE_FEED": {
    id: "SCENE_5_FORCE_FEED",
    dialogue: "¿Qué? Inaceptable. Mira, partimos uno a la mitad. Si no te gusta, te compro una casa. Así de seguro estoy.",
    emotion: SoobinEmotion.SARCASTIC, // IMAGEN: Soobin desafiante/sarcástico
    isEnding: false,
    choices: [
      { text: "Vale, vale. Acepto el reto.", nextStepId: "SCENE_6_POINT" }
    ]
  },

  "SCENE_6_TOUCH": {
    id: "SCENE_6_TOUCH",
    narrative: "Su respiración se detiene un segundo cuando tu mano se acerca a su cara. Se queda inmóvil, mirándote fijamente a los ojos.",
    dialogue: "Oh... gracias. Normalmente me regañan los estilistas por hacer eso.",
    emotion: SoobinEmotion.BLUSHED, // IMAGEN: Soobin muy sonrojado, tocándose la cara
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "SCENE_7_THE_ESCAPE" }]
  },

  "SCENE_6_POINT": {
    id: "SCENE_6_POINT",
    narrative: "Se limpia rápidamente con la lengua, lo cual, irónicamente, se ve bastante atractivo.",
    dialogue: "¿Ya está? Menos mal. Mi imagen de chico 'cool' habría quedado destruida.",
    emotion: SoobinEmotion.HANDSOME, // IMAGEN: Soobin guiñando o sonriendo de lado
    isEnding: false,
    choices: [{ text: "Nunca fuiste cool, acéptalo.", nextStepId: "SCENE_7_THE_ESCAPE" }]
  },

  // =========================================================================
  // ACTO 3: LA HUIDA (DRAMA)
  // =========================================================================

  "SCENE_7_THE_ESCAPE": {
    id: "SCENE_7_THE_ESCAPE",
    narrative: "De repente, un grupo de chicas entra al bar ruidosamente. Una lleva una tote bag con la cara de Yeonjun. Soobin se congela.",
    dialogue: "(Voz muy baja) Código rojo. Me reconocen y esto se convierte en un fanmeeting. Tengo que salir. ¿Vienes o te quedas?",
    emotion: SoobinEmotion.SURPRISED, // IMAGEN: Soobin alerta, mirando a la puerta asustado
    isEnding: false,
    choices: [
      { text: "Te sigo. ¡Corre!", nextStepId: "SCENE_8_OUTSIDE" }
    ]
  },

  "SCENE_8_OUTSIDE": {
    id: "SCENE_8_OUTSIDE",
    narrative: "Salen por la puerta trasera hacia un callejón nevado. El aire frío golpea sus rostros calientes por la calefacción. Soobin se apoya en la pared, recuperando el aliento y riendo.",
    dialogue: "Jajaja... wow. Eso fue adrenalina pura. Gracias por cubrirme la espalda, agente Aranza.",
    emotion: SoobinEmotion.HAPPY, // IMAGEN: Soobin riendo, apoyado en una pared o relajado
    isEnding: false,
    choices: [
      { text: "¿Y ahora qué? ¿Se acabó la noche?", nextStepId: "SCENE_9_CHOICE_HUB" }
    ]
  },

  // =========================================================================
  // ACTO 4: LA DECISIÓN (RAMIFICACIÓN PRINCIPAL)
  // =========================================================================

  "SCENE_9_CHOICE_HUB": {
    id: "SCENE_9_CHOICE_HUB",
    dialogue: "No quiero volver al dormitorio aún. Estoy demasiado despierto. Tengo tres opciones, tú eliges el destino:",
    emotion: SoobinEmotion.NEUTRAL, // IMAGEN: Soobin esperando respuesta
    narrative: "Te mira esperando que decidas el rumbo de la cita.",
    isEnding: false,
    choices: [
      { text: "Tengo hambre de algo salado. (Ir a Tienda de Conveniencia)", nextStepId: "ROUTE_A_START" },
      { text: "Quiero algo romántico y tranquilo. (Ir al Río Han)", nextStepId: "ROUTE_B_START" },
      { text: "Hace demasiado frío, busquemos un lugar privado. (Ir al Coche)", nextStepId: "ROUTE_C_START" }
    ]
  },

  // --------------------------------------------------------------------------
  // RUTA A: TIENDA DE CONVENIENCIA (Ramen & Chill) - Vibe: Divertido/Cute
  // --------------------------------------------------------------------------
  
  "ROUTE_A_START": {
    id: "ROUTE_A_START",
    narrative: "Caminan hasta una tienda 24h. La luz fluorescente zumba. Soobin corre al pasillo de los ramen instantáneos.",
    dialogue: "Bienvenida a mi palacio. Aquí es donde vengo cuando no puedo dormir. ¿Picante nivel 'me arrepiento de nacer' o 'quesito suave'?",
    emotion: SoobinEmotion.PROUD, // IMAGEN: Soobin mostrando dos vasos de ramen
    isEnding: false,
    choices: [
      { text: "Picante. Soy valiente.", nextStepId: "ROUTE_A_SPICY" },
      { text: "Quesito suave, por favor.", nextStepId: "ROUTE_A_CHEESE" }
    ]
  },

  "ROUTE_A_SPICY": {
    id: "ROUTE_A_SPICY",
    dialogue: "Uff, eres ruda. Me gusta. Pero te advierto: si lloras, me voy a reír y te tomaré fotos.",
    emotion: SoobinEmotion.SARCASTIC, // IMAGEN: Soobin burlándose/riendo
    isEnding: false,
    choices: [{ text: "Preparan el ramen y se sientan...", nextStepId: "ROUTE_A_DEEP" }]
  },

  "ROUTE_A_CHEESE": {
    id: "ROUTE_A_CHEESE",
    dialogue: "Sabia decisión. El queso reconforta el alma. Eres de las mías.",
    emotion: SoobinEmotion.HAPPY, // IMAGEN: Soobin sonriendo tiernamente
    isEnding: false,
    choices: [{ text: "Preparan el ramen y se sientan...", nextStepId: "ROUTE_A_DEEP" }]
  },

  "ROUTE_A_DEEP": {
    id: "ROUTE_A_DEEP",
    narrative: "Sentados en los taburetes de plástico, viendo la nieve caer fuera. Soobin juega con sus palillos.",
    dialogue: "¿Sabes? A veces desearía ser solo un chico universitario que viene aquí después de estudiar. Sin cámaras, sin expectativas.",
    emotion: SoobinEmotion.DISAPPOINTED, // IMAGEN: Soobin mirando hacia abajo triste/pensativo
    isEnding: false,
    choices: [
      { text: "Esta noche eres solo eso. Solo un chico comiendo ramen.", nextStepId: "ROUTE_A_GAMER_REVEAL" }
    ]
  },

  "ROUTE_A_GAMER_REVEAL": {
    id: "ROUTE_A_GAMER_REVEAL",
    dialogue: "Tienes razón. Y este chico universitario te preguntaría... ¿juegas videojuegos? Porque tengo una racha en Overwatch que nadie puede romper.",
    emotion: SoobinEmotion.CONFUSED, // IMAGEN: Soobin curioso/interesado
    isEnding: false,
    choices: [
      { text: "¿Me estás retando? Te voy a destruir.", nextStepId: "ENDING_SETUP_GAMER" },
      { text: "No juego mucho, pero puedo aprender.", nextStepId: "ENDING_SETUP_FRIEND" }
    ]
  },

  // --------------------------------------------------------------------------
  // RUTA B: RÍO HAN (Paseo Romántico) - Vibe: Melancólico/Profundo
  // --------------------------------------------------------------------------

  "ROUTE_B_START": {
    id: "ROUTE_B_START",
    narrative: "El río Han es inmenso y oscuro. Las luces de la ciudad se reflejan en el agua. El viento es helado. Aranza tirita un poco. Soobin se quita su bufanda larga y la enrolla alrededor del cuello de Aranza. Huele a perfume caro y suavizante.",
    dialogue: "Toma. No acepto un no por respuesta.",
    emotion: SoobinEmotion.NEUTRAL, // IMAGEN: Soobin quitándose la bufanda o abrigo
    isEnding: false,
    choices: [
      { text: "Huele muy bien... gracias.", nextStepId: "ROUTE_B_SCENT" }
    ]
  },

  "ROUTE_B_SCENT": {
    id: "ROUTE_B_SCENT",
    dialogue: "¿Verdad? Es mi favorito. Ahora tienes mi 'aroma'. Eso suena un poco posesivo, lo siento.",
    emotion: SoobinEmotion.BLUSHED, // IMAGEN: Soobin tocándose la nuca, apenado
    isEnding: false,
    choices: [
      { text: "No me molesta en absoluto.", nextStepId: "ROUTE_B_CONFESSION" }
    ]
  },

  "ROUTE_B_CONFESSION": {
    id: "ROUTE_B_CONFESSION",
    narrative: "Caminan en silencio un rato. Sus manos se rozan varias veces.",
    dialogue: "Aranza... es raro. Normalmente me cuesta abrirme con gente nueva. Soy muy introvertido, ¿sabes? Pero contigo es... fácil.",
    emotion: SoobinEmotion.SHY, // IMAGEN: Soobin mirando sus pies o tímido
    isEnding: false,
    choices: [
      { text: "Siento lo mismo. Como si nos conociéramos de antes.", nextStepId: "ENDING_SETUP_ROMANTIC" },
      { text: "Es el frío, congela el cerebro y nos hace honestos.", nextStepId: "ENDING_SETUP_REALISTIC" }
    ]
  },

  // --------------------------------------------------------------------------
  // RUTA C: COCHE (Privacidad) - Vibe: Tensión/Lujo
  // --------------------------------------------------------------------------

  "ROUTE_C_START": {
    id: "ROUTE_C_START",
    narrative: "Llega una van negra de vidrios polarizados. El interior es cálido y huele a cuero. Soobin se reclina en el asiento, cerrando los ojos un momento.",
    dialogue: "Aquí nadie nos ve. Podemos ser invisibles un rato. ¿Te molesta si pongo música?",
    emotion: SoobinEmotion.HANDSOME, // IMAGEN: Soobin relajado, recostado, galán
    isEnding: false,
    choices: [
      { text: "Pon lo que quieras.", nextStepId: "ROUTE_C_MUSIC" }
    ]
  },

  "ROUTE_C_MUSIC": {
    id: "ROUTE_C_MUSIC",
    narrative: "Suena una balada R&B suave. Él tararea la melodía con su voz grave y profunda. El ambiente se vuelve denso, cargado de tensión.",
    dialogue: "¿Te llevo a tu hotel? ¿O damos una vuelta más por Gangnam?",
    emotion: SoobinEmotion.HANDSOME, // IMAGEN: Soobin mirando intenso a los ojos
    isEnding: false,
    choices: [
      { text: "Una vuelta más. No quiero bajarme aún.", nextStepId: "ROUTE_C_INTENSE" },
      { text: "Estoy cansada, mejor al hotel.", nextStepId: "FINAL_D_REALIST" } // Salida rápida
    ]
  },

  "ROUTE_C_INTENSE": {
    id: "ROUTE_C_INTENSE",
    dialogue: "Me alegra que dijeras eso. Porque no quería dejarte ir todavía.",
    emotion: SoobinEmotion.HANDSOME, // IMAGEN: Soobin acercándose un poco
    narrative: "Se gira hacia ti. Están muy cerca en el asiento trasero.",
    isEnding: false,
    choices: [
      { text: "(Mirarlo a los labios)", nextStepId: "ENDING_SETUP_KISS" },
      { text: "Cuéntame sobre tu próximo concierto.", nextStepId: "ENDING_SETUP_FAN" }
    ]
  },

  // =========================================================================
  // CONFIGURACIÓN DE FINALES (PRE-CLIMAX)
  // =========================================================================

  "ENDING_SETUP_GAMER": {
    id: "ENDING_SETUP_GAMER",
    dialogue: "Jajaja, ¿me vas a destruir? Quiero ver eso. Oye, esto no puede quedar así.",
    emotion: SoobinEmotion.HAPPY,
    isEnding: false,
    choices: [{ text: "No, definitivamente no.", nextStepId: "FINAL_G_GAMER" }]
  },

  "ENDING_SETUP_ROMANTIC": {
    id: "ENDING_SETUP_ROMANTIC",
    dialogue: "Se hace tarde. Mañana tengo agenda a las 6 AM. Pero... maldición, no quiero despedirme con un simple 'adiós'.",
    emotion: SoobinEmotion.SAD_BUT_GRATEFUL, // Fallback visual
    isEnding: false,
    choices: [{ text: "Dame tu teléfono.", nextStepId: "FINAL_A_PERFECT" }]
  },

  "ENDING_SETUP_REALISTIC": {
    id: "ENDING_SETUP_REALISTIC",
    dialogue: "Sí... el frío. Debe ser eso.",
    emotion: SoobinEmotion.DISAPPOINTED,
    narrative: "Su sonrisa se apaga un poco. La magia se rompe levemente.",
    isEnding: false,
    choices: [{ text: "Ha sido una noche bonita, Soobin.", nextStepId: "FINAL_B_MELANCHOLIC" }]
  },

  "ENDING_SETUP_KISS": {
    id: "ENDING_SETUP_KISS",
    narrative: "La distancia entre los dos es mínima. Él duda, mirando tus ojos, luego tus labios, luego tus ojos otra vez.",
    dialogue: "Aranza... ¿puedo...?",
    emotion: SoobinEmotion.SHY, // IMAGEN: Soobin muy cerca, nervioso
    isEnding: false,
    choices: [
      { text: "Sí...", nextStepId: "FINAL_F_KISS" },
      { text: "Mejor no nos compliquemos.", nextStepId: "FINAL_E_BAD" }
    ]
  },

  "ENDING_SETUP_FRIEND": {
    id: "ENDING_SETUP_FRIEND",
    dialogue: "Bueno, tal vez los juegos no son lo tuyo. Pero te puedo enseñar.",
    emotion: SoobinEmotion.NEUTRAL,
    isEnding: false,
    choices: [{ text: "Sería divertido.", nextStepId: "FINAL_C_VIP" }]
  },

  "ENDING_SETUP_FAN": {
    id: "ENDING_SETUP_FAN",
    dialogue: "Ah, cierto. El trabajo. Bueno... si te interesa tanto...",
    emotion: SoobinEmotion.NEUTRAL,
    isEnding: false,
    choices: [{ text: "Claro que me interesa.", nextStepId: "FINAL_C_VIP" }]
  },

  // =========================================================================
  // LOS 7 FINALES
  // =========================================================================

  // FINAL 1: PERFECTO (Hilo Rojo)
  "FINAL_A_PERFECT": {
    id: "FINAL_A_PERFECT",
    endingTitle: "Final Perfecto: El Hilo Rojo",
    narrative: "Soobin te entrega su teléfono desbloqueado para que anotes tu número. Sus dedos rozan los tuyos. Al llegar al hotel, recibes un mensaje: 'No puedo dejar de pensar en lo bien que hueles con mi bufanda. ¿Mañana desayuno?'.",
    dialogue: "Prométeme que contestarás cuando te escriba. No suelo hacer esto.",
    emotion: SoobinEmotion.BLUSHED, // IMAGEN: Soobin muy sonrojado y feliz
    isEnding: true,
    choices: []
  },

  // FINAL 2: MELANCÓLICO (Blue Hour)
  "FINAL_B_MELANCHOLIC": {
    id: "FINAL_B_MELANCHOLIC",
    endingTitle: "Final Melancólico: Blue Hour",
    narrative: "Se despiden bajo la nieve. No hay intercambio de números, solo un momento compartido que quedará congelado en el tiempo. Sabes que lo volverás a ver, pero solo en pantallas gigantes.",
    dialogue: "Gracias por tratarme como una persona normal por unas horas. Fue el mejor regalo.",
    emotion: SoobinEmotion.SAD_BUT_GRATEFUL, // IMAGEN: Soobin sonriendo triste/agradecido (Usar NEUTRAL o HAPPY suave)
    isEnding: true,
    choices: []
  },

  // FINAL 3: VIP (La Fan Afortunada)
  "FINAL_C_VIP": {
    id: "FINAL_C_VIP",
    endingTitle: "Final VIP: Backstage Pass",
    narrative: "No consigues una cita, pero al día siguiente llega un sobre a tu hotel. Pase 'All Access' para el concierto de mañana y una nota: 'Ven a saludarme después del show. Trae pan'.",
    dialogue: "Te veré desde el escenario. Grita fuerte para que te escuche.",
    emotion: SoobinEmotion.PROUD, // IMAGEN: Soobin guiñando o haciendo gesto cool
    isEnding: true,
    choices: []
  },

  // FINAL 4: REALISTA (Cenicienta)
  "FINAL_D_REALIST": {
    id: "FINAL_D_REALIST",
    endingTitle: "Final Realista: Cenicienta",
    narrative: "El coche te deja. Él no baja por seguridad. Es un final abrupto para una noche mágica, pero así es la vida de una estrella. Te quedas con la anécdota.",
    dialogue: "Cuídate, Aranza. Que tengas un buen viaje de vuelta.",
    emotion: SoobinEmotion.NEUTRAL, // IMAGEN: Soobin serio, educado
    isEnding: true,
    choices: []
  },

  // FINAL 5: MALO (Desconexión)
  "FINAL_E_BAD": {
    id: "FINAL_E_BAD",
    endingTitle: "Final Roto: Desconexión",
    narrative: "El rechazo crea un aire incómodo en el coche. El resto del viaje es silencioso. Al bajar, él ni siquiera te mira a los ojos.",
    dialogue: "Adiós.",
    emotion: SoobinEmotion.FAKE_INDIFFERENCE, // IMAGEN: Soobin mirando por la ventana, frío
    isEnding: true,
    choices: []
  },

  // FINAL 6: SECRETO (Beso Robado)
  "FINAL_F_KISS": {
    id: "FINAL_F_KISS",
    endingTitle: "Final Secreto: El Beso Robado",
    narrative: "El beso es torpe pero eléctrico. Él huele a vainilla. Se separan y él se cubre la cara con ambas manos, totalmente rojo hasta las orejas.",
    dialogue: "Wow... ok. Eso... eso acaba de pasar. Definitivamente no voy a poder dormir hoy.",
    emotion: SoobinEmotion.SURPRISED, // IMAGEN: Soobin tocándose los labios o muy sorprendido
    isEnding: true,
    choices: []
  },

  // FINAL 7: GAMER (Duo Carry)
  "FINAL_G_GAMER": {
    id: "FINAL_G_GAMER",
    endingTitle: "Final Gamer: Duo Carry",
    narrative: "En lugar de pedirte el teléfono, saca su celular y abre Discord. 'Agrégame. Si eres tan buena como dices, necesito una compañera para subir de rango'.",
    dialogue: "No llegues tarde a la partida, 'noob'. Te espero online.",
    emotion: SoobinEmotion.HAPPY, // IMAGEN: Soobin riendo o haciendo gesto de victoria
    isEnding: true,
    choices: []
  }
};

export const getStep = (stepId: string): GameStepData => {
  const step = STORY_NODES[stepId];
  if (!step) {
    console.warn(`Step ${stepId} not found, restarting.`);
    return STORY_NODES["START"];
  }
  return step;
};

export const initializeGame = (): GameStepData => {
  return getStep("START");
};