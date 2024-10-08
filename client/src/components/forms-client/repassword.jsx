import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = React.useState('');

    const onSubmit = async (data) => {
        try {
            // Replace with your actual API endpoint
            const url = `${config.api}/auth/reset-password`;
            await axios.post(url, { email: data.email });
            setMessage('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
        } catch (error) {
            console.error('هناك خطأ في إرسال البريد الإلكتروني:', error);
            setMessage('حدث خطأ أثناء إرسال الرابط. يرجى المحاولة مرة أخرى.');
        }
    };

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ddark:text-white text-center">
                تعيين كلمة المرور
            </h1>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ddark:text-white">البريد الإلكتروني</label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ddark:bg-gray-700 ddark:border-gray-600 ddark:placeholder-gray-400 ddark:text-white ddark:focus:ring-blue-500 ddark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register('email', {
                        required: 'البريد الإلكتروني مطلوب',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'البريد الإلكتروني غير صالح'
                        }
                    })}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-primary-600 ddark:hover:bg-primary-700 ddark:focus:ring-primary-800"
            >
                إعادة تعيين كلمة المرور
            </button>
            {message && <p className="text-sm text-green-600">{message}</p>}
            <p className="text-sm font-light text-gray-500 ddark:text-gray-400">
                هل لديك حساب؟ <Link to="?route=login" className="font-medium text-primary-600 hover:underline ddark:text-primary-500">تسجيل الدخول</Link>
            </p>
        </form>
    );
}

export default ResetPassword;
