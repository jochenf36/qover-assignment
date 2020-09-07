import React from 'react';
import styles from './QuoteDetail.module.css';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { formatBelgiumStyle } from '../../helpers/quoteHelpers';
import Dinero from 'dinero.js';
import { Plan, Model } from '../../types';
import { UNIVERSAL_PLAN, GLOBAL_PLAN } from '../../constants';

export interface QuoteDetailProps {
  selected?: boolean;
  type: Plan;
  rate: Dinero.Dinero;
  paymentPlan: Model;
  onSelectedPlan: (plan: Plan) => void;
  className?: string;
}

const content: any = {
  [GLOBAL_PLAN]: {
    title: 'Global',
    durationTravel: 90,
    expenses: '1.000.000',
    personalAssistance: '5.000',
    travelAssistance: '1.000',
  },
  [UNIVERSAL_PLAN]: {
    title: 'Universe',
    durationTravel: 180,
    expenses: '3.000.000',
    personalAssistance: '10.000',
    travelAssistance: '2.500',
  },
};

const QuoteDetail: React.FC<QuoteDetailProps> = ({
  selected,
  type = GLOBAL_PLAN,
  rate = Dinero({ amount: 0 }),
  paymentPlan,
  onSelectedPlan,
  className,
}) => {
  const stylesQuoteDetail = [styles.QuoteDetail, className];
  if (selected) {
    stylesQuoteDetail.push(styles.QuoteDetailSelected);
  }

  const stylesPrice = [styles.price];
  if (!selected) {
    stylesPrice.push(styles.priceUnselected);
  }

  const styleSelectButton = [styles.selectButton];
  if (!selected) {
    styleSelectButton.push(styles.selectButtonUnselected);
  }

  const handleSelect = () => {
    onSelectedPlan(type);
  };

  return (
    <div className={stylesQuoteDetail.join(' ')}>
      <div className={styles.title}>{type}</div>
      <div className={stylesPrice.join(' ')}>
        <span className={styles.priceNumber}>{formatBelgiumStyle(rate)}</span>
        <span className={styles.currencySign}>€</span>
        <div className={styles.priceSub}>{paymentPlan} incl. taxes</div>
      </div>
      <div className={styles.infoItem}>
        Maximum duration travel of <span>{content[type].durationTravel} </span>
        days,
      </div>
      <div className={styles.infoItem}>
        Medical expenses reimbursement <span>up to </span>
        {content[type].expenses} €
      </div>
      <div className={styles.infoItem}>
        Personal assistance abroad <span>up to </span>
        {content[type].personalAssistance} €
      </div>
      <div className={styles.infoItem}>
        Travel assistance abroad <span>up to </span>
        {content[type].travelAssistance} € <span> per insured per travel</span>
      </div>
      <div className={styles.infoItem}>Coverage duration: 1 year</div>
      <div className={styles.infoItem}>
        <button className={styleSelectButton.join(' ')} onClick={handleSelect}>
          {selected && (
            <CheckCircleTwoTone
              className={styles.checkIcon}
              twoToneColor="#31cfda"
            />
          )}
          {selected ? 'Plan selected' : 'Choose this plan'}
        </button>
      </div>
    </div>
  );
};

export default QuoteDetail;
