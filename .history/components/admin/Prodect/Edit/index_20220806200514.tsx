import type { NextPage } from 'next'
import {useEffect} from 'react'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Style from './index.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, useFieldArray } from "react-hook-form";
import IProdect,{IProdectInput} from '@Interface/prodect'
import Details from '@Components/Prodect/details'
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';
import {Typography}  from '@mui/material'
import { useState } from 'react';
import NestedFieldArray from './nestedFieldArray';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
import EditIcon from '@mui/icons-material/Edit';
import {getProdectById} from '@Services/prodect.service'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import {setProdect} from '@Services/prodect.service'
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right:43,
    top: 12,
    padding: '0 4px',
    fontWeight:"bold"
  },
}));

interface Props{
  id:String
}
const Home: NextPage<Props> = (Props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { register, control, handleSubmit,reset,watch, formState: { errors } } = useForm<IProdectInput>({
    defaultValues:{
      brand:"",
      comments:[],
      description:"",
      details:[],
      image:[],
      inStock:null,
      name:"",
      other:[],
      price:{cost:null,discount:null,price:null},
      rating:{average:0,five:0,for:0,three:0,tow:0,one:0,zero:0},
      relatedProductsIds:[],
      selected:[],
      specification:[]
    }
  });

const [openAddDialog,setOpenAddDialog]=useState(false)

const handleCloseAddDialog=()=>{
  setOpenAddDialog(false)
}

  const {
    fields: otherFields,
    append: otherAppend,
    remove: otherRemove
  } = useFieldArray({ control, name: "other" });

  const {
    fields: detailsFields,
    append: detailsAppend,
    remove: detailsRemove
  } = useFieldArray({ control, name: "details" });

  const {
    fields: specificationFields,
    append: specificationAppend,
    remove: specificationRemove
  } = useFieldArray({ control, name: "specification" });

    const {
    fields: selectedFields,
    append: selectedAppend,
    remove: selectedRemove
  } = useFieldArray({ control, name: "selected" });

  function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}


  const {
    fields: imageFields,
    append: imageAppend,
    remove: imageRemove,
  } = useFieldArray({ control, name: "image" });

  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const [data,setData] = useState<IProdectInput>(null)

  const [loading,setLoading] = useState(false)

 const [minimize,setMinimize] = useState([false,false,false,false,false])

  const onSubmit = handleSubmit(data => console.log(data));

  const chickPrice =()=>{
   let cost = watchAllFields.price?.cost
   let price = watchAllFields.price?.price
   let discount = watchAllFields.price?.discount
   if(price && cost){
    if(discount){
      return ((price - (discount/100)*price)-cost).toFixed(2)
    }else{
      return (price-cost).toFixed(2)
    }
   }else{
    return null
   }
  }

  const [previewOpen , setPreview] = useState<Boolean>(false)

  const Add = handleSubmit(data => {
    setOpenAddDialog(true)
  });

  const AddData =async () =>{
    const response = await setProdect(watchAllFields)
    setOpenAddDialog(false)
    enqueueSnackbar(response.message,{variant:response.success?"success":"error"});
  }

  const Review = handleSubmit(data => {
   setData(data)
   setPreview(true)
  });


const EditFunction =async () =>{
  await setLoading(true)
  try {
    const data = await getProdectById(Props.id)
    await setLoading(false)
    console.log(data)
  } catch (error) {
    await setLoading(false)
  }
}

//if(loading) return <div>loading ...</div>
return (
  <>
  {
    errors.name?.message
  }
    <Module ButtonComponent={      
        <Tooltip title="تعديل" onClick={EditFunction}>
          <IconButton color="warning">
            <EditIcon />
          </IconButton>
        </Tooltip>
     }
    >
        <div>
       {previewOpen &&
       <div className="gray">
        <IconButton className={Style.iconButton} size="large" color="error" aria-label="RemoveIcon" onClick={()=>setPreview(false)}>
            <RemoveIcon fontSize='large'/>
        </IconButton>
        <Details
          data={
            data
          }
        />
      </div>
      }
      {
       loading?
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      :!previewOpen && 
      <div className="">
          <Form />
      </div>
      }
        </div>
    </Module>
   




   {
    // now dialog aadd
   }

      <Dialog
        fullScreen={false}
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle  dir="rtl">
          {"هل انت متاكد من نشر هذا المنتج ؟"}
        </DialogTitle>
        <DialogActions>
          <Button autoFocus color="error" onClick={handleCloseAddDialog}>
            لا
          </Button>
          <Button color="success" onClick={AddData} autoFocus>
            نعم
          </Button>
        </DialogActions>
      </Dialog>



  </>
  )
}


