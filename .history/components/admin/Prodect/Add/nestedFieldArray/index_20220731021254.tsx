import type { NextPage } from 'next'
import { useFieldArray } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import Typography  from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

interface IProps{
    nestIndex:number;
    control:any;
    register:any;
    
}
const NestedFieldArray: NextPage<IProps> = ({nestIndex, control, register}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `selected.${nestIndex}.items`
  });

  return (
    <>
    <Button color="success" variant="outlined" onClick={()=>{
              append({image:"",name:""});
        }}><AddIcon />اضغط لاضافه اختيارات ل السكشن {nestIndex+1} </Button>
        <IconButton  size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
              append({image:"",name:""});
        }}>
        <AddIcon />
    </IconButton>
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
