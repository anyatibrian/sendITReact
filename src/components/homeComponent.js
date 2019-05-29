import React from "react";
export const  HomeComponent=(props)=>{
  const {
    toggleButton,
    display,
    receiversName,
    description,
    pickup,
    weight,
    destination,
    onChange,
    onSubmit
  }= props;
    return (
        <div className="home-container">
          <div className="row">
            <div className="col col-lg-1">
            </div>
            <div className="col col-lg-10">
              <button className="btn btn-success" onClick={toggleButton}>new order</button>
            </div>
            <div className="col col-lg-1">
          </div>
          </div>
          <div className="row">
            <div className="col col-lg-4">
            </div>
            <div className="col col-lg-4">
              {display &&
              <div className="modal" style={{display:display}}>
                <div className="">
                  <div className="row">
                    <div className="col col-lg-3">
                    </div>
                    <div className="col col-lg-6">
                      <div className="modal-content">
                        <span className="close" id="update_add_modal" onClick={toggleButton} >&times;</span>
                        <h2>New Parcel Order</h2>
                        <form method="POST" onSubmit={onSubmit}>
                          <div className="form-group">
                            <label>Receivers Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="receiversName"
                                required
                                value={receiversName}
                                onChange={onChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                name="description"
                                required
                                value={description}
                                onChange={onChange}
                            >
                            </textarea>
                          </div>
                          <div className="form-group">
                            <label>Pickup</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pickup"
                                required
                                value={pickup}
                                onChange={onChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Destination</label>
                            <input
                                type="text"
                                className="form-control"
                                name="destination"
                                required
                                value={destination}
                                onChange={onChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>weight</label>
                            <input
                                type="number"
                                className="form-control"
                                name="weight"
                                required
                                value={weight}
                                onChange={onChange}
                            />
                          </div>
                          <div className="form-group">
                            <button className="btn btn-order">
                              Place Order
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col col-lg-3">
                    </div>
                  </div>
                </div>
              </div>
              }
            </div>
            <div className="col col-lg-4">
            </div>
          </div>
        </div>
    );
};
export default HomeComponent