export default Home

interface FromProps{
  data?:IProdect
}

const Form: NextPage<FromProps> = (Props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { register, control, handleSubmit,reset,watch, formState: { errors } } = useForm<IProdectInput>({
    defaultValues:Props.data?Props.data:{
      brand:"",
      comments:[],
      description:"",
      details:[],
      image:[],
      inStock:null,
      name:"",
      other:[],
      price:{cost:null,discount:null,price:null},
      rating:{average:0,five:0,for:0,three:0,tow:0,one:0,zero:0},
      relatedProductsIds:[],
      selected:[],
      specification:[]
    }
  });

const [openAddDialog,setOpenAddDialog]=useState(false)

const handleCloseAddDialog=()=>{
  setOpenAddDialog(false)
}

  const {
    fields: otherFields,
    append: otherAppend,
    remove: otherRemove
  } = useFieldArray({ control, name: "other" });

  const {
    fields: detailsFields,
    append: detailsAppend,
    remove: detailsRemove
  } = useFieldArray({ control, name: "details" });

  const {
    fields: specificationFields,
    append: specificationAppend,
    remove: specificationRemove
  } = useFieldArray({ control, name: "specification" });

    const {
    fields: selectedFields,
    append: selectedAppend,
    remove: selectedRemove
  } = useFieldArray({ control, name: "selected" });

  function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}


  const {
    fields: imageFields,
    append: imageAppend,
    remove: imageRemove,
  } = useFieldArray({ control, name: "image" });

  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const [data,setData] = useState<IProdectInput>(null)

 const [minimize,setMinimize] = useState([false,false,false,false,false])

  const onSubmit = handleSubmit(data => console.log(data));

  const chickPrice =()=>{
   let cost = watchAllFields.price?.cost
   let price = watchAllFields.price?.price
   let discount = watchAllFields.price?.discount
   if(price && cost){
    if(discount){
      return ((price - (discount/100)*price)-cost).toFixed(2)
    }else{
      return (price-cost).toFixed(2)
    }
   }else{
    return null
   }
  }

  const [previewOpen , setPreview] = useState<Boolean>(false)

  const Add = handleSubmit(data => {
    setOpenAddDialog(true)
  });

  const AddData =async () =>{
    const response = await setProdect(watchAllFields)
    setOpenAddDialog(false)
    enqueueSnackbar(response.message,{variant:response.success?"success":"error"});
  }

  const Review = handleSubmit(data => {
   setData(data)
   setPreview(true)
  });
