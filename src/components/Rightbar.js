import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={350}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.myballard.com/wp-content/uploads/profile-pic.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://thumbs.dreamstime.com/b/happy-afro-american-man-smiling-white-studio-background-african-american-male-profile-portrait-african-man-dreadlocks-smiling-129597227.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/originals/21/d1/3b/21d13b9889496cfc90ad3539e40abd08.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg"
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/originals/21/d1/3b/21d13b9889496cfc90ad3539e40abd08.jpg"
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.myballard.com/wp-content/uploads/profile-pic.jpg"
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://thumbs.dreamstime.com/b/happy-afro-american-man-smiling-white-studio-background-african-american-male-profile-portrait-african-man-dreadlocks-smiling-129597227.jpg"
              loading="lazy"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://www.myballard.com/wp-content/uploads/profile-pic.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
