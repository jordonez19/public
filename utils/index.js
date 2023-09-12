export function decodeValue(val) {
  // Try to parse as json
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch (e) {
      console.log('(decodeValue) not_parse_value');
    }
  }

  // Return as is
  return val;
}

export function encodeValue(val) {
  if (typeof val === 'string') {
    return val;
  }
  return JSON.stringify(val);
}

export function stateHelpdeskRequest(state) {
  let result = ""
  if (state === "PENDING") {
    result = "PENDIENTE"
  }
  if (state === "IN PROGRESS") {
    result = "EN PROCESO"
  }
  if (state === "PENDING-APPROVED") {
    result = "PENDIENTE APROBACION"
  }
  if (state === "PENDING-EXECUTION") {
    result = "PENDIENTE EJECUCION"
  }
  if (state === "IN-EXECUTION") {
    result = "EN CURSO"
  }
  if (state === "COMPLETED") {
    result = "FINALIZADA"
  }
  if (state === "CANCEL") {
    result = "CANCELADA"
  }
  if (state === "REJECT") {
    result = "RECAHZADA"
  }
  if (state === "READY") {
    result = "FORMULARIO COMPLETADO"
  }
  if (state === "SIGNATURES") {
    result = "PENDIENTE FIRMAS"
  }

  return result
}

export function stateSignaturesRequest(state) {
  let result = state
  if (state === "ACTIVE") result = "PENDIENTE FIRMA"
  if (state === "COMPLETED") result = "FIRMADA"
  if (state === "REJECT") result = "REMOVIDA"

  return result

}

export function validateEmail(email) {
  if (!!email) {
    return String(email).match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  return false
};

export function validatePhoneMovil(value) {
  if (!!value) {
    return String(value).match(/\d/g).length === 10;
  }
  return false
};


export async function validarURL(miurl) {
  try {
    
    await fetch(new Request(miurl, {method: 'HEAD', mode: 'no-cors'}))
    return true
  } catch (err) {
    return false;

  }
}

export function handleShowImage (file) {
  let result = file
  let fileArray = file.split('.')
  let extension = fileArray[fileArray.length - 1]
  extension = extension.toLowerCase()
  if(extension != 'png' && extension != 'jpg' && extension != 'jpeg'){
      result = 'https://transolicar-public.s3.amazonaws.com/images/attachmentDefault.png'
  }
  return result
} 