import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from 'components/Header';
import Panel from 'components/Panel';
import Table from 'components/Table';
import Loading from 'components/Loading';

import { loadCompanies } from 'store/companies/actions';
import { ApplicationState } from 'store';

import { Container } from './styles';
import { HEADERS } from './constants';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { companies } = useSelector((state: ApplicationState) => ({
    companies: state.companies,
  }));

  const handleClickItem = (e: React.MouseEvent<HTMLTableRowElement>) => {
    history.push(`/cadastro/${e.currentTarget.id}`);
  };

  useEffect(() => {
    dispatch(loadCompanies());
  }, []);

  const listCompanies = useMemo(() => {
    if (!companies.data) return [];
    return companies.data;
  }, [companies.data]);

  return (
    <>
      <Header />
      <Container>
        <Panel>
          <Loading isLoading={companies.loading}>
            <Table headers={HEADERS} list={listCompanies} onClick={handleClickItem} />
          </Loading>
        </Panel>
      </Container>
    </>
  );
};

export default Home;
