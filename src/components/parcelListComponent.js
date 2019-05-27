import React from "react";
export const  ParcelListComponent =(props)=>{
  return (
      <div className="home-container">
        <div className="main-content">
          <div className="row userAdmin-dashboard-content">
            <div className="col col-lg-1">
            </div>
            <div className="col col-lg-10">
              <table id="myTable">
                <tr className="header">
                  <th style={{width:"10%"}}>Serial No.</th>
                  <th style={{width:"10%"}}>Order By</th>
                  <th style={{width:"10%"}}>Parcel</th>
                  <th style={{width:"30%"}}>Description</th>
                  <th style={{width:"10%"}}>Pick up</th>
                  <th style={{width:"10%"}}>Destination</th>
                  <th style={{width:"10%"}}>Location</th>
                  <th style={{width:"15%"}}>Price</th>
                  <th style={{width:"10%"}}>Status</th>
                  <th style={{width:"15%"}}>Delivery</th>
                </tr>
                <tr>
                  <td>12856</td>
                  <td>Serwage</td>
                  <td>cooker</td>
                  <td>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                    web designs.
                  </td>
                  <td>Tororo</td>
                  <td>Kampala</td>
                  <td>Jinja</td>
                  <td>4600 Ugx</td>
                  <td>Transit</td>
                  <td>
                    <img src="https://img.icons8.com/color/48/000000/approve-and-update.png"
                         style={{width:"20px", height:"20px"}}/>
                  </td>
                </tr>
                <tr>
                  <td>12856</td>
                  <td>Akim</td>
                  <td>cooker</td>
                  <td>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                    web designs.
                  </td>
                  <td>Tororo</td>
                  <td>Kampala</td>
                  <td>Jinja</td>
                  <td>4600 Ugx</td>
                  <td>Delivered</td>
                  <td>
                    <img src="https://img.icons8.com/color/48/000000/approve-and-update.png"
                         style={{width:"20px", height:"20px"}}/>
                  </td>
                </tr>
                <tr>
                  <td>12856</td>
                  <td>Brayan</td>
                  <td>laptops</td>
                  <td>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                    web designs.
                  </td>
                  <td>Tororo</td>
                  <td>Kampala</td>
                  <td>Jinja</td>
                  <td>4600 Ugx</td>
                  <td>Transit</td>
                  <td>
                    <img src="https://img.icons8.com/color/48/000000/approve-and-update.png"
                         style={{width:"20px", height:"20px"}}/>
                  </td>
                </tr>
                <tr>
                  <td>12856</td>
                  <td>Rolyce</td>
                  <td>cooker</td>
                  <td>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                    web designs.
                  </td>
                  <td>Tororo</td>
                  <td>Kampala</td>
                  <td>Jinja</td>
                  <td>4600 Ugx</td>
                  <td>Transit</td>
                  <td>
                    <img src="https://img.icons8.com/color/48/000000/approve-and-update.png"
                         style={{width:"20px", height:"20px"}}/>
                  </td>

                </tr>
                <tr>
                  <td>12856</td>
                  <td>popo</td>
                  <td>cooker</td>
                  <td>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                    web designs.
                  </td>
                  <td>Tororo</td>
                  <td>Kampala</td>
                  <td>Jinja</td>
                  <td>4600 Ugx</td>
                  <td>Transit</td>
                  <td>
                    <img src="https://img.icons8.com/color/48/000000/approve-and-update.png"
                         style={{width:"20px", height:"20px"}}/>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col col-lg-1">
            </div>
          </div>
      </div>
      </div>
  );
};
export default ParcelListComponent;