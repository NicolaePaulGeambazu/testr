import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import DataEntry from '../../Components/DataEntry/DataEntry';
import '../../styles/tailwind.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="absolute bg-white p-8 rounded shadow-md">
        <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputWrapper"> {/* Flex container for each input */}
            <DataEntry
              label="First Name"
              name="firstName"
              errors={errors}
              control={control}
              rules={{ required: 'First name is required' }}
            />
          </div>
          <div className="inputWrapper">
            <DataEntry
              label="Last Name"
              name="lastName"
              errors={errors}
              control={control}
              rules={{ required: 'Last name is required' }}
            />
          </div>
          <div className="inputWrapper">
            <DataEntry
              label="Email Address"
              name="email"
              errors={errors}
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}$/,
                  message: 'Invalid email address',
                },
              }}
            />
          </div>
          <div className="inputWrapper">
            <DataEntry
              label="Password"
              name="password"
              errors={errors}
              control={control}
              rules={{ required: 'Password is required' }}
              type="password"
            />
          </div>
          <div>
            <Button color="custom-green" size="large">
              CLAIM YOUR FREE TRIAL
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
