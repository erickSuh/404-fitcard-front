import React from 'react';

import Panel from '../components/Panel';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import { Container } from './styles';

const containers: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Panel>
          <Input label="nome" />
        </Panel>
      </Container>
    </>
  );
};

export default containers;
