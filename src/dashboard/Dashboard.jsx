import React from 'react'
import { TbUsers } from "react-icons/tb";
import { PiUsersThreeLight } from "react-icons/pi";
import Chart from '../components/Chart';
export const Dashboard = () => {
  return (
    <>
      <div className='p-3'>
        <div>
          <h3 className='fw-bold'>Dashboard</h3>
          <div className="d-flex flex-wrap py-3 px-2  rounded-2 justify-content-sm-start justify-content-center" style={{ backgroundColor: "#0000000D" }}>
            <div className=" p-2">
              <div className=" bg-white rounded p-3  fw-bold" style={{ boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.05)", width: '220px' }}>
                <p className='d-flex gap-2 align-items-center'><TbUsers className='fs-5' /> <span>Total Patients</span></p>
                <h5 className='text-center mt-2 fw-bold' style={{ color: "#003B93" }}>
                  23,543
                </h5>
              </div>
            </div>
            <div className=" p-2">
              <div className=" bg-white rounded p-3  fw-bold" style={{ boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.05)", width: '220px' }}>
                <p className='d-flex gap-2 align-items-center'><PiUsersThreeLight className='fs-4' /> <span>Total Services</span></p>
                <h5 className='text-center mt-2 fw-bold' style={{ color: "#003B93" }}>
                  20
                </h5>
              </div>
            </div>
            <div className="  p-2">
              <div className=" bg-white rounded p-3  fw-bold" style={{ boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.05)", width: '220px' }}>
                <p className='d-flex gap-2 align-items-center'><PiUsersThreeLight className='fs-4' /> <span>Total Recipients</span></p>
                <h5 className='text-center mt-2 fw-bold' style={{ color: "#003B93" }}>
                  5
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 p-3">
              <div className='bg-white p-3 rounded-3' style={{boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.05)"}}>
                <div className="d-flex justify-content-between my-3">
                  <span className='h5 fw-bold'>Patient Growth</span>
                  <small className='text-gray'>Current Year</small>
                </div>
                <Chart/>
              </div>
            </div>
            <div className="col-6 p-3">
              <div className='bg-white p-3 rounded-3' style={{boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.05)"}}>
                <div className="d-flex justify-content-between my-3">
                  <span className='h5 fw-bold'>Services</span>
                  <small className='text-gray'>Current Year</small>
                </div>
                <div>
                <Chart/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
