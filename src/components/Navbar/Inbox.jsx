import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ButtonGroup, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Notification } from "./Notification";
import { useNavigate } from "react-router";

export default function Inbox() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [serviceOption, setServiceOption] = React.useState("assigned");

  const open = Boolean(anchorEl);
  const user = useSelector((state) => state.user);
  const serviceNot = useSelector((state) => state.chat.notificationsSolver);
  const standardNot = useSelector((state) => state.chat.notificationsIssuer);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const  handleNotificationClick = (id) => {
    if (user?.type === process.env.REACT_APP_BETA) {
        if (serviceOption === "issued") {
          navigate(`/user/ticket/${id}`);
        } else {
          navigate(`/service/ticket/${id}`);
        }
      } else {
        navigate(`/user/ticket/${id}`);
      }
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        NOTIFICATIONS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {user?.type === process.env.REACT_APP_BETA ? (
          <div>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              sx={{ p: 1 }}
            >
              <Button
                sx={{
                  background: serviceOption === "assigned" && "#39B54A",
                  color: serviceOption === "assigned" && "black",
                }}
                onClick={() => setServiceOption("assigned")}
              >
                Assigned Reports
              </Button>
              <Button
                sx={{
                  background: serviceOption === "issued" && "#39B54A",
                  color: serviceOption === "issued" && "black",
                }}
                onClick={() => setServiceOption("issued")}
              >
                Issued Reports
              </Button>
            </ButtonGroup>

            {serviceOption === "issued" ? (
              standardNot?.notifications ? (
                standardNot.notifications?.map((notification, index) => (
                  <>
                    <MenuItem
                      key={index}
                      onClick={(e) => handleNotificationClick(notification.report)}
                      id={notification?.report}
                    >
                      {notification && (
                        <Notification notification={notification} />
                      )}
                    </MenuItem>
                    <Divider></Divider>
                  </>
                ))
              ) : (
                <Box sx={{ p: 1 }}>
                  <Typography sx={{ ml: 1 }}>{standardNot}...</Typography>
                </Box>
              )
            ) : serviceNot?.notifications ? (
              serviceNot.notifications?.map((notification, index) => (
                <>
                  <MenuItem
                    key={index}
                    onClick={(e) => handleNotificationClick(notification.report)}
                    id={notification?.report}
                  >
                    {notification && (
                      <Notification notification={notification}  />
                    )}
                  </MenuItem>
                  <Divider></Divider>
                </>
              ))
            ) : (
              <Typography sx={{ p: 1, ml: 1 }}>{serviceNot}..</Typography>
            )}
          </div>
        ) : (
          standardNot?.notifications &&
          standardNot.notifications?.map((notification, index) => (
            <>
              <MenuItem
                key={index}
                onClick={(e) => handleNotificationClick(notification.report)}
              >
                {notification && <Notification notification={notification}  />}
              </MenuItem>
              <Divider></Divider>
            </>
          ))
        )}
      </Menu>
    </div>
  );
}
