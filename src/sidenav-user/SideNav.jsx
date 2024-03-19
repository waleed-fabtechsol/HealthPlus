import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
// import { logout } from '../../redux/counterSlice'
import { buttonStyle, listItemStyle } from "./SideNavStyles";
import { logout } from "../redux/authSlice";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FaStethoscope } from "react-icons/fa";



// import { useDispatch } from "react-redux";


const drawerWidth = 210;
const listItemData = [
  {
    label: "Dashboard",
    link: `/dashboard`,
    icon: <HiOutlineUsers style={{fontSize:"20px"}} />
  },
  {
    label: "Patients",
    link: "/patients",
    icon: <TfiWorld style={{fontSize:"20px"}}/>
  },
  {
    label: "Services",
    link: "/services",
    icon: <HiUserGroup style={{fontSize:"20px"}} />
  },
  {
    label: "Departments",
    link: "/departments",
    icon: <AiOutlineUser style={{fontSize:"20px"}}/>
  },
  {
    label: "Referral to department",
    link: "/referral-to-department",
    icon: <FaStethoscope style={{fontSize:"20px"}}/>
  },
];




function SideNav(props) {
  const [show, setShow] = useState(false)
  const { window } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const drawer = (
    <div className="" style={{ backgroundColor: "#003B93", height: "100vh" , paddingTop:"20px", paddingLeft:"20px" }}>
    <div className="" style={{ backgroundColor: "#003B93", height: "95vh" ,borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"}}>
      <div className="">


        {/* <div className="py-2" style={{backgroundColor:"#F4F9F5",borderTopLeftRadius:"20px"}}> */}

          <div className="p-3 mx-auto" style={{ width: "9rem" }}>
            <img width={"100%"} className="" src='' alt="Logo here" />
          </div>
          
        {/* </div> */}

        {/* <h4 className="p-2 mb-4 text-black text-center fw-bold">Business</h4> */}
        <List className="">
          {listItemData.map((value, i) => (
            <div key={i}>
             <div className="ms-4 rounded-start" >
          <RenderItem value={value} i={i}  style={{backgroundColor:"#FFFFFF" ,borderRadius:"10px"}}/>
          </div>
            </div>
          ))}
        </List>

        <List className="mt-auto position-absolute translate-middle rounded-start-4" style={{bottom:"0px", width:"160px", marginLeft:"110px", backgroundColor:"#04BCFA"}} >
          <ListItem disablePadding className=" list_text "
            onClick={() => {
              dispatch(logout())
              navigate('/')
            }}
            // onClick={() => setShow(true)}
            
          >
              <ListItemText className="d-flex  mt-auto gap-3 px-3" primary={<Typography variant="body2" style={{ fontSize: 14, color: "black",  }} title='logout'><LogoutIcon />Logout</Typography>} />
           
          </ListItem>
        </List>
      </div>
      {/* {show &&
          <MuiDialog 
            // title={"Logout"}
            title={"Are you sure you want to Logout?"} 
            show={show}
            // onHide={show}
            Buttons={
              ()=>(<>
              <Button
              onClick={() => { setShow(false); }}
              >Cancel
              </Button>
                <Button  
                onClick={() => {
               dispatch(logout())
               navigate('/')
                 }}
                 color="error" variant="contained">
                  Logout
                </Button>
              </>
              )
            }
            />
          } */}
    </div>
    </div>
  );




  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className=""
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
        bgcolor: "black",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#FFFFFF",
            color: "#AFB7BE",
            zIndex: { md: 1000, xs: 1200 },
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer

        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            bgcolor: "black",
            border:0,
            color: "#AFB7BE",
            width: drawerWidth,
            zIndex: { md: 1100, xs: 1200 },
          },
        }}
        open
      >
        {drawer}
      </Drawer>

    </Box>
  );
}


SideNav.propTypes = {
  window: PropTypes.func,
};

export default SideNav;



const RenderItem = ({ value, i }) => {
  return (
    value.link ? <ListItem
      key={i}
      component={NavLink}
      to={value?.link || ""}
      disablePadding
      sx={listItemStyle}
      className="rounded-start-4"
    >
      <ListItemButton
        className="list-item list_text "
        sx={{ ...buttonStyle }}
      >
        {/* <ListItemIcon className="myIconClass" sx={{ color: "white", marginRight: -3 }}> {value.icon}</ListItemIcon> */}
        <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize: 14, color: "white", paddingLeft: 0 }} title={value.label}>{value.label}</Typography>} />
      </ListItemButton>
    </ListItem> :

      <ListItemButton className="list-item list_text no_link_list_item "
        sx={{ ...buttonStyle, "&:hover": { backgroundColor: "#04BCFA" } }}
      >
        {/* <ListItemIcon className="myIconClass" sx={{ color: "white", }}>{value.icon}</ListItemIcon> */}
        <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize: 14, color: "red", fontWeight: "bold" }} title={value.label}>{value.label}</Typography>} />
      </ListItemButton>
  );
};
