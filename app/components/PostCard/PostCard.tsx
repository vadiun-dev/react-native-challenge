import React from "react";
import { Pressable, View, Text } from "react-native";
import { Post } from "@/app/types/interfaces";
import { capitalizeFirstLetter } from "@/app/utils/helpers";
import { styles } from "./styles";
import CustomIcon from "../CustomIcon/CustomIcon";

interface Props {
  item: Post;
  onPress: () => void;
}
const PostCard = ({ item, onPress }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View style={styles.titleWrapper}>
        <CustomIcon name="newspaper-outline" />
        <Text numberOfLines={1} style={styles.title}>
          {capitalizeFirstLetter(item.title)}
        </Text>
      </View>
      <Text numberOfLines={3} style={styles.body}>
        {item.body}
      </Text>
    </Pressable>
  );
};

export default PostCard;
