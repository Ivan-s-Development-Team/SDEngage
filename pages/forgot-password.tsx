// pages/forgot-password.tsx

import AuthLayout from '@/components/layout/AuthLayout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Preloader from '@/components/preloader/Preloader';

type FormData = {
  email: string;
};

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle password recovery logic here
    //console.log('Password recovery initiated for:', data.email);
  };

  return (
    <AuthLayout title="Forgot Password">
      <Preloader />
      {/* ... your other layout and styling code */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa Correo Electrónico"
            className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
            {...register('email', {
              required: 'Este campo es requerido',
            })}
            autoComplete="email"
            autoFocus
            required
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full block bg-[#14A647]  hover:bg-[#0A732F] px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
        >
          Enviar Correo de Recuperación
        </button>
      </form>
      {/* ... rest of your layout and styling code */}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
