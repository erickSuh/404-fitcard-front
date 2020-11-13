/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
export const validateEmail = (email: string) => {
  if (!email) return false;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateCnpj = (cnpj: string) => {
  // 41.341.433/0001-98
  if (!cnpj) return false;
  const strCNPJ = cnpj.replace(/[^\d]+/g, '');

  if (
    strCNPJ === '00000000000000' ||
    strCNPJ === '11111111111111' ||
    strCNPJ === '22222222222222' ||
    strCNPJ === '33333333333333' ||
    strCNPJ === '44444444444444' ||
    strCNPJ === '55555555555555' ||
    strCNPJ === '66666666666666' ||
    strCNPJ === '77777777777777' ||
    strCNPJ === '88888888888888' ||
    strCNPJ === '99999999999999' ||
    strCNPJ.length !== 14
  ) {
    return false;
  }

  try {
    let tamanho = strCNPJ.length - 2;
    let numeros = strCNPJ.substring(0, tamanho);
    const digitos = strCNPJ.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += Number.parseInt(numeros.charAt(tamanho - i), 10) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != Number.parseInt(digitos.charAt(0), 10)) {
      return false;
    }

    tamanho += 1;
    numeros = strCNPJ.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let k = tamanho; k >= 1; k--) {
      soma += Number.parseInt(numeros.charAt(tamanho - k), 10) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== Number.parseInt(digitos.charAt(1), 10)) {
      return false;
    }

    return true;
  } catch (e) {
    console.log('error: ', e);
    return false;
  }
};

export const validateAgency = (agency: string) => {
  if (!agency) return false;
  const re = /^(\d{3})-(\d{1})/g;
  return re.test(String(agency).toLowerCase());
};

export const validateAccount = (agency: string) => {
  if (!agency) return false;
  const re = /^(\d{2})\.(\d{3})-(\d)/;
  return re.test(String(agency).toLowerCase());
};
