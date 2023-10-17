import { reactive } from 'vue';

interface FormOptions <TValue = unknown> {    
    initialValues: TValue;  // MayRef 추가 필요
}
/**
 * reslove initialValues Function
 */

export function useForm(opts?: FormOptions) {
    /**
     * path management
     * formState
     * initialValues
     * updateFormValue
     * resetFormValue
     * validateForm
     * submitForm
     */
    const formValue = reactive(opts?.initialValues);

    return {
        formValue,        
    };
}
