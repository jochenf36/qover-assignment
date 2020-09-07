import Dinero from 'dinero.js';
import { Model, Plan } from '../types';
import { GLOBAL_PLAN, models } from '../constants';

const AUDI_DEFAULT = 250 * 100;
const BMW_DEFAULT = 150 * 100;
const PORSCHE_DEFAULT = 500 * 100;

const AUDI_PERCENTAGE = 30;
const BMW_PERCENTAGE = 40;
const PORSCHE_PERCENTAGE = 70;

const EUR = 'EUR';

export function calculateRate(
  model: Model,
  value: number,
  plan: Plan,
): Dinero.Dinero {
  let price = Dinero({ amount: 0 });
  if (plan === GLOBAL_PLAN) {
    switch (model) {
      case models.audi:
        price = Dinero({ amount: AUDI_DEFAULT, currency: EUR });
        break;
      case models.bmw:
        price = Dinero({ amount: BMW_DEFAULT, currency: EUR });
        break;
      case models.porsche:
        price = Dinero({ amount: PORSCHE_DEFAULT, currency: EUR });
        break;
      default:
        break;
    }
  } else {
    const valueDinero = value * 100;
    switch (model) {
      case models.audi:
        price = Dinero({ amount: AUDI_DEFAULT, currency: EUR }).add(
          Dinero({ amount: valueDinero, currency: EUR }).percentage(
            AUDI_PERCENTAGE,
          ),
        );
        break;
      case models.bmw:
        price = Dinero({ amount: BMW_DEFAULT, currency: EUR }).add(
          Dinero({ amount: valueDinero, currency: EUR }).percentage(
            BMW_PERCENTAGE,
          ),
        );
        break;
      case models.porsche:
        price = Dinero({ amount: PORSCHE_DEFAULT, currency: EUR }).add(
          Dinero({ amount: valueDinero, currency: EUR }).percentage(
            PORSCHE_PERCENTAGE,
          ),
        );
        break;
      default:
        break;
    }
  }
  return price;
}

export function formatBelgiumStyle(price: Dinero.Dinero): string {
  //TODO check if there is no better way to format to Belgium Style
  return (
    price
      .toFormat('0,0.0')
      .replace(',', 'tmp')
      .replace('.', ',')
      .replace('tmp', '.') + ' EUR'
  );
}
