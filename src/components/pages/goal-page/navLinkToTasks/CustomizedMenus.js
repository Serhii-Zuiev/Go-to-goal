import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import AssistantIcon from "@material-ui/icons/Assistant";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({root: {
  '&:focus': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: theme.palette.common.white,
    },
  },
},}))(MenuItem);

export default function CustomizedMenus({ pageOfHeader }) {
  const GOALS_PAGE = "goals";
  const TSASKS_PAGE = "tasks";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
        aria-label="more"
      >
        <MoreVertIcon />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pageOfHeader === GOALS_PAGE && (
          <NavLink to="/tasks">
            <StyledMenuItem>
              <ListItemIcon>
                <AssignmentIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="До завдань" />
            </StyledMenuItem>
          </NavLink>
        )}
        {pageOfHeader === TSASKS_PAGE && (
          <NavLink to="/goals">
            <StyledMenuItem>
              <ListItemIcon>
                <AssistantIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="До цілей" />
            </StyledMenuItem>
          </NavLink>
        )}

        <NavLink to="/auth/logout">
          <StyledMenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText secondary="Вийти" />
          </StyledMenuItem>
        </NavLink>
      </StyledMenu>
    </div>
  );
}
