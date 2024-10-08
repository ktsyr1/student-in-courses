"use client"

import { FormProvider, useForm } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Preferences from './Preferences';
import StaticInfo from './StaticInfo';
import FormStepper from '@/components/Element/FormStepper';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Element/Spinner';
import FAQAccordion from '@/components/theme/FAQ';


const Join: React.FC = ({ searchParams: { state } }: any) => {
    const methods = useForm();

    const { handleSubmit } = methods;
    const [step, setStep] = useState(2);
    const [loading, setLoading] = useState(false)

    const router = useRouter();
    const steps = [
        <BasicInfo />,
        <Education />,
        <Preferences />
    ];

    const onSubmit = async (data: any) => {
        try {
            setLoading(true)
            const url = `${process.env.NEXT_PUBLIC_API}/student/apply`;
            await axios.post(url, data);
            router.replace("?state=success");
        } catch (error) {
            setLoading(false)
            console.error("There was an error submitting the form!", error);
        }
    };
    function View() {
        if (loading) return <Spinner />
        if (state == "success") return <StaticInfo />
        else return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormStepper step={step} setStep={setStep}>
                    {steps.map((step, index) => <div key={index}> {step} </div>)}
                </FormStepper>
            </form>
        )
    }
    return (
        <FormProvider {...methods}>
            <div className="flex flex-col items-center w-full  mx-auto p-4 rtl *:text-slate-900">
                <main className="w-full space-y-6 max-w-md">
                    <section className="text-center">
                        <h2 className="text-xl font-bold">اخبرنا عنك</h2>
                        <p className="text-muted-foreground">حتى نستطيع العثور بدقة أعلى على تدريبات تناسبك</p>
                    </section>
                    {state == "success" ?
                        <StaticInfo />
                        : <form onSubmit={handleSubmit(onSubmit)}>
                            <FormStepper step={step} setStep={setStep}>
                                {loading ? <Spinner /> : steps.map((step, index) => <div key={index}> {step} </div>)}
                            </FormStepper>
                        </form>
                    }
                    {/* <View /> */}

                </main>
                <FAQAccordion path={"/apply"} />
            </div>
        </FormProvider>
    );
};

export default Join;
