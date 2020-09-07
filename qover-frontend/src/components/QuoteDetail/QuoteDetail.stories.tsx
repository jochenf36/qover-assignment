/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import QuoteDetail from './QuoteDetail';
import Dinero from 'dinero.js';
import { GLOBAL_PLAN } from '../../constants';

storiesOf('QuoteDetail', module).add('default', () => (
  <QuoteDetail
    rate={Dinero({ amount: 40000 })}
    type={GLOBAL_PLAN}
    onSelectedPlan={(value) => null}
  />
));
