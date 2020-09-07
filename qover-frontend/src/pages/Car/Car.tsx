import React from 'react';
import styles from './Car.module.css';
import { InputNumber, Select, Form } from 'antd';
import {
  models,
  calculatePrice,
  Model,
  UNIVERSAL_PLAN,
  formatPrice,
} from '../../helpers/carHelpers';
import { useHistory } from 'react-router-dom';
import { PATH_QUOTE } from '../../App';

const { Option } = Select;

const availableCars = [models.audi, models.bmw, models.porsche].sort();

const MIN_PRICE = 5000;
const MIN_AGE = 18;
const MIN_AGE_PORSCHE = 25;

type formData = {
  age: number;
  car: string;
  price: number;
};

function carAgeValidator(car: string, age: number) {
  if (car === models.porsche && age < MIN_AGE_PORSCHE) {
    return Promise.reject('Sorry! We can not accept this particular risk');
  }
  return Promise.resolve();
}

const Car: React.FC = () => {
  const history = useHistory();

  const validateAge = () => ({
    validator(rule: any, value: number) {
      if (value && value > MIN_AGE) {
        return Promise.resolve();
      }
      return Promise.reject('Sorry! The driver is too young');
    },
  });

  const validateCarWithAge = ({
    getFieldValue,
  }: {
    getFieldValue: (arg: string) => any;
  }) => ({
    validator(rule: any, value: string) {
      return carAgeValidator(value, getFieldValue('age'));
    },
  });

  const validateAgeWithCar = ({
    getFieldValue,
  }: {
    getFieldValue: (arg: string) => any;
  }) => ({
    validator(rule: any, value: number) {
      return carAgeValidator(getFieldValue('car'), value);
    },
  });

  const validatePrice = () => ({
    validator(rule: any, value: number) {
      if (value && value >= MIN_PRICE) {
        return Promise.resolve();
      }
      return Promise.reject('Sorry! The price of the car is too low');
    },
  });

  const onFinish = async (values: formData) => {
    const params = new URLSearchParams();
    params.append('car', values.car);
    params.append('price', String(values.price));
    history.push(`${PATH_QUOTE}?${params.toString()}`);
  };

  return (
    <div className={styles.Car}>
      <div className={styles.box}>
        <Form name="basic" onFinish={onFinish}>
          <div>
            <label htmlFor="basic_age" title="age" className={styles.label}>
              Age of the driver
            </label>
            <Form.Item
              className={styles.formItem}
              name="age"
              rules={[validateAge, validateAgeWithCar]}
              validateTrigger=""
            >
              <InputNumber className={styles.input} />
            </Form.Item>
          </div>

          <div>
            <label htmlFor="basic_car" title="car" className={styles.label}>
              Car
              {/* name prop - causes the warning */}
            </label>
            <Form.Item
              name="car"
              className={styles.formItem}
              rules={[validateCarWithAge]}
              validateTrigger=""
            >
              <Select className={styles.carSelect}>
                {availableCars.map((car) => (
                  <Option key={car} value={car}>
                    {car}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <label htmlFor="basic_car" title="car" className={styles.label}>
            Car
          </label>

          <div>
            <label htmlFor="basic_price" title="price" className={styles.label}>
              Purchase Price
            </label>
            <Form.Item
              className={styles.formItem}
              name="price"
              rules={[validatePrice]}
              validateTrigger=""
            >
              <InputNumber
                className={styles.priceInput}
                parser={(value = '') => value.replace(/€\s?|(,*)/g, '')}
              />
            </Form.Item>
          </div>

          <Form.Item className={styles.bottom}>
            <button className={styles.submit}>Get a price</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Car;
