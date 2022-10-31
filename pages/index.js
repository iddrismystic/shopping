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
        <div className="text-bold">Date</div>
       <input className='input' type="date" name="" id="" placeholder='Date' onChange={handleDate} />
      </p>
        </div>
        <p className='padding'>
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
}
