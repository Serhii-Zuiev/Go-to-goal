import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import style from './current-goal.module.css'

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

export default function CustomizedMenus({ goalsList, getGoal }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getOneGoal = (id) => {
    getGoal(id);
    handleClose()
  };

  return (
    <div className={style.menuBurger}>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
        aria-label="more"
      >
       <MenuIcon />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {goalsList.length > 0 && goalsList.map((goal) => (
          <div onClick={() => getOneGoal(goal._id)} key={goal._id}>
            <MenuItem>
              <ListItemText secondary={goal.title} />
            </MenuItem>
          </div>
        ))}
        {goalsList.length === 0 && 
            <div onClick={() => handleClose()} >
            <MenuItem>
              <ListItemText secondary={'Немає цілей'} />
            </MenuItem>
            </div>
        }
      </StyledMenu>
    </div>
  );
}
