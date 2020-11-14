import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import Panel from 'components/Panel';
import Button from 'components/Button';
import Header from 'components/Header';
import Input from 'components/Input';
import Loading from 'components/Loading';
import Select from 'components/Select';

import { ApplicationState } from 'store';
import { loadRequest } from 'store/ducks/categories/actions';
import { Category } from 'store/ducks/categories/types';

import { validateEmail, validateCnpj, validatePhone, validateAccount, validateAgency } from 'utils/validators';
import { maskCnpj, maskPhone, maskAgency, maskAccount } from 'utils/masks';

import { Container } from './styles';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: ApplicationState) => ({
    categories: state.categories,
  }));

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

  const [isValidAgency, setIsValidAgency] = useState(true);
  const [agency, setAgency] = useState('');

  const [isValidAccount, setIsValidAccount] = useState(true);
  const [account, setAccount] = useState('');

  const [category, setCategory] = useState('-1');

  const [active, setActive] = useState(true);

  const debounceNameCheckIsValid = useCallback(
    debounce(async (st) => {
      if (!st) {
        setIsValidName(false);
        return;
      }
      setIsValidName(true);
    }, 1000),
    [validateEmail, debounce],
  );

  const debounceEmailCheckIsValid = useCallback(
    debounce(async (st) => {
      if (!st) {
        setIsValidEmail(true);
        return;
      }
      setIsValidEmail(validateEmail(st));
    }, 1000),
    [validateEmail, debounce],
  );

  const debounceCnpjCheckIsValid = useCallback(
    debounce(async (st) => {
      setIsValidCnpj(validateCnpj(st));
    }, 1000),
    [validateCnpj, debounce],
  );

  const debouncePhoneCheckIsValid = useCallback(
    debounce(async (st) => {
      if (category === process.env.REACT_APP_SUPERMARKET_ID) {
        setIsValidPhone(validatePhone(st));
        return;
      }
      setIsValidPhone(true);
    }, 1000),
    [validateAccount, debounce],
  );

  const debounceAccountCheckIsValid = useCallback(
    debounce(async (st) => {
      if (!st) {
        setIsValidAccount(true);
        return;
      }
      setIsValidAccount(validateAccount(st));
    }, 1000),
    [validateAccount, debounce],
  );

  const debounceAgencyCheckIsValid = useCallback(
    debounce(async (st) => {
      if (!st) {
        setIsValidAgency(true);
        return;
      }
      setIsValidAgency(validateAgency(st));
    }, 1000),
    [validateAgency, debounce],
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'inp_name':
        setName(e.target.value);
        debounceNameCheckIsValid(e.target.value);
        break;
      case 'inp_fantasy_name':
        setFantasyName(e.target.value);
        break;
      case 'inp_cnpj':
        setCnpj(maskCnpj(e.target.value));
        debounceCnpjCheckIsValid(e.target.value);
        break;
      case 'inp_email':
        setEmail(e.target.value);
        debounceEmailCheckIsValid(e.target.value);
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
        setPhone(maskPhone(e.target.value));
        debouncePhoneCheckIsValid(maskPhone(e.target.value));
        break;
      case 'inp_agency':
        setAgency(maskAgency(e.target.value));
        debounceAgencyCheckIsValid(maskAgency(e.target.value));
        break;
      case 'inp_account':
        setAccount(maskAccount(e.target.value));
        debounceAccountCheckIsValid(maskAccount(e.target.value));
        break;
      case 'chk_active':
        setActive(e.target.checked);
        break;
      default:
    }
  }, []);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    debouncePhoneCheckIsValid(phone);
  };

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  const categoriesList = useMemo(() => {
    const lst = categories.data.map((cat: Category) => ({
      key: cat.id.toString(),
      value: cat.id.toString(),
      label: cat.name,
    }));
    return [{ key: '-1', value: '-1', label: 'Selecione um' }, ...lst];
  }, [categories, categories.data]);

  return (
    <>
      <Header />
      <Container>
        <Panel>
          <Loading isLoading={categories.loading}>
            <Input
              id="inp_name"
              type="text"
              label="Razão social:"
              isInvalid={!isValidName}
              maxLength={100}
              value={name}
              onChange={handleChange}
            />
            <Input
              id="inp_fantasy_name"
              type="text"
              label="Nome Fantasia:"
              maxLength={100}
              value={email}
              onChange={handleChange}
            />
            <Input
              id="inp_cnpj"
              type="text"
              label="CNPJ:"
              isInvalid={!isValidCnpj}
              maxLength={18}
              value={cnpj}
              onChange={handleChange}
            />
            <Input
              id="inp_email"
              type="text"
              label="E-email:"
              isInvalid={!isValidEmail}
              maxLength={100}
              onChange={handleChange}
            />
            <Input
              id="inp_address"
              type="text"
              label="Endereço:"
              maxLength={100}
              value={address}
              onChange={handleChange}
            />
            <Input id="inp_city" type="text" label="Cidade:" maxLength={100} value={city} onChange={handleChange} />
            <Input id="inp_state" type="text" label="Estado:" maxLength={100} value={state} onChange={handleChange} />
            <Input
              id="inp_phone"
              type="text"
              label="Telefone:"
              isInvalid={!isValidPhone}
              maxLength={15}
              value={phone}
              onChange={handleChange}
            />
            <Input
              id="inp_agency"
              type="text"
              label="Agência:"
              isInvalid={!isValidAgency}
              maxLength={5}
              value={agency}
              onChange={handleChange}
            />
            <Input
              id="inp_account"
              type="text"
              label="Conta:"
              isInvalid={!isValidAccount}
              maxLength={8}
              value={account}
              onChange={handleChange}
            />
            <Select onChange={handleChangeCategory} list={categoriesList} value={category} />
            <label htmlFor="chk_active">
              Ativo
              <input id="chk_active" type="checkbox" onChange={handleChange} />
            </label>
            <Button
              label="Enviar"
              onClick={() => {
                console.log('------enviar-----');
              }}
            />
          </Loading>
        </Panel>
      </Container>
    </>
  );
};

export default Register;
