import React, { useState } from 'react';
function Form(){
    const [ qclear,setClear] = useState(0);
    function Email(){
      if(setClear===0){
        return  <div className='info'> 
      <h4 className='a1'>نام کاربری:</h4>
      <input className='txt1' type='text' value={""} />
      <h4 className='a2'>ایمیل:</h4>
      <input className="txt2" type="text" value={""}/>
      </div>}else{
        return  <div className='info'> 
        <h4 className='a1'>نام کاربری:</h4>
        <input className='txt1' type='text'/>
        <h4 className='a2'>ایمیل:</h4>
        <input className="txt2" type="text" />
        </div>
      }
      
    }
    function Paragraph(){
      return <textarea rows={3}  className='paragraph'></textarea>
    }
    function Send(){
      function onclear(){
        setClear(1 + qclear);
      }
      return <div className='send'>
        <button className='bt1' type='submit'>ارسال</button>
        <button onClick={onclear} className='bt2'>پاک کردن</button>
      </div>
    }


    return <div className='form'>
      <h2 className='titel'>فرم ارسال پیام</h2>
      <Email></Email>
      <Paragraph></Paragraph>
      <Send></Send>
    </div>
  }

  export default Form;