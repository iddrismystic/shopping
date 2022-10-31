import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/navBar'
import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  const [getDate, setGetDate] = useState("")
  const [year, setyear] = useState("")
  const [month, setmonth] = useState("")
  const [day, setday] = useState("")
  const [Docs, setDocs] = useState([])

  const filTerData = ()=>{
    if(Docs){
      Docs.filter(filtData =>{
        if(filtData.month === month && filtData.day === day && filtData.year === year){
          setDocs(filtData)
        }
      })
    }
  }
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

const handleDates  = ()=>{
setyear(getDate[0])
setmonth(getDate[1])
setday(getDate[2])
}

const handleDate = (e)=>{
  setGetDate(e.target.value.toString().split("-"))
  handleDates()
}
  return (
    <div className='content'>
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
       <div className='row-flex outlineBtn'>
        <i className="icon-cloud-download"></i>  <span>Download Data</span>
        </div>
       </Link>
      </p>
      <p>
       <div className="row">
       <div className="col sm-4 md-4 lg-4">
        <div className="text-bold">Day</div>
        <select name="" id="" className='input'>
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="1">3</option>
        </select>
        </div>
        <div className="col sm-4 md-4 lg-4 padding-right-10 padding-left-10">
        <div className="text-bold">Month</div>
        <select name="" id="" className='input'>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        </div>
        <div className="col sm-4 md-4 lg-4">
        <div className="text-bold">Year</div>
        <select name="" id="" className='input'>
        <option value="1">2022</option>
        <option value="1">2023</option>
        <option value="1">2024</option>
        <option value="1">2025</option>
        <option value="1">2026</option>
        </select>
        </div>
       </div>
      </p>
        </div>
        {/* <p className='padding'>
        <div className="text-bold">
          Sales For Janaury 2022
        </div>
      </p>
      <div className="row-flex">
        <div className="padding">
          <div className='analyticsCard card'>
            <div className="text-bold">Monthly Sales</div>
            <p className='h4'>20</p>
          </div>
        </div>
        <div className="padding">
          <div className='analyticsCard card'>
            <div className="text-bold">Today</div>
            <p className='h4'>20</p>
          </div>
        </div>
      </div> */}
   
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
}
