export const maskCnpj = (cnpj: string) => {
  if (!cnpj) return cnpj;
  return cnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};
