const PasswordReset = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            تعيين كلمة مرور جديدة
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المرور الجديدة</label>
                                <input
                                    type="password"
                                    name="new-password"
                                    id="new-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تأكيد كلمة المرور الجديدة</label>
                                <input
                                    type="password"
                                    name="confirm-new-password"
                                    id="confirm-new-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                تعيين كلمة المرور
                            </button>
                        </form>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            لديك حساب بالفعل؟ <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">تسجيل الدخول</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PasswordReset;
