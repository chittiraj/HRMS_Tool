import React from 'react';

function LeaveApplication() {
  return (
    <div>
      <div className='d-flex justify-content-between manualhead'>
                <div className='manualchild'>
                    <h5>Leave Application List</h5>
                    <div className='d-flex'>
                        <p>164</p>
                            of
                        <p>164</p>
                        Results Found
                    </div>
                </div>
                <div style={{margin:'0px 20px 0px 0px '}}>
                    <button>Add Leave Application</button>
                </div>
            </div>
            <div className='row'>
                <div className='col manualdataform'>
                    <h6>Data From</h6>
                    <input type="text"className="manualinput"></input>
                    <hr className="manualline"></hr>
                </div>
                <div className='col manualdataupto'>
                    <h6>Data upto</h6>
                    <input type="text"className="manualinput"></input>
                    <hr className="manualline"></hr>
                </div>
                <div className='col manualdatabutton'>
                    <button>Filter</button>
                </div>
            </div>
            <div className='d-flex justify-content-between manualshow' >
                <div><h6>Show<span>10</span>entries</h6></div>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex'>
                        <div className='manualsearch'>
                            <h6>search :</h6>
                        </div>
                       <div className='manualdreachdata'>
                            <input type="search" ></input>
                            <hr></hr>
                       </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <table className="table">
                    <thead className='thead'>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Emp Code</th>
                        <th scope="col">Card No</th>
                        <th scope="col">Department</th>
                        <th scope="col">From date</th>
                        <th scope="col">To date</th>
                        <th scope="col">No. of dates Leave</th>
                        <th scope="col">Leave Type</th>
                        <th scope="col">Leave Status</th>
                        <th scope="col" style={{padding:'0px 30px'}}>Action</th>
                    
                        </tr>
                    </thead>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>00000056</td>
                            <td>Dev</td>
                            <td>20/02/2024</td>
                            <td>22/02/2024</td>
                            <td>1</td>
                            <td>Casual Leave</td>
                            <td>Approved</td>
                            <td>
                               <div  className="button-container">
                               <button className="buttonedit">
                                    <img className="button-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                               </div>
                            </td>
                            {/* <td className='awardsedit'><button><img src='../images/2247411-200.png' alt='edit'></img></button></td>
                            <td className='awardsdelete'><button><img src='../images/2247411-200.png' alt='edit'></img></button></td> */}
                            </tr>
                        </tbody>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>00000056</td>
                            <td>Dev</td>
                            <td>20/02/2024</td>
                            <td>22/02/2024</td>
                            <td>1</td>
                            <td>Casual Leave</td>
                            <td>Approved</td>
                            <td >
                                <div className="button-container">
                                <button className="buttonedit">
                                    <img className="button-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>00000056</td>
                            <td>Dev</td>
                            <td>20/02/2024</td>
                            <td>22/02/2024</td>
                            <td>1</td>
                            <td>Casual Leave</td>
                            <td>Approved</td>
                            <td>
                                <div className="button-container">
                                <button className="buttonedit">
                                    <img className="button-img" src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" src="../images/6349361-200.png" alt="delete" />
                                </button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                </table>
                </div>
            </div>
    </div>
  )
}

export default LeaveApplication;