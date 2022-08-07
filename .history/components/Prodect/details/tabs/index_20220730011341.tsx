import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from "@mui/lab/TabPanel"
import Divider from '@mui/material/Divider'
import Style from './index.module.scss'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { DropzoneArea } from "material-ui-dropzone";
import  Button  from '@mui/material/Button'
import {SpecificationType} from '@Interface/prodect'
import { NextPage } from 'next';
interface Props {
  details:String[]
  spasification:SpecificationType[]
}


const LabTabs: NextPage<Props> = (Props) => {
  const [value, setValue] = React.useState('1');
  const handleChangeFile = (files:any)=>{

  }
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="التفاصيل" value="1" />
            <Tab label="المواصفات" value="2" />
            <Tab label="مراجعات" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <ul>
              {
                Props.details.map((item,index)=>
                <li key={item + index} className="m-1 m-md-3">Mukta Moslin Silk Dress-12045</li>
                )
              }
            </ul>
        </TabPanel>
        <TabPanel value="2">
            <div className="p-3 row">
               <div  className='col-6 gray p-3'>مواصفات المنتج</div>
               <div  className='col-6 gray p-3'>المعلومات</div>
               <strong  className='col-6 p-3'>مواصفات المنتج</strong>
               <div  className='col-6 p-3'>المعلومات</div>
               <Divider/>
               <strong  className='col-6 p-3'>مواصفات المنتج</strong>
               <div  className='col-6 p-3'>المعلومات</div>
               <Divider/>
               <strong  className='col-6 p-3'>مواصفات المنتج</strong>
               <div  className='col-6 p-3'>المعلومات</div>
               <Divider/>
            </div>
        </TabPanel>
        <TabPanel value="3">
            <h3 className='mt-4'>آراء المستهلكين</h3>
            <div className="d-md-flex mt-4">
                <div className='m-4'>
                  <h2 className={Style.rating}>0</h2>
                  <p className={Style.ratingText}>التققييم 0</p>
                </div>
                <div className=''>
                 <div className={Style.MainRatio}>
                    <div className="sg-progress">
                        <span>5 star</span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${(5/5)*100}%`}} ></div>
                        </div>   
                    </div> 
                    <div className="sg-progress">
                        <span>4 star</span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${(4/5)*100}%`}}></div>
                        </div>   
                    </div> 
                    <div className="sg-progress">
                        <span>3 star</span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${(3/5)*100}%`}}></div>
                        </div>  
                    </div> 
                    <div className="sg-progress">
                        <span>2 star</span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${(2/5)*100}%`}}></div>
                        </div>   
                    </div> 
                    <div className="sg-progress">
                        <span>1 star</span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${(1/5)*100}%`}}></div>
                        </div>    
                    </div> 
                </div>
                </div>
            </div>
            <h3 className='mt-5 mb-4'>التعليقات</h3>
            <div className="d-flex">
              <div className="m-2">
                <Image src="https://chtstudio.com/demo/ecomart/images/blog/4.png" alt="asdasd" width={60} height={60}/>
              </div>
              <div className="m-2">
                <div className="primaryColor">
                  mohamad abudaya
                </div>
                <div>
                  <Rating style={{fontSize:16,margin:0,padding:0}}  value={5} readOnly />
                </div>
                <div className="colorSecandary ">
                  27 Apr 2021
                </div>
              </div>  
            </div>
            <p className="mt-3 mb-3 colorSecandary">
                Picture quality is good, phone is running smooth and stylish as well BUT sharing something with other brands phone, loading apps and vedio calling are super SLOW, I repeat super slow. So, I suggest its not worth to buy at all! Very much disappointed that I left Huawei. Picture quality is good, Phone is running smooth and stylish as well BUT sharing something with other brands phone, loading apps and vedio calling are super slow.
            </p>
            <div className="mb-3  ">
                <span className="m-1 "  >
                   <Image src="https://chtstudio.com/demo/ecomart/images/others/r1.png" alt="asdasd" width={100} height={100}/>
                </span>
                <span className="m-1 " >
                   <Image src="https://chtstudio.com/demo/ecomart/images/others/r1.png" alt="asdasd" width={100} height={100}/>
                </span>
            </div>
            <div className="m-md-5 m-3">
              <Divider/>
              <div className="mt-md-5 mt-3">
                <div className="d-flex">
                <div className="m-2">
                   <Image src="https://chtstudio.com/demo/ecomart/images/blog/4.png" alt="asdasd" width={60} height={60}/>
                </div>
                <div className="m-2">
                <div className="primaryColor">
                  mohamad abudaya
                </div>
                <div >
                  <Rating style={{fontSize:16,margin:0,padding:0}}  value={5} readOnly />
                </div>
                <div className="colorSecandary">
                  27 Apr 2021
                </div>
              </div>  
            </div>
            <p className="mt-3 mb-3 colorSecandary">
                Picture quality is good, phone is running smooth and stylish as well BUT sharing something with other brands phone, loading apps and vedio calling are super SLOW, I repeat super slow. So, I suggest its not worth to buy at all! Very much disappointed that I left Huawei. Picture quality is good, Phone is running smooth and stylish as well BUT sharing something with other brands phone, loading apps and vedio calling are super slow.
            </p>
            <div className="mb-3  ">
                <span className="m-1 "  >
                   <Image src="https://chtstudio.com/demo/ecomart/images/others/r1.png" alt="asdasd" width={100} height={100}/>
                </span>
                <span className="m-1 " >
                   <Image src="https://chtstudio.com/demo/ecomart/images/others/r1.png" alt="asdasd" width={100} height={100}/>
                </span>
            </div>
              </div>
            </div>
            <h3 className='mt-4'>اكتب رأيك الخاص</h3>
            <div className="d-flex ">
              <div className="m-2">
                <div>جودة سيئة</div>
                <Rating style={{fontSize:16,margin:0,padding:0}}  value={0} readOnly />
              </div>
              <div className="m-2">
                <div>جودة متوسطة</div>
                <Rating style={{fontSize:16,margin:0,padding:0}}  value={0} readOnly />
              </div>
              <div className="m-2">
                <div>جودة جيدة</div>
                <Rating style={{fontSize:16,margin:0,padding:0}}  value={0} readOnly />
              </div>
            </div>
            
            <TextField 
              className="m-2 w-100 w-md-75 w-lg-50" 
              placeholder="اكتب عنوان للتعليق"
              fullWidth 
              id="outlined-basic" 
              label="العنوان" 
              variant="outlined" 
            />
            <TextField
              fullWidth id="outlined-basic" label="التعليقات" variant="outlined"
              className="m-2"
              placeholder="اكتب تعليققك هنا"
              multiline
              rows={8}
          />
          <DropzoneArea
            acceptedFiles={['image/*', 'video/*', 'application/*']}
            //onChange={this.handleChange.bind(this)}
            showFileNames
            dropzoneText="رفع صور "
            showAlerts={false}
            filesLimit={20}
          />
          <Button variant='contained' style={{width:120}} className="m-2 mt-5">تعليق</Button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default LabTabs