return (
  <>
        <form className={Style.Main} dir='rtl' onSubmit={onSubmit}>
          <Typography className="mb-5" color="success" variant='h4'>تعديل على المنتج</Typography>
              <div className="white">
                  <Typography align='center' variant='h6'>المعلومات الاساسيه</Typography>
                  <div className="row d-flex justify-content-around"> 
                      <Divider />
                      <TextField {...register("name",{required: "هذا الحقل مطلوب."})} required  className="col-5 p-0 mt-3" id="name" label="الاسم" variant="outlined" helperText={errors.name?.message}  error={errors.name?.message?true:false} color={errors.name?.message?"error":"success"}/>
                      <TextField {...register("description",{required: "هذا الحقل مطلوب."})} required className="col-5 p-0 mt-3" id="description" label="الوصف" variant="outlined" helperText={errors.description?.message}  error={errors.description?.message?true:false} color={errors.description?.message?"error":"success"}/>
                      <TextField {...register("brand",{required: "هذا الحقل مطلوب."})} required className="col-5 p-0 mt-3" id="brand" label="البراند" variant="outlined" helperText={errors.brand?.message}  error={errors.brand?.message?true:false} color={errors.brand?.message?"error":"success"}/>
                      <TextField {...register("inStock",{required: "هذا الحقل مطلوب.",valueAsNumber: true})} type="number"  required className="col-5 p-0 mt-3 mb-3" id="inStock" label="الكميه بالمتجر" variant="outlined" helperText={errors.inStock?.message}  error={errors.inStock?.message?true:false} color={errors.inStock?.message?"error":"success"}/>
                      <Typography className="mt-5" align='center' variant='h6'>السعر مع الخصم والتكلفه</Typography>
                      <Divider />
                      <Typography className="mt-2" align='center' color={parseInt(chickPrice()) ==0 || chickPrice()==null?"black":parseInt(chickPrice())<0?"red":"green"} variant='body2'>{chickPrice()?`صافي الربح ${chickPrice()}$ `:"يرجى تعبئه الفورم لمعرفه صافي الربح "}</Typography>
                      <TextField {...register("price.price",{required: "هذا الحقل مطلوب.",valueAsNumber: true})} required type="number" className="col-4 p-0 mt-3 mb-3" id="Price" label="سعر البيع" variant="outlined" helperText={errors.price?.price?.message}  error={errors.price?.price?.message?true:false} color={errors.price?.price?.message?"error":"success"}/>
                      <TextField {...register("price.cost",{required: "هذا الحقل مطلوب.",valueAsNumber: true})} required type="number" className="col-4 p-0 mt-3 mb-3" id="cost" label="سعر بالجمله" variant="outlined" helperText={errors.price?.cost?.message}  error={errors.price?.cost?.message?true:false} color={errors.price?.cost?.message?"error":"success"}/>
                      <TextField {...register("price.discount",{valueAsNumber: true})} type="number" className="col-4 p-0 mt-3 mb-3" id="discount" label="( % ) التخفيض " variant="outlined" />  
                      
                      <Typography className="mt-5" align='center' variant='h6'>صور المنتج
                        <IconButton  color="success" aria-label="RemoveIcon" onClick={()=>{
                            imageAppend(null);
                        }}>
                            <AddIcon />
                        </IconButton>
                      </Typography>
                      <div className="mb-3" style={{position:"relative"}}>
                     <IconButton style={{position:"absolute",right:-30,top:-20}} onClick={()=>{
                      if(watchAllFields.image.length>0)
                        setMinimize(replaceAt(minimize,0,!minimize[0]));
                      else 
                        setMinimize(replaceAt(minimize,0,false));
                     }}>
                      <StyledBadge badgeContent={watchAllFields.image.length} style={{color:errors.image!=undefined && errors.image.length>0?"red":"green"}} color="secondary">
                        {
                        minimize[0]?
                        <Tooltip title="فتح"><KeyboardArrowDownIcon/></Tooltip>:
                        <Tooltip title="اغلاق"><KeyboardArrowUpIcon /></Tooltip>
                        }
                      </StyledBadge>
                      </IconButton>
                      <Divider />
                      </div>
                      <div style={{height:minimize[0]?0:"auto",overflow:"hidden"}}>
                        {
                          imageFields.map((item,index)=>
                            <>
                              <div className='row' key={index+"imageFields"}>
                                <IconButton  className="col-1 p-0 mt-2 mb-2" size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
                                  imageRemove(index);
                                }}>
                                    <RemoveIcon />
                                </IconButton>
                                <TextField {...register(`image.${index}`,{required: "هذا الحقل مطلوب."})} required  className="col-10 p-0 mt-2 mb-2" id="details" label="يرجى منك وضع رابط الصوره" variant="outlined" helperText={errors.image!=undefined && errors.image[index]?.message}  error={errors.image!=undefined && errors.image[index]?.message?true:false} color={errors.image!=undefined && errors.image[index]?.message?"error":"success"}/>
                                <Typography className="mt-2 mb-2 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>{index+1}</Typography>
                              </div>
                            </>
                          )
                        }
                      </div>
                      <Typography className="mt-5" align='center' variant='h6' >المزيد من المعلومات
                        <IconButton  color="success" aria-label="RemoveIcon" onClick={()=>{
                            otherAppend({description:null,title:null});
                        }}>
                            <AddIcon />
                        </IconButton>
                      </Typography>    
                    <div className="mb-3" style={{position:"relative"}}>
                        <IconButton style={{position:"absolute",right:-30,top:-20}} onClick={()=>{
                          if(watchAllFields.other.length>0)
                            setMinimize(replaceAt(minimize,1,!minimize[1]));
                          else
                            setMinimize(replaceAt(minimize,1,false));
                        }}>
                         <StyledBadge badgeContent={watchAllFields.other.length} style={{color:errors.other!=undefined && errors.other.length>0?"red":"green"}} color="secondary">
                              {minimize[1]?                        <Tooltip title="فتح"><KeyboardArrowDownIcon/></Tooltip>:
                        <Tooltip title="اغلاق"><KeyboardArrowUpIcon /></Tooltip>} 
                        </StyledBadge>
                          </IconButton>
                          <Divider />
                    </div>
                    <div style={{height:minimize[1]?0:"auto",overflow:"hidden"}}>
                      {
                        otherFields.map((item,index)=>
                        <>
                          <div className='row' key={index+"otherFields"}>
                            <IconButton  className="col-1 p-0 mt-2 mb-2" size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
                              otherRemove(index)
                            }}>
                                <RemoveIcon />
                            </IconButton>
                            <TextField {...register(`other.${index}.title`,{required: "هذا الحقل مطلوب."})}  className="col-5 p-0 mt-2 mb-2" id="other" label="الاسم" variant="outlined" helperText={errors.other!=undefined && errors.other[index]?.title?.message}  error={ errors.other!=undefined && errors.other[index]?.title?.message?true:false} color={errors.other!=undefined && errors.other[index]?.title?.message?"error":"success"}/>
                            <TextField {...register(`other.${index}.description`,{required: "هذا الحقل مطلوب."})}  className="col-5 p-0 mt-2 mb-2" id="other" label="وصف المنتج" variant="outlined" helperText={errors.other!=undefined && errors.other[index]?.description?.message}  error={errors.other!=undefined && errors.other[index]?.description?.message?true:false} color={errors.other!=undefined && errors.other[index]?.description?.message?"error":"success"}/>
                       
                            <Typography className="mt-2 mb-2 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>{index+1}</Typography>
                          </div>
                        </>
                      )
                      }
                    </div>
                      <Typography className="mt-5" align='center' variant='h6' >الاختيارات
                        <IconButton  color="success" aria-label="RemoveIcon" onClick={()=>{
                            selectedAppend({items:[],title:null});
                        }}>
                            <AddIcon />
                        </IconButton>
                      </Typography>    

                      <div className="mb-3" style={{position:"relative"}}>
                          <IconButton style={{position:"absolute",right:-30,top:-20}} onClick={()=>{
                            if(watchAllFields.selected.length>0)
                              setMinimize(replaceAt(minimize,4,!minimize[4]));
                            else
                              setMinimize(replaceAt(minimize,4,false));
                          }}>
                            <StyledBadge badgeContent={watchAllFields.selected.length} style={{color:errors.selected!=undefined && errors.selected.length>0?"red":"green"}} color="secondary">
                            {minimize[4]?                        <Tooltip title="فتح"><KeyboardArrowDownIcon/></Tooltip>:
                        <Tooltip title="اغلاق"><KeyboardArrowUpIcon /></Tooltip>} 
                            </StyledBadge>
                            </IconButton>
                            <Divider />
                      </div>
                    <div style={{height:minimize[4]?0:"auto",overflow:"hidden"}}>
                      {
                        selectedFields.map((item,index)=>
                        <>
                          <div className='row' key={index+"otherFields"}>
                            <div className="col-1 p-0 mt-2 mb-2 d-flex">
                              <IconButton  size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
                                selectedRemove(index)
                              }}>
                                  <RemoveIcon />
                              </IconButton>
                            </div>
                            <TextField {...register(`selected.${index}.title`,{required: "هذا الحقل مطلوب."})}  className="col-10 p-0 mt-2 mb-2" id="other" label="الاسم" variant="outlined" helperText={errors.selected!=undefined && errors.selected[index]?.title?.message}  error={errors.selected!=undefined && errors.selected[index]?.title?.message?true:false} color={errors.other!=undefined && errors.selected[index]?.title?.message?"error":"success"}/>
                            <Typography className="mt-2 mb-2 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>{index+1}</Typography>
                              {
                                //heare we goo
                              }
                              <NestedFieldArray register={register} nestIndex={index} control={control} />
                          </div>
                        </>
                      )
                      }
                    </div>
                      <Typography className="mt-5" align='center' variant='h6'>تفاصيل المنتج
                        <IconButton  color="success" aria-label="RemoveIcon"  onClick={()=>{
                          detailsAppend(null)
                        }}>
                            <AddIcon />
                        </IconButton>
                      </Typography>
                      <div className="mb-3" style={{position:"relative"}}>
                          <IconButton style={{position:"absolute",right:-30,top:-20}} onClick={()=>{
                            if(watchAllFields.details.length>0)
                              setMinimize(replaceAt(minimize,2,!minimize[2]));
                            else
                              setMinimize(replaceAt(minimize,2,false));
                          }}>
                            <StyledBadge badgeContent={watchAllFields.details.length} style={{color:errors.details!=undefined && errors.details.length>0?"red":"green"}} color="secondary">
                            {minimize[2]?                        <Tooltip title="فتح"><KeyboardArrowDownIcon/></Tooltip>:
                        <Tooltip title="اغلاق"><KeyboardArrowUpIcon /></Tooltip>} 
                           </StyledBadge>
                            </IconButton>
                            <Divider />
                      </div>
                    <div style={{height:minimize[2]?0:"auto",overflow:"hidden"}}>

                      {
                      detailsFields.map((item,index)=>
                        <>
                          <div className='row' key={index+"detailsFields"}>
                            <IconButton  className="col-1 p-0 mt-2 mb-2" size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
                              detailsRemove(index);
                            }}>
                                <RemoveIcon />
                            </IconButton>
                            <TextField {...register(`details.${index}`,{required: "هذا الحقل مطلوب."})} required  className="col-10 p-0 mt-2 mb-2" id="details" label="يرجى وضع التفاصيل هنا كنقاط" variant="outlined" helperText={errors.details!=undefined && errors.details[index]?.message}  error={errors.details!=undefined && errors.details[index]?.message?true:false} color={errors.details!=undefined && errors.details[index]?.message?"error":"success"}/>
                            <Typography className="mt-2 mb-2 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>{index+1}</Typography>
                          </div>
                        </>
                      )
                      }

                    </div>
                      <Typography className="mt-5" align='center' variant='h6'>مميزات المنتج 
                        <IconButton  color="success" aria-label="RemoveIcon" onClick={()=>{
                          specificationAppend({details:null,name:null})
                        }}>
                              <AddIcon />
                        </IconButton>
                      </Typography>
                      <div className="mb-3" style={{position:"relative"}}>
                          <IconButton style={{position:"absolute",right:-30,top:-20}} onClick={()=>{
                            if(watchAllFields.specification.length>0)
                              setMinimize(replaceAt(minimize,3,!minimize[3]));
                            else
                              setMinimize(replaceAt(minimize,3,false));
                          }}>
                            <StyledBadge badgeContent={watchAllFields.specification.length} style={{color:errors.specification!=undefined && errors.specification.length>0?"red":"green"}} color="secondary">
                            {minimize[3]?                        <Tooltip title="فتح"><KeyboardArrowDownIcon/></Tooltip>:
                        <Tooltip title="اغلاق"><KeyboardArrowUpIcon /></Tooltip>} 
                            </StyledBadge>
                            </IconButton>
                            <Divider />
                      </div>
                    <div style={{height:minimize[3]?0:"auto",overflow:"hidden"}}>
                      {
                        specificationFields.map((item,index)=>
                            <>
                              <div className='row' key={index+"specificationFields"}>
                                <IconButton  className="col-1 p-0 mt-2 mb-2" size="medium" color="error" aria-label="RemoveIcon" onClick={()=>{
                                    specificationRemove(index)
                                }}>
                                    <RemoveIcon />
                                </IconButton>
                                <TextField {...register(`specification.${index}.name`,{required: "هذا الحقل مطلوب."})}  className="col-5 p-0 mt-2 mb-2"  label="الاسم" variant="outlined" helperText={errors.specification!=undefined && errors.specification[index]?.name?.message}  error={errors.specification!=undefined && errors.specification[index]?.name?.message?true:false} color={errors.specification!=undefined && errors.specification[index]?.name?.message?"error":"success"}/>
                                <TextField {...register(`specification.${index}.details`,{required: "هذا الحقل مطلوب."})}  className="col-5 p-0 mt-2 mb-2" id="details" label="المواصفه" variant="outlined"  helperText={errors.specification!=undefined && errors.specification[index]?.details?.message}  error={errors.specification!=undefined && errors.specification[index]?.details?.message?true:false} color={errors.specification!=undefined && errors.specification[index]?.details?.message?"error":"success"}/>
                                <Typography className="mt-2 mb-2 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>{index+1}</Typography>
                              </div>
                            </>
                        )
                      }                    
                    </div>
                  </div>
              <Button color="success" type='button' className='m-3' variant="contained" onClick={Add}
              >Add</Button>
              <Button color="info" className='m-3' variant="contained" onClick={Review}>Preview & update</Button>
              <Button color="error" type='reset' className='m-3' variant="contained"
              onClick={()=>{console.log(errors.image);reset();setMinimize([false,false,false,false,false])}}
              >clear</Button>
          </div>
          </form>
  </>
  )
}
