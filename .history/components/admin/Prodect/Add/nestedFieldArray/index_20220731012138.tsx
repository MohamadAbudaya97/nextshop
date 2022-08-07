import type { NextPage } from 'next'
import { useFieldArray } from "react-hook-form";
import IconButton from '@mui/material/IconButton';

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
        {
            fields.map((item, k) => {
                return (
                    <>
                        <div className="col-1 p-0 mt-3 mb-3 d-flex"></div>
                        <div className="col-1 p-0 mt-3 mb-3 d-flex">
                            <IconButton  size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
                                otherRemove(index)
                            }}>
                                <RemoveIcon />
                            </IconButton>
                        </div>
                            <TextField {...register(`selected.${index}.title`,{required: "هذا الحقل مطلوب."})} required  className="col-4 p-0 mt-3 mb-3" id="other" label="الاسم" variant="outlined" />{
                            //helperText={errors.other[index]?.title?.message}  error={errors.other[index]?.title?.message?true:false} color={errors.other[index]?.title?.message?"error":"success"}
                            }
                            <TextField {...register(`selected.${index}.title`)}  className="col-4 p-0 mt-3 mb-3" id="other" label="الصوره" variant="outlined" />{
                            //helperText={errors.other[index]?.title?.message}  error={errors.other[index]?.title?.message?true:false} color={errors.other[index]?.title?.message?"error":"success"}
                            }
                            <Typography className="mt-3 mb-3 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>{index+1}</Typography>

                    </>
                )}
            )
        }
    </>
  )
}


export default NestedFieldArray
