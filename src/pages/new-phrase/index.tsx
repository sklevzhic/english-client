import MainLayout from "../../layouts/main";
import React from 'react';
import {useForm, Resolver} from 'react-hook-form';
import axios from "axios";

interface Inputs {
    example: string,
    exampleRequired: string,
};

type FormValues = {
    rusText: string,
    engText: string,
    level: string,
    lesson: string
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.engText ? values : {},
        errors: !values.engText
            ? {
                engText: {
                    type: 'required',
                    message: 'This is required.',
                },
            }
            : {},
    };
};
const NewPhrase = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver});
    const onSubmit = handleSubmit((data) => {
        axios.post("https://english-api.onrender.com/phrases", data)
    });

    return <MainLayout>
        <div className="w-full max-w-xs">
          <form onSubmit={onSubmit}>
            <input {...register("rusText")} placeholder="Bill"/>
            <input {...register("engText")} placeholder="Luo"/>
            <input {...register("level")} placeholder="level"/>
            <input {...register("lesson")} placeholder="lesson"/>
            <input type="submit"/>
          </form>
        </div>

    </MainLayout>
}

export default NewPhrase