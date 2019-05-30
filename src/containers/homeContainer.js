import React,{Component} from "react";
import {connect} from "react-redux";
import {createParcel} from "../actions/createParcelActions";
import {fetchParcelOrder} from "../actions/fetchParcelActions";
import "../sass/home.scss";
import NavbarComponent from "../components/navbarComponent";
import HomeComponent from "../components/homeComponent";
import ParcelListComponent from "../components/parcelListComponent";
import FooterComponent from "../components/footerComponent";

export class HomeContainer extends Component{
  constructor(props) {
    super(props);
    this.state={
      display:"",
      receiversName:"",
      description:"",
      pickup:"",
      destination:"",
      weight:""
    };
  };
  componentDidMount() {
    const {fetchParcelOrder} = this.props;
    fetchParcelOrder();
  };
   toggleButton = (event) => {
    event.preventDefault();
    this.setState({display:"block"});
    if (this.state.display==="block"){
      this.setState({display:"none"});
    }
  };
  onChange=event=>{
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({[name]:value});
  };
  onSubmit=(event)=>{
    event.preventDefault();
    const{createParcel} = this.props;
    const {
      receiversName,
      description,
      pickup,
      destination,
      weight
  } = this.state;
    const data = {
      receivers_name:receiversName,
      destination:destination,
      description:description,
      pickup:pickup,
      weight:parseInt(weight)

    };
    createParcel(data);
    fetchParcelOrder();
    this.setState({display:"none"});

  };
  render() {
    const {
      display,
      receiversName,
      description,
      pickup,
      destination,
      weight
    } = this.state;
    const {parcelOrder} = this.props;

    return (
        <div>
          <NavbarComponent/>
          <HomeComponent
              toggleButton={this.toggleButton}
              display={display}
              receiversName={receiversName}
              description={description}
              pickup={pickup}
              destination={destination}
              onChange={this.onChange}
              weight={weight}
              onSubmit={this.onSubmit}
          />
          <ParcelListComponent parcelOrder={parcelOrder}/>
          <FooterComponent/>
        </div>
    );
  }
}
export const mapStateToProps = state=>({
  created:state.parcel.created,
  isLoading:state.parcel.isLoading,
  creationError:state.parcel.creationError,
  parcelOrder:state.parcelOrder.parcelOrders
});
export  default connect(mapStateToProps, {createParcel,fetchParcelOrder})(HomeContainer)