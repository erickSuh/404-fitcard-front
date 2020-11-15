import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { debounce } from 'lodash';
import { useToasts } from 'react-toast-notifications';

import Panel from 'components/Panel';
import Button from 'components/Button';
import Header from 'components/Header';
import Input from 'components/Input';
import Loading from 'components/Loading';
import Select from 'components/Select';
import Checkbox from 'components/Checkbox';

import { loadCategories } from 'store/categories/actions';
import { loadStates } from 'store/states/actions';
import { createCompany, loadCompany, updateCompany, deleteCompany } from 'store/companies/actions';

import { ApplicationState } from 'store';
import { Category } from 'store/categories/types';
import { State } from 'store/states/types';
import { Company } from 'store/companies/types';

import { validateEmail, validateCnpj, validatePhone, validateAccount, validateAgency } from 'utils/validators';
import { maskCnpj, maskPhone, maskAgency, maskAccount } from 'utils/masks';

import { Container } from './styles';

interface ParamTypes {
  id?: string;
}

const Register: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();
  const { categories, states, companies } = useSelector((state: ApplicationState) => ({
    categories: state.categories,
    states: state.states,
    companies: state.companies,
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

  const [state, setState] = useState('-1');

  const [isValidAgency, setIsValidAgency] = useState(true);
  const [agency, setAgency] = useState('');

  const [isValidAccount, setIsValidAccount] = useState(true);
  const [account, setAccount] = useState('');

  const [category, setCategory] = useState('-1');

  const [active, setActive] = useState(true);

  const [createdDate, setCreatedDate] = useState<Date>(new Date());
  const [updatedDate, setUpdatedDate] = useState<Date>(new Date());

  const checkName = (st: string) => {
    if (!st) {
      setIsValidName(false);
      return false;
    }
    setIsValidName(true);
    return true;
  };

  const debounceNameCheckIsValid = useCallback(
    debounce(async (st) => {
      checkName(st);
    }, 1000),
    [checkName],
  );

  const checkEmail = (st: string) => {
    if (!st) {
      setIsValidEmail(true);
      return true;
    }
    const isValid = validateEmail(st);
    setIsValidEmail(isValid);
    return isValid;
  };

  const debounceEmailCheckIsValid = useCallback(
    debounce(async (st) => {
      checkEmail(st);
    }, 1000),
    [checkEmail],
  );

  const checkCnpj = (st: string) => {
    const isValid = validateCnpj(st);
    setIsValidCnpj(isValid);
    return isValid;
  };

  const debounceCnpjCheckIsValid = useCallback(
    debounce(async (st) => {
      checkCnpj(st);
    }, 1000),
    [validateCnpj, debounce],
  );

  const checkPhone = useCallback((st: string, innerCategory: string) => {
    if (innerCategory === process.env.REACT_APP_SUPERMARKET_ID || st) {
      const isValid = validatePhone(st);
      setIsValidPhone(isValid);
      return isValid;
    }
    setIsValidPhone(true);
    return true;
  }, []);

  const debouncePhoneCheckIsValid = useCallback(
    debounce(async (st, innerCategory) => {
      checkPhone(st, innerCategory);
    }, 1000),
    [checkPhone],
  );

  const checkAccount = (st: string) => {
    if (!st) {
      setIsValidAccount(true);
      return true;
    }
    const isValid = validateAccount(st);
    setIsValidAccount(isValid);
    return isValid;
  };

  const debounceAccountCheckIsValid = useCallback(
    debounce(async (st) => {
      checkAccount(st);
    }, 1000),
    [checkAccount],
  );

  const checkAgency = (st: string) => {
    if (!st) {
      setIsValidAgency(true);
      return true;
    }
    const isValid = validateAgency(st);
    setIsValidAgency(isValid);
    return isValid;
  };

  const debounceAgencyCheckIsValid = useCallback(
    debounce(async (st) => {
      checkAgency(st);
    }, 1000),
    [checkAgency],
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
        debouncePhoneCheckIsValid(maskPhone(e.target.value), category);
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
    e.persist();
    setCategory(e.target.value);
    debouncePhoneCheckIsValid(phone, e.target.value);
  };

  const handleChangeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };

  const handleSendForm = () => {
    if (
      !(
        checkName(name) &&
        checkCnpj(cnpj) &&
        checkEmail(email) &&
        checkPhone(phone, category) &&
        checkAgency(agency) &&
        checkAccount(account)
      )
    ) {
      addToast('Falta alguma informação, verifique e tente novamente', { appearance: 'error', autoDismiss: true });
      return;
    }
    const arrPhone = phone.split(')');
    const ddd = arrPhone[0].replace(/\D/g, '');
    const numbersPhone = arrPhone[1].replace(/\D/g, '');

    const company: Company = {
      name,
      fantasyName,
      cnpj: cnpj.replace(/\D/g, ''),
      email,
      address,
      city,
      state: Number.parseInt(state, 10),
      ddd,
      phone: numbersPhone,
      categoryId: Number.parseInt(category, 10),
      active,
      agency,
      account,
    };

    if (!id) {
      dispatch(createCompany(company));
      return;
    }
    dispatch(
      updateCompany(company, id, () => {
        history.push('/');
      }),
    );
  };

  const handleDelete = () => {
    if (!id) {
      addToast('Algo deu errado', { appearance: 'error', autoDismiss: true });
      return;
    }
    dispatch(
      deleteCompany(id, () => {
        history.push('/');
      }),
    );
  };

  useEffect(() => {
    if (id) {
      dispatch(loadCompany(id));
    }
    dispatch(loadCategories());
    dispatch(loadStates());
  }, [dispatch, id]);

  useEffect(() => {
    if (!companies.company) {
      return;
    }

    const {
      name: iname,
      fantasyName: ifantasyName,
      cnpj: icnpj,
      email: iemail,
      address: iaddress,
      city: icity,
      state: istate,
      ddd,
      phone: iphone,
      categoryId: icategory,
      active: iactive,
      agency: iagency,
      account: iaccount,
      createdAt,
      updateAt,
    } = companies.company;
    if (iname) setName(iname);

    if (ifantasyName) setFantasyName(ifantasyName);
    if (icnpj) setCnpj(icnpj);
    if (iemail) setEmail(iemail);
    if (iaddress) setAddress(iaddress);
    if (icity) setCity(icity);
    if (istate) setState(istate.toString());
    if (ddd && iphone) setPhone(maskPhone(ddd + iphone));
    if (icategory) setCategory(icategory.toString());
    if (iactive) setActive(iactive);
    if (iagency) setAgency(iagency);
    if (iaccount) setAccount(iaccount);
    if (createdAt) setCreatedDate(createdAt);
    if (updateAt) setUpdatedDate(updateAt);
  }, [companies.company]);

  const categoriesList = useMemo(() => {
    const lst = categories.data.map((cat: Category) => ({
      key: cat.id.toString(),
      value: cat.id.toString(),
      label: cat.name,
    }));
    return [{ key: '-1', value: '-1', label: 'Selecione um' }, ...lst];
  }, [categories, categories.data]);

  const statesList = useMemo(() => {
    const lst = states.data.map((cat: State) => ({
      key: cat.id.toString(),
      value: cat.id.toString(),
      label: cat.name,
    }));
    return [{ key: '-1', value: '-1', label: 'Selecione um' }, ...lst];
    return [];
  }, [states, states.data]);

  return (
    <>
      <Header />
      <Container>
        <Panel>
          <Loading isLoading={categories.loading || categories.loading}>
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
              value={fantasyName}
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
              value={email}
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
            <Select id="sel_state" label="Estado" onChange={handleChangeState} list={statesList} value={state} />
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
            {id && (
              <Input
                id="inp_created_date"
                type="text"
                label="Data de criação:"
                value={createdDate.toString()}
                disabled
              />
            )}
            {id && (
              <Input
                id="inp_updated_date"
                type="text"
                label="Data de atualização:"
                value={updatedDate.toString()}
                disabled
              />
            )}
            <Select
              id="sel_category"
              label="Categoria"
              onChange={handleChangeCategory}
              list={categoriesList}
              value={category}
            />
            <Checkbox id="chk_active" onChange={handleChange} checked={active} label="Ativo" />
            <Button label={id ? 'Atualizar' : 'Enviar'} onClick={handleSendForm} />
            {id && <Button label="Deletar" onClick={handleDelete} />}
          </Loading>
        </Panel>
      </Container>
    </>
  );
};

export default Register;
