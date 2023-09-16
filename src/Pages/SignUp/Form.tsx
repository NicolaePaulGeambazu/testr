import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import DataEntry from '../../Components/DataEntry/DataEntry';
import { UserSetupContext } from '../../Components/Context/ContextSignUp';

function Form() {
  // Get the `onSubmit` function from the context
  const { onSubmit } = useContext(UserSetupContext);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: 'First Name is required' }}
        render={({ field: { value, onChange} }) => (
          <DataEntry
            id="firstname"
            type="text"
            placeholder="First Name"
            name="firstName"
            required
            error={errors.firstName}
            onChange={onChange} // Add onChange prop
            value={value} // Add value prop
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        rules={{ required: 'Last Name is required' }}
        render={({ field: { value, onChange} }) => (
          <DataEntry
            id="lastname"
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
            error={errors.lastName}
            onChange={onChange} // Add onChange prop
            value={value} // Add value prop
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: 'Email is required' }}
        render={({ field: { value, onChange} }) => (
          <DataEntry
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            required
            error={errors.email}
            onChange={onChange} // Add onChange prop
            value={value} // Add value prop
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: 'Password is required' }}
        render={({ field: {value, onChange} }) => (
          <DataEntry
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            required
            error={errors.password}
            onChange={onChange} // Add onChange prop
            value={value} // Add value prop
          />
        )}
      />

      <Button type="submit">Claim your free trial</Button>
      <p className="ts" id="ts">
        By clicking the button, you are agreeing to our{' '}
        <a href="" className="ts__link">
          Terms and Services
        </a>
      </p>
    </form>
  );
}

export default Form;
