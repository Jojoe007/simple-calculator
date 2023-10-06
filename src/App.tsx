import { useRef, useState } from 'react'
import { OperatorType, ResetType } from './enums/enums'


import Input from './components/Input'
import Button from './components/Button'

function App() {
    const ref = useRef<HTMLInputElement>(null);

    const [result, setResult] = useState<number>(0.0)

    const calculate = (operator: OperatorType) => {
        let ret = 0;
        if (ref.current != null) {
            const inputNumber = parseFloat(ref.current.value);
            switch (operator) {
                case OperatorType.Add:
                    ret = result + inputNumber;
                    break;
                case OperatorType.Substract:
                    ret = result - inputNumber;
                    break;
                case OperatorType.Multiply:
                    ret = result * inputNumber;
                    break;
                case OperatorType.Divide:
                    ret = result / inputNumber;
                    break;
            }

            setResult(ret);
        }
    }

    const reset = (type: ResetType) => {
        switch (type) {
            case ResetType.Input:
                if (ref.current != null) {
                    ref.current.value = '';
                }
                break;

            case ResetType.Result:
                setResult(0);
                break;
        }
    }

    const now = Date.now();

    return (
        <div className='flex flex-col justify-center min-w-[320px] min-h-[100vh] place-items-center'>
            <div className='flex flex-col justify-start gap-2'>
            {/* https://tailwindcss.com/docs/customizing-colors */}
            <div className='font-bold text-5xl text-center bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent'>
                Somple Calculator
            </div>
            <div className='px-4 py-2 font-bold text-sm text-white text-center rounded-md bg-blue-700 sm:text-sm sm:leading-6'>
                {result}
            </div>

            <Input ref={ref} />

            <div className='inline-flex gap-2'>
                <Button title='+' callback={() => calculate(OperatorType.Add)} />
                <Button title='-' callback={() => calculate(OperatorType.Substract)} />
                <Button title='x' callback={() => calculate(OperatorType.Multiply)} />
                <Button title='÷' callback={() => calculate(OperatorType.Divide)} />
            </div>

            <div className='inline-flex gap-2'>
                <Button title='Reset Input' callback={() => reset(ResetType.Input)} />
                <Button title='Reset Result' callback={() => reset(ResetType.Result)} />
            </div>

            <a
                className='mt-4 font-bold text-md underline hover:text-blue-500'
                href='https://instagram.com/jojoe007'
                target='_blank'
            >
                Create at Deadline by Takdanai Ittipak
            </a>
        </div>
        </div>
    )
}

export default App
