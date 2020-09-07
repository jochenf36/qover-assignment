import React, { useState } from 'react';
import styles from './Quote.module.css';
import { useLocation } from 'react-router-dom';
import { calculateRate } from '../../helpers/quoteHelpers';
import { Switch } from 'antd';
import QuoteDetail from '../../components/QuoteDetail/QuoteDetail';
import { Model } from '../../types';
import {
  MONTHLY,
  MONTHS_IN_YEAR,
  YEARLY,
  GLOBAL_PLAN,
  UNIVERSAL_PLAN,
} from '../../constants';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Quote: React.FC = () => {
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState(YEARLY);
  const [selectedPlan, setSelectedPlan] = useState(GLOBAL_PLAN);

  const query = useQuery();
  const car = query.get('car') as Model;
  const price = Number(query.get('price'));

  let rateGlobal = calculateRate(car, price, GLOBAL_PLAN);
  let rateUniverse = calculateRate(car, price, UNIVERSAL_PLAN);

  if (selectedPaymentPlan === MONTHLY) {
    rateGlobal = rateGlobal.divide(MONTHS_IN_YEAR);
    rateUniverse = rateUniverse.divide(MONTHS_IN_YEAR);
  }

  const onPaymentMethodChanged = () => {
    setSelectedPaymentPlan(selectedPaymentPlan === YEARLY ? MONTHLY : YEARLY);
  };

  const styleMonthly =
    selectedPaymentPlan === MONTHLY ? styles.selectedPaymentPlan : '';
  const styleYearly =
    selectedPaymentPlan === YEARLY ? styles.selectedPaymentPlan : '';

  return (
    <div className={styles.Quote}>
      <h1 className={styles.title}>Select a plan</h1>

      <div className={styles.planType}>
        <span className={styleMonthly}>Pay Monthly</span>
        <Switch
          defaultChecked
          className={styles.toggle}
          onChange={onPaymentMethodChanged}
        />
        <span className={styleYearly}>Pay Yearly</span>
      </div>

      <div className={styles.quoteDetails}>
        <QuoteDetail
          rate={rateGlobal}
          type={GLOBAL_PLAN}
          paymentPlan={selectedPaymentPlan}
          selected={selectedPlan === GLOBAL_PLAN}
          className={styles.quoteDetail}
          onSelectedPlan={setSelectedPlan}
        />
        <QuoteDetail
          rate={rateUniverse}
          type={UNIVERSAL_PLAN}
          paymentPlan={selectedPaymentPlan}
          selected={selectedPlan === UNIVERSAL_PLAN}
          className={styles.quoteDetail}
          onSelectedPlan={setSelectedPlan}
        />
      </div>

      <div className={styles.fullDetails}>
        Show me the full comparison table
      </div>
    </div>
  );
};

export default Quote;
