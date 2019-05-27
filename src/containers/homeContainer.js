import React,{Component} from "react";
import {connect} from "react-redux";
import {createParcel} from "../actions/createParcelActions"
import "../sass/home.scss"
import HomeComponent from "../components/homeComponent";
import ParcelListComponent from "../components/parcelListComponent";
import FooterComponent from "../components/footerComponent";
class HomeContainer extends Component{
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
    console.log(data);
    createParcel(data);
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
    return (
        <div>
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
          <ParcelListComponent/>
          <FooterComponent/>
        </div>
    );
  }
}
export const mapStateToProps = state=>({
  created:state.parcel.created,
  isLoading:state.parcel.isLoading,
  creationError:state.parcel.creationError
});
export  default connect(mapStateToProps, {createParcel})(HomeContainer)