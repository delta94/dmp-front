/**
 *
 * CreateUser
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { AutoForm } from 'uniforms-antd';
import { Container } from 'app/components/Container';
import { Row, Col, Typography } from 'antd';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectCreateUser } from './selectors';
import { createUserSaga } from './saga';
import { userSchema } from './schema';

const { Title } = Typography;

interface Props {}

export const CreateUser = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: createUserSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createUser = useSelector(selectCreateUser);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Nouveau Usager</title>
        <meta name="description" content="Description of create user" />
      </Helmet>
      <MainContent>
        <Title level={3}>Nouveau usager</Title>
        <Row gutter={36}>
          <Col span={12}>
            <AutoForm schema={userSchema} showInlineError />
          </Col>
        </Row>
      </MainContent>
    </>
  );
});

// const Div = styled.div``;

const MainContent = styled(Container)`
  padding-top: 40px;
`;
