import React, { useContext, useEffect, useState } from "react";
import Ionicons  from "react-native-vector-icons";
import {
  Card,
  Container,
  Divider,
  Interaction,
  InteractionText,
  InteractionWrapper,
  PostText,
  UserImg,
  UserInfo,
  UserInfoText,
  UserName,
    PostTime,
    PostImg,

} from "../styles/FeedStyles";



export default function PostCard({item}) {

    likeIcon = item.liked ? 'heart' : 'heart-outline';
    likeIconColor = item.liked ? 'red' : 'black';


    if (item.likes == 1) {
        likeText = '1 Like';
      } else if (item.likes > 1) {
        likeText = item.likes + ' Likes';
      } else {
        likeText = 'Like';
      }
    
      if (item.comments == 1) {
        commentText = '1 Comment';
      } else if (item.comments > 1) {
        commentText = item.comments + ' Comments';
      } else {
        commentText = 'Comment';
      }

      

  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>

      <PostText>{item.post}</PostText>


      {item.postImg != "none" ? (
        <PostImg source={item.postImg} />
      ) : (
        <Divider />
      )}


      {/* <PostImg source={require("../assets/posts/post-img-2.jpg")} /> */}
      <Divider />

      <InteractionWrapper>
        <Interaction active = {item.liked}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active= {item.liked}>{likeText}</InteractionText>
        </Interaction>

        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} color="red" />
          <InteractionText>commentText</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
}
