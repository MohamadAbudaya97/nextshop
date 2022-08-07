import type { NextPage } from 'next'
import { useFieldArray } from "react-hook-form";

interface IProps{
    nestIndex:number;
    control:any;
    register:any;
}
const NestedFieldArray: NextPage<IProps> = ({nestIndex, control, register}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test[${nestIndex}].nestedArray`
  });
  return (
    <>

    </>
  )
}


export default NestedFieldArray
