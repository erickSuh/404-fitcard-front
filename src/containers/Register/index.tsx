import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

import Panel from '../../components/Panel';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container } from './styles';
import { validateEmail } from '../../utils/validators';
import { maskCnpj } from '../../utils/masks';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const [fantasyName, setFantasyName] = useState('');

  const [cnpj, setCnpj] = useState('');
  const [isValidCnpj, setIsValidCnpj] = useState(true);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [address, setAddress] = useState('');

  const [city, setCity] = useState('');

  const [state, setState] = useState('');

  const debounceEmailCheckIsValid = useCallback(
    debounce(async (st) => {
      setIsValidName(validateEmail(st));
    }, 1000),
    [validateEmail, debounce],
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'inp_name':
        setName(e.target.value);
        debounceEmailCheckIsValid(e.target.value);
        break;
      case 'inp_fantasy_name':
        setFantasyName(e.target.value);
        break;
      case 'inp_cnpj':
        setCnpj(maskCnpj(e.target.value));
        break;
      case 'inp_email':
        setEmail(e.target.value);
        break;
      case 'inp_address':
        setAddress(e.target.value);
        break;
      case 'inp_city':
        setCity(e.target.value);
        break;
      case 'inp_state':
        setState(e.target.value);
        break;
      case 'inp_phone':
        setPhone(e.target.value);
        break;
      default:
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Panel>
          <Input
            id="inp_name"
            type="text"
            label="Razão social:"
            isInvalid={!isValidName}
            maxLength={100}
            value={name}
            onChange={handleChange}
          />
          <Input id="inp_fantasy_name" type="text" label="Nome Fantasia:" maxLength={100} />
          <Input
            id="inp_cnpj"
            type="text"
            label="CNPJ:"
            isInvalid={!isValidCnpj}
            maxLength={18}
            value={cnpj}
            onChange={handleChange}
          />
          <Input id="inp_email" type="text" label="E-email:" isInvalid={!isValidEmail} maxLength={100} />
          <Input id="inp_address" type="text" label="Endereço:" maxLength={100} />
          <Input id="inp_city" type="text" label="Cidade:" maxLength={100} />
          <Input id="inp_state" type="text" label="Estado:" maxLength={100} />
          <Input id="inp_phone" type="text" label="Telefone:" isInvalid={!isValidPhone} maxLength={15} />
          <Button
            label="Enviar"
            onClick={() => {
              console.log('------enviar-----');
            }}
          />
        </Panel>
      </Container>
    </>
  );
};

export default Register;
