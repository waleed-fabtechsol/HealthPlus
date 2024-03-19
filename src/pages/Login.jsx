import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
    return (
        <>
        <div className="container-fluid py-5 bg-light" style={{height:"100vh"}}>
          <div className="container h-100 bg-primary p-0">
            <div className="row g-0 h-100">
              <div className="col-6 bg-login h-100 d-md-block d-none"  >
                <img src={require('../assets/image.png')} className="rounded-3 w-100 h-100" style={{objectFit:"cover"}} alt="img" />
              </div>
              <div className="col-md-6 bg-white p-4">
                <div className="rounded-wrapper">
                <div className="gradient-border h-100 d-flex justify-content-center">
                  <div className="d-flex flex-column align-items-center login-sec-2 ">
                    <h4 className="fw-bold">LOGIN HERE</h4>
                    <p className="text-gray text-center">How to i get started lorem ipsum dolor at?</p>
                    <div className="position-relative w-100 mb-3">
                    <input type="email" className="form-control border-0 ps-5" style={{backgroundColor:"#0057EB08", height:"50px"}} placeholder="username"/>
                    <img src={require('../assets/Vector.png')} alt="img"  className="position-absolute translate-middle " style={{top:"50%", left:"25px", width:"1.1rem"}}/>
                    </div>

                    <div className="position-relative w-100 mb-5">
                    <input type="password" className="form-control border-0 ps-5" style={{backgroundColor:"#0057EB08", height:"50px"}} placeholder="password"/>
                    <img src={require('../assets/Frame.png')} alt="img"  className="position-absolute translate-middle " style={{top:"50%", left:"25px", width:"1.5rem"}}/>
                    </div>
                    <button className="btn w-100 btn-block text-white py-2 rounded-3" style={{backgroundColor:"#04BCFA"}} onClick={e =>navigate('/dashboard')}>Sign in</button>
                    <Link className="text-gray text-start w-100 mb-4" style={{textDecoration:"none"}}><small>Forget Password ?</small></Link>
                    <div className="d-flex gap-3 mb-4">
                      <span className="p-3 rounded" style={{backgroundColor:'#F0EDFF'}}><img style={{width:"25px", height:"25px"}} src={require('../assets/google.png')} alt="img"/></span>
                      <span className="p-3 rounded" style={{backgroundColor:'#F0EDFF'}}><img style={{width:"25px", height:"25px"}} src={require('../assets/facebook.png')} alt="img"/></span>
                    </div>
                    <Link>Register Your Account</Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default Login;