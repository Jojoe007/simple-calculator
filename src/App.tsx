import { useRef, useState } from 'react'
import { OperatorType, ResetType } from './enums/enums'


import Input from './components/Input'
import Button from './components/Button'

function App() {
    const ref = useRef<HTMLInputElement>(null);
    const [result, setResult] = useState<number>(0)

    const calculate = (operator: OperatorType) => {
        let ret = 0;
        if (ref.current != null) {
            switch (operator) {
                case OperatorType.Add:
                    ret = result + parseFloat(ref.current.value);
                    break;
                case OperatorType.Substract:
                    ret = result - parseFloat(ref.current.value);
                    break;
                case OperatorType.Multiply:
                    ret = result * parseFloat(ref.current.value);
                    break;
                case OperatorType.Divide:
                    ret = result / parseFloat(ref.current.value);
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

    return (
        <>
            <div className='font-bold text-[50px]'>Somple Calculator</div>
            <div className='flex flex-col justify-start gap-2'>
                <div className='text-xl font-bold text-blue-300'>
                    Result: {result}
                </div>

                <div>
                    <Input ref={ref} />
                </div>

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
        </>
    )
}

export default App
