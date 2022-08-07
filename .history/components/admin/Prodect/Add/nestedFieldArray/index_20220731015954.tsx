import type { NextPage } from 'next'
import { useFieldArray } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import Typography  from '@mui/material/Typography'
import { forwardRef, useRef, useImperativeHandle } from "react"

interface IProps{
    nestIndex:number;
    control:any;
    register:any;
    appendFunction:any
    
}
const NestedFieldArray: NextPage<IProps> = ({nestIndex, control, register,appendFunction}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `selected.${nestIndex}.items`
  });

useImperativeHandle(ref, () => ({
    showAlert() {
      alert("Hello from Child Component")
    },
  }))
  return <div></div>
});
  const appendData=()=>{
    append({image:"",name:""});
  }
  return (
    <>
     <button
       type="button"
                            onClick={() => {
                                append({image:"",name:""});
                            }}
                            >
                            append
                            </button>
        {
            fields.map((item, index) => {
                return (
                    <>
                         <div className="col-1 p-0 mt-3 mb-3 d-flex"></div>
                        <div className="col-1 p-0 mt-3 mb-3 d-flex">
                            <IconButton  size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
                                remove(index)
                            }}>
                                <RemoveIcon />
                            </IconButton>
                        </div>
                            <TextField {...register(`selected.${nestIndex}.items.${index}.name`,{required: "هذا الحقل مطلوب."})} required  className="col-4 p-0 mt-3 mb-3" id="other" label="الاسم" variant="outlined" />{
                            //helperText={errors.other[index]?.title?.message}  error={errors.other[index]?.title?.message?true:false} color={errors.other[index]?.title?.message?"error":"success"}
                            }
                            <TextField {...register(`selected.${nestIndex}.items.${index}.image`)}  className="col-4 p-0 mt-3 mb-3" id="other" label="الصوره" variant="outlined" />{
                            //helperText={errors.other[index]?.title?.message}  error={errors.other[index]?.title?.message?true:false} color={errors.other[index]?.title?.message?"error":"success"}
                            }
                            <Typography className="mt-3 mb-3 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>{index+1}</Typography>
                           <div className="col-1 p-0 mt-3 mb-3 d-flex"></div>
                    </>
                )}
            )
        }
    </>
  )
}


export default NestedFieldArray
