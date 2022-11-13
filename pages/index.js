import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/navBar'
import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import endpoint from '../database/endpoint';
import { useEffect, useRef } from 'react';
import Axios from "axios"


export default function Home() {
  const [gottenData, setgottenData] = useState(false)
  const [year, setyear] = useState("")
  const [month, setmonth] = useState("")
  const [day, setday] = useState("")
  const [Docs, setDocs] = useState([])
  const [sales, setsales] = useState([])
  const [currentData, setcurrentData] = useState([])
  const [myarr, setmyarr] = useState([])
  const [todayArr, settodayAarr] = useState([])
  const [todayPrice, settodayPrice] = useState([])
  const [todayData, settodayData] = useState([])
  const [showPrint, setshowPrint] = useState(false)
  const [currentPrice, setcurrentPrice] = useState("")
  
  const form = useRef(null)

 



  const filTerData = ()=>{
    new Promise((resolve, reject)=>{
      setcurrentPrice(0)
      setmyarr([])
      setDocs([])
      setcurrentData([])
      resolve()
    }).then(()=>{
    if(sales){
      const formInit = form.current
      setday(formInit["day"].value)
      setmonth(formInit["month"].value)
      setyear(formInit["year"].value)
      sales.filter(filtData =>{
        if(filtData.month.toString() === formInit["month"].value.toString() && filtData.day.toString() === formInit["day"].value.toString() && filtData.year.toString() === formInit["year"].value.toString()){
          currentData.push(filtData)
          myarr.push(filtData.price)
          setcurrentPrice(myarr.reduce((a,b)=> a + b ,0))
          setDocs(currentData)
        }
      })
    }
          
  })
  }
 const [gottenToday , setgottenToday] = useState(false)
  useEffect(()=>{
 if(gottenData && !gottenToday){
  sales.filter(filtDocs=>{
    if(filtDocs.day === new Date().getDate() && filtDocs.month === new Date().getMonth() + 1 && filtDocs.year === new Date().getFullYear()){
      todayArr.push(filtDocs.price)
      settodayPrice(todayArr.reduce((a,b)=> a + b , 0))
      setgottenToday(true)
    }
  })
 }
  })

  useEffect(()=>{
    if(!gottenData){
      Axios.get(endpoint + "/sales")
      .then(docs=>{
        setsales(docs.data)
        setgottenData(true)
        filTerData()
      }).catch(err=>alert(err.message))
    }
  })

  // const [getOnce, setgetOnce] = useState(true)
  // useEffect(()=>{
  //   if(sales && getOnce){
  //     filTerData(()=>{
  //       setgetOnce(false)
  //     })
  //   }
  // })

const data = [
  {
    name: 'Janaury',
    sales: 4000,
  },
  {
    name: 'February',
    sales: 4500,
  },
  {
    name: 'March',
    sales: 2000,
  },
  {
    name: 'April',
    sales: 1000,
  },
  {
    name: 'May',
    sales: 40400,
  },
  {
    name: 'June',
    sales: 4100,
  },
  {
    name: 'July',
    sales: 2400,
  },
];

// useEffect(()=>{
//   Axios.get(endpoint).then(data=>{
//     console.log(data.data)
//   })
// })


 if(sales){
  return (
    <div className='content'>
      {
        showPrint &&
        <div className="print">
        <div className="printContent">
         <p>
         <button className="button text-white success" onClick={()=>{
          window.print()
          setshowPrint(false)
         }}>
            Print
            </button>
         <button className="button danger text-white" onClick={()=>{
          setshowPrint(false)
         }}>
            Cancel
            </button>
            </p>
            <p>
          Sales for <span className="text-bold"> {day} / {month} / {year}</span>
          </p>
        <table className="table card text-center">
                <thead>
                  <th>Product</th>
                  <th>price</th>
                  <th>Customer</th>
                  <th>Contact</th>
                  <th>date</th>
                </thead>
                <tbody>
                  {
                    Docs.map(docs=>(
                      <tr>
                        <td>{docs.product}</td>
                        <td>{docs.price}</td>
                        <td>{docs.customer}</td>
                        <td>{docs.contact}</td>
                        <td>{docs.day} / {docs.month} / {docs.year}</td>
                      </tr>
                    ))
                  }
                  
                </tbody>
              </table>
          </div>
        </div>
      }
      
      <Nav />
      <div className='width-700-max center'>
        <div className="padding">
        <p>
        <div className="h1">DashBoard and Analytics</div>
        <p>
          Check your daily and monthly sales
        </p>
      </p>

      <p className="row-flex space-between">
        <div className="h4">
          Overview
        </div>
       <Link href='/'>
       <div className='row-flex outlineBtn' onClick={()=>setshowPrint(true)}>
        <i className="icon-cloud-download"></i>  <span>Download Data</span>
        </div>
       </Link>
      </p>
      <p>
        <form ref={form}>
        <div className="row">
       <div className="col sm-4 md-4 lg-4">
        <div className="text-bold">Day</div>
        <select name="day" id="" defaultValue={new Date().getDate()} className='input' onChange={()=>{
          filTerData()
        }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        </select>
        </div>
        <div className="col sm-4 md-4 lg-4 padding-right-10 padding-left-10">
        <div className="text-bold">Month</div>
        <select name="month" id="" defaultValue={new Date().getMonth() + 1} className='input'  onChange={()=>{
          filTerData()
        }}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        </div>
        <div className="col sm-4 md-4 lg-4">
        <div className="text-bold">Year</div>
        <select name="year" id="" defaultValue={new Date().getFullYear()} className='input'  onChange={()=>{
          filTerData()
    
        }}>
        <option value="2022">2022</option>
        <option value="1">2023</option>
        <option value="1">2024</option>
        <option value="1">2025</option>
        <option value="1">2026</option>
        </select>
        </div>
       </div>
        </form>
      </p>
        </div>
      <div className="row section2">
        <div className="col sm-12 md-4 lg-4">
        <div className='analyticsCard card'>
         <div className="cardContent">
         <div className="text-bold">Quantity Sold</div>
            <p className='h4'>
              {Docs.length}
            </p>
         </div>
          </div>
        </div>
        <div className="col sm-12 md-4 lg-4 padding-right-10 padding-left-10">
        <div className='analyticsCard card'>
         <div className="cardContent">
         <div className="text-bold">Monthly Sales</div>
            <div className="row-flex">
            <p className='h4'><span>GHC</span> {currentPrice}</p>
            <div className="text-small padding-left-10">
            45  <i className="icon-arrow-up text-green"></i>
            </div>
            </div>
         </div>
          </div>
        </div>
        <div className="col sm-12 md-4 lg-4">
        <div className='analyticsCard card'>
         <div className="cardContent">
         <div className="text-bold">Daily Sales</div>
            <div className="row-flex">
            <p className='h4'>
              {todayPrice}
            </p>
            <div className="text-small padding-left-10">
            45  <i className="icon-arrow-down text-red"></i>
            </div>
            </div>
         </div>
          </div>
        </div>

      </div>
   
      <p style={{overflowX:"auto"}} className="card">

        <BarChart
          width={700}
          height={300}
          data={data}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#82CD47" />
        </BarChart>
      </p>
      </div>
    
    </div>
  )
 }else{
  return ""
 }
}
