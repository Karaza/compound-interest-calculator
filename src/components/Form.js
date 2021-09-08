import * as React from 'react';
import defaultState from '../defaultState';

const Form = ({ onUpdate }) => {
  const [state, setState] = React.useState(defaultState);
  const { initialAmount, period, growthRate, monthlyContribution } = state;

  return (
    <section>
      <div className="flex">
        <label htmlFor="initialAmount">
          Initial Amount (&euro;)
          <input
            type="number"
            id="initialAmount"
            name="initialAmount"
            value={initialAmount}
            onChange={({ target }) =>
              setState({ ...state, initialAmount: Number(target.value) })
            }
          />
        </label>
        <br />
        <label htmlFor="growthRate">
          Interest Rate (%)
          <input
            type="number"
            id="growthRate"
            name="growthRate"
            value={growthRate}
            onChange={({ target }) =>
              setState({ ...state, growthRate: Number(target.value) })
            }
          />
        </label>
        <br />
        <label htmlFor="monthlyContribution">
          Monthly Contribution (&euro;)
          <input
            type="number"
            id="monthlyContribution"
            name="monthlyContribution"
            value={monthlyContribution}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })
            }
          />
        </label>
        <br />
        <label htmlFor="period">
          Investment Duration (in months)
          <input
            type="number"
            id="period"
            name="period"
            value={period}
            onChange={({ target }) =>
              setState({ ...state, period: Number(target.value) })
            }
          />
        </label>
      </div>
      <button type="button" onClick={() => onUpdate(state)}>
        Calculate
      </button>
    </section>
  );
};

export default Form;
