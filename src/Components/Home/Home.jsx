import axios from 'axios';
import React, { useEffect, useState } from 'react';
import sunrise from '../../images/sunrise.png'
import sunset from '../../images/sunset.png'
import cloud from '../../images/cloud.png'
import wind from '../../images/wind.png'
import hu from '../../images/humadity.png'
import Loading from './../Loading/Loading';

const Home = () => {
   

   const [forecastList, setForecastList] = useState([]);
   const [city, setCity] = useState('cairo');
   const [currentCity, setCurrentCity] = useState('cairo');
   const [flag, setFlag] = useState(false);





   async function getForecast() {
      let { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=11636c7aa1ae41b385d81529242506&q=${city}&days=7&aqi=no&alerts=no`)
      // console.log(data);
      setForecastList(data)
      setFlag(true)
   }

 

   function getDayOfWeek(epochSeconds) {
      // Convert seconds to milliseconds
      let epochMilliseconds = epochSeconds * 1000;

      // Create a new Date object using the epoch milliseconds
      let date = new Date(epochMilliseconds);

      // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      let dayOfWeek = date.getDay();

      // Return the day of the week as a string
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
   }



   async function handleChange(e) {
     
      let { data } = await axios.get(`https://api.weatherapi.com/v1/search.json?key=11636c7aa1ae41b385d81529242506&q=${e.target.value?e.target.value:currentCity}`)
      if (data[0]?.name) {
         console.log(data);
         setCity(data[0]?.name);
        
      }
      
      setCurrentCity(city)

   }

   function clearInput() {
      document.getElementById('input').value =''
      
   }

   useEffect(() => {
      getForecast()

   }, [city]);

   return <>

     {flag? <section className='py-2'>
         <div className="container">
           <div className='d-flex align-items-center mt-2'>
           <input onChange={handleChange}  id='input' type="text" className='form-control w-75 d-inline rounded-end-0' placeholder='search for city..........' name=""  />
           <button onClick={clearInput} className='btn text-white bg-main w-25 rounded-start-0' >Search</button>
           </div>
            <div className="row gy-3 main-row  d-flex align-items-center  mb-2 px-1 py-3 rounded-3">
               <div className="col-xl-4">

                  <div className='bg-main text-white text-center w-100  rounded-4 shadow-lg pt-3 pb-1 px-4 '>
                  {/* <h4 className='border-bottom border-top border-1 '>Forecast</h4> */}

                     <div className="row p-1 d-flex align-items-center my-3 border-bottom border-1 ">
                        <div className="col-4">
                           <h5>{getDayOfWeek(forecastList?.forecast?.forecastday[1]?.date_epoch)}</h5>
                        </div>
                        <div className="col-5 text-center">
                           <h6><i className="fa-solid fa-arrow-up text-white"></i>&nbsp; {forecastList?.forecast?.forecastday[1]?.day.maxtemp_c}<sup>o</sup> c</h6>
                           <h6><i className="fa-solid fa-arrow-down text-white"></i>&nbsp; {forecastList?.forecast?.forecastday[1]?.day.mintemp_c}<sup>o</sup> c</h6>
                        </div>
                        <div className="col-3 text-end">
                           <img src={forecastList?.forecast?.forecastday[1]?.day.condition.icon} className='w-100' alt="" />
                        </div>
                     </div>
                     <div className="row p-1 d-flex align-items-center my-3 border-bottom border-1 ">
                        <div className="col-4">
                           <h5>{getDayOfWeek(forecastList?.forecast?.forecastday[2]?.date_epoch)}</h5>
                        </div>
                        <div className="col-5 text-center">
                           <h6><i className="fa-solid fa-arrow-up text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[2]?.day.maxtemp_c}<sup>o </sup>c</h6>
                           <h6><i className="fa-solid fa-arrow-down text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[2]?.day.mintemp_c}<sup>o </sup>c</h6>
                        </div>
                        <div className="col-3 text-end">
                           <img src={forecastList?.forecast?.forecastday[2]?.day.condition.icon} className='w-100' alt="" />
                        </div>
                     </div>
                     <div className="row p-1 d-flex align-items-center my-3 border-bottom border-1 ">
                        <div className="col-4">
                           <h5>{getDayOfWeek(forecastList?.forecast?.forecastday[3]?.date_epoch)}</h5>
                        </div>
                        <div className="col-5 text-center">
                           <h6><i className="fa-solid fa-arrow-up text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[3]?.day.maxtemp_c}<sup>o </sup>c</h6>
                           <h6><i className="fa-solid fa-arrow-down text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[3]?.day.mintemp_c}<sup>o </sup>c</h6>
                        </div>
                        <div className="col-3 text-end">
                           <img src={forecastList?.forecast?.forecastday[3]?.day.condition.icon} className='w-100' alt="" />
                        </div>
                     </div>
                     <div className="row p-1 d-flex align-items-center my-3 border-bottom border-1 ">
                        <div className="col-4">
                           <h5>{getDayOfWeek(forecastList?.forecast?.forecastday[4]?.date_epoch)}</h5>
                        </div>
                        <div className="col-5 text-center">
                           <h6><i className="fa-solid fa-arrow-up text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[4]?.day.maxtemp_c}<sup>o </sup>c</h6>
                           <h6><i className="fa-solid fa-arrow-down text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[4]?.day.mintemp_c}<sup>o </sup>c</h6>
                        </div>
                        <div className="col-3 text-end">
                           <img src={forecastList?.forecast?.forecastday[4]?.day.condition.icon} className='w-100' alt="" />
                        </div>
                     </div>
                     <div className="row p-1 d-flex align-items-center my-3 border-bottom border-1 ">
                        <div className="col-4">
                           <h5>{getDayOfWeek(forecastList?.forecast?.forecastday[5]?.date_epoch)}</h5>
                        </div>
                        <div className="col-5 text-center">
                           <h6><i className="fa-solid fa-arrow-up text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[5]?.day.maxtemp_c}<sup>o </sup>c</h6>
                           <h6><i className="fa-solid fa-arrow-down text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[5]?.day.mintemp_c}<sup>o </sup>c</h6>
                        </div>
                        <div className="col-3 text-end">
                           <img src={forecastList?.forecast?.forecastday[5]?.day.condition.icon} className='w-100' alt="" />
                        </div>
                     </div>

                    <div className="row p-1 d-flex align-items-center my-3 ">
                        <div className="col-4">
                           <h5>{getDayOfWeek(forecastList?.forecast?.forecastday[6]?.date_epoch)}</h5>
                        </div>
                        <div className="col-5 text-center">
                           <h6><i className="fa-solid fa-arrow-up text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[6]?.day.maxtemp_c}<sup>o </sup>c</h6>
                           <h6><i className="fa-solid fa-arrow-down text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[6]?.day.mintemp_c}<sup>o </sup>c</h6>
                        </div>
                        <div className="col-3 text-end">
                           <img src={forecastList?.forecast?.forecastday[6]?.day.condition.icon} className='w-100' alt="" />
                        </div>
                     </div>




                  </div>
               </div>
               <div className="col-xl-4">
                  <div className='bg-main w-100 py-2 px-3 rounded-4 shadow-lg'>
                     
                     <div className="row d-flex text-white  align-items-center mt-3 mb-3 border-bottom border-1">
                        <div className="col-4">
                           <h4>sunrise</h4>
                        </div>
                        <div className="col-4 text-center">
                           <h5>{forecastList?.forecast?.forecastday[0]?.astro?.sunrise}</h5>
                        </div>
                        <div className="col-4 text-end">
                           <img src={sunrise} className='w-75 pb-2' alt="" />
                        </div>
                     </div>
                     <div className="row d-flex text-white   align-items-center mt-3 mb-3 border-bottom border-1">
                        <div className="col-4">
                           <h4>sunset</h4>
                        </div>
                        <div className="col-4 text-center">
                           <h5>{forecastList?.forecast?.forecastday[0]?.astro?.sunset}</h5>
                        </div>
                        <div className="col-4 text-end">
                           <img src={sunset} className='w-75 pb-2' alt="" />
                        </div>
                     </div>
                     <div className="row d-flex text-white  align-items-center mt-3 mb-3 border-bottom border-1">
                        <div className="col-4">
                           <h4>cloud</h4>
                        </div>
                        <div className="col-4 text-center">
                           <h5 className='text-center'>{forecastList?.current?.cloud}</h5>
                        </div>
                        <div className="col-4 text-end">
                           <img src={cloud} className='w-75 pb-2' alt="" />
                        </div>
                     </div>
                     <div className="row d-flex text-white  align-items-center mt-3 mb-3 border-bottom border-1">
                        <div className="col-4">
                           <h4>wind</h4>
                        </div>
                        <div className="col-4 text-center">
                           <h5 className='text-center'>{forecastList?.current?.wind_kph} kmh</h5>
                        </div>
                        <div className="col-4 text-end">
                           <img src={wind} className='w-75 pb-2' alt="" />
                        </div>
                     </div>
                     <div className="row d-flex text-white  align-items-center mt-3 mb-1">
                        <div className="col-4">
                           <h4>humidity</h4>
                        </div>
                        <div className="col-4">
                           <h5 className='text-center'>{forecastList?.current?.humidity}</h5>
                        </div>
                        <div className="col-4 text-end">
                           <img src={hu} className='w-75 pb-2' alt="" />
                        </div>
                     </div>

                  </div>
               </div>
               <div className="col-xl-4">
                  <div className='text-center w-100 h-100 shadow-lg rounded-4  text-white p-2 bg-main'>
                  <h6 className='my-4'>Today's weather</h6>

                     <h2 className='fs-3  my-3'>{forecastList?.location?.name} , {forecastList?.location?.country}</h2>
                     <img src={forecastList?.current?.condition?.icon} className='w-25' alt="" />
                     <h2 className='fs-1 mb-3'>{forecastList?.current?.temp_c}<sup>o </sup>c</h2>
                     <h5 className='my-4'>{forecastList?.current?.condition?.text}</h5>
                     <h5 className='my-4'>{getDayOfWeek(forecastList?.forecast?.forecastday[0]?.date_epoch)}</h5>
                     <h5 className='my-4'>{forecastList?.forecast?.forecastday[0]?.date}</h5>
                     <div className="row pt-3">
                        <div className="col-6">
                           <div>
                           
                              <h5><i className="fa-solid fa-arrow-up text-white"></i>&nbsp;  {forecastList?.forecast?.forecastday[0]?.day?.maxtemp_c}<sup>o </sup>c</h5>
                           </div>
                        </div>
                        <div className="col-6">
                           <div>
                              <h5><i className="fa-solid fa-arrow-down text-white"></i>&nbsp; {forecastList?.forecast?.forecastday[0]?.day?.mintemp_c}<sup>o</sup> c</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
      
      :<Loading/>}
   </>
}

export default Home;
