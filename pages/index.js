import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/navBar'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  
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
        <i className="icon-cloud-download"></i>  <span className='padding-left-10'>Download Data</span>
        </div>
       </Link>
      </p>
      <p>
        <div className="text-bold">Date</div>
       <input className='input' type="date" name="" id="" placeholder='Date' />
      </p>
        </div>
        <p className='padding'>
        <div className="text-bold">
          Sales For Janaury 2022
        </div>
      </p>
      <div className="row-flex">
        <div className="padding">
          <div className='analyticsCard'>
            <div className="text-bold">Monthly Sales</div>
            <p className='h4'>20</p>
          </div>
        </div>
        <div className="padding">
          <div className='analyticsCard'>
            <div className="text-bold">Today</div>
            <p className='h4'>20</p>
          </div>
        </div>
      </div>
   
      <p style={{overflowX:"auto"}}>

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
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </p>
      </div>
    </div>
  )
}
