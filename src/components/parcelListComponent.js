import React from "react";
export const  ParcelListComponent =(props)=>{
  const {parcelOrder} =props;
  const parcelOrders = parcelOrder.map(parcels=>{
    return(
        <tr>
          <td>{parcels.serial_no}</td>
          <td>{parcels.receivers}</td>
          <td>
            {parcels.description}
          </td>
          <td>{parcels.pickup}</td>
          <td>{parcels.destination}</td>
          <td>{parcels.current_location}</td>
          <td>{parcels.delivery_price}</td>
          <td>{parcels.status}</td>
          <td>
            <img src="https://img.icons8.com/color/48/000000/approve-and-update.png"
                 style={{width:"20px", height:"20px"}}/>
          </td>
        </tr>
    )
  });
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
                  <th style={{width:"10%"}}>Receiver</th>
                  <th style={{width:"30%"}}>Description</th>
                  <th style={{width:"10%"}}>Pick up</th>
                  <th style={{width:"10%"}}>Destination</th>
                  <th style={{width:"10%"}}>Location</th>
                  <th style={{width:"15%"}}>Price</th>
                  <th style={{width:"10%"}}>Status</th>
                  <th style={{width:"15%"}}>Delivery</th>
                </tr>
                {parcelOrders}